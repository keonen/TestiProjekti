var express = require('express');
var app = express();

// This is called for every request
app.use(function(req, res, next){
	
});

app.get('/', function (req, res) {
    res.sendfile('index.html')
});

// app.get('/name', function (req, res) {
    // res.send('Name-hakemiston sisältöä.')
// });

app.get('/style.css', function (req, res) {
    res.sendfile('style.css')
});

app.listen(3000);