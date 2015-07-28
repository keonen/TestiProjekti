var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World, palvelin on nyt käynnissä ja toimii taas.')
});

// app.get('/name', function (req, res) {
    // res.send('Name-hakemiston sisältöä.')
// });

app.get('/name', function (req, res) {
    res.send('Testijuttu.')
});

app.listen(3000);