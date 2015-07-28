var express = require('express');
var app = express();

// This is called for every request (middleware)
app.use(function(req, res, next){
	console.log(req.method);
	next();
});

app.use('/', express.static('public_html'));

// app.get('/', function (req, res) {
    // res.sendfile('index.html');
// });

// app.get('/name', function (req, res) {
    // res.send('Name-hakemiston sisältöä.')
// });

// app.get('/style.css', function (req, res) {
    // res.sendfile('style.css');
// });

app.listen(3000);