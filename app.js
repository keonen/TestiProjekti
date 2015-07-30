var express = require('express');
var bodyParser = require('body-parser');
var db = require('./database');
var app = express();

// This is called for every request (middleware)
app.use(function(req, res, next){
	console.log(req.method);
	next();
});

app.use('/', express.static('public_html'));

//parse application/json
app.use(bodyParser());

//configure jade for this server
app.set('views','./views');
app.set('view engine','jade');

app.post('/contact', function (req, res) {
	console.log(req.body);
	db.addPersonInfo(res, req.body);
	
    //res.send('Username is '+req.body.username+ '. <br />Address is '+req.body.address+'. <br />Email is '+req.body.email+'. ');
});

	app.get('/get_contacts', function (req, res) {
			db.getPersonInfo(res);
		});

// app.get('/style.css', function (req, res) {
    // res.sendfile('style.css');
// });

app.listen(3000);