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
	
	// Tietokantamallin mukaan haetaan dataa
	var personInfo = mongoose.Schema({
		
		user_name:String,
		address:String,
		email:String
		
	});
	
	// PersonInfoModel object contains the needed function
	// for CRUD (create, read, update and delete) operations
	var PersonInfoModel = mongoose.model('PersonInfo', personInfo);
	
	// This function stores the user information to database
	exports.addPersonInfo = function(res, data){
		
		var temp = new PersonInfoModel();
		temp.user_name = data.user_name;
		temp.address = data.address;
		temp.email = data.email;
		
		temp.save();
		res.send("Your information " + data + " was saved to database.");
		
	}
	