var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
     'article-One' : {
        heading :'Compsgeek',
        title: 'Number-one : Compsgeek',
        date: 'March 16, 2017',
        content: 'COmpsgeek = cool guy ! Awesome frnd ! Cheerful memories'
    },
     'article-Two' : {
        heading :'Maveric',
        title: 'Number-two : Maverickk',
        date: 'March 16, 2017',
        content: 'Maverick = Team Player ! Awesome frnd ! Cheerful memories'
    },
     'article-Three': {heading :'Maveric',
        title: 'Number-three : Nikhil',
        date: 'March 16, 2017',
        content: 'Nikhil = cool guy ! Awesome frnd ! Cheerful memories'}
};

function createTemplate(data){
   var heading= data.heading;
   var title=data.title;
   var date= data.date;
   var content= data.content;
  
        var htmlTemplate= `
             <html>
                <head>
                    <title>
                        ${title}
                    </title>
                    <style>
                     <link href="/ui/style.css" rel="stylesheet" />
                    </style>
                </head>
                <body>
                   <div class="container">
                    <div>
                        <a href='/'>Home</a>
                    </div>
                    <h2>
                        ${heading}
                    </h2>
                    <div>
                        ${date}
                    </div>
                    <div>
                        <p>${content}</p>
                    </div>
                  </div>  
                </body>
            </html>
        `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
   var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
