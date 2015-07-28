var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World, palvelin on nyt käynnissä ja toimii taas.')
});

app.listen(3000);