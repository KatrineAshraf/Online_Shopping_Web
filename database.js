const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Katie:sL3snW4OfU5HwJXN@bookstore.lfqrnvw.mongodb.net/BookStore?retryWrites=true&w=majority&appName=BookStore');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open',function(callback){
	console.log("Connection Succeeded");
	console.log('Connected to database:', mongoose.connection.db.databaseName);
	})
db = db.useDb('Project');
module.exports = mongoose;