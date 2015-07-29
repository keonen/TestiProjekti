	/**
    * This module connects to MongoDB and defines the needed database
	* documents. This also contains functions to make queries for db.
	*/

var mongoose = require("mongoose");
var uriString = 'mongodb://localhost/person_info';

mongoose.connect(uriString, function (err, res){
	
	if (err)
	{
		console.log("Connection to: " + uriString + " failed.");
	}
	else
	{
		console.log("Connected to: "+ uriString);
	}
	
});