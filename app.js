//! Importing Modules
var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
const customerRoute = require("./routes/customerRoute")
const productRoute = require("./routes/productRoute")

//! Database Connection
mongoose.connect('mongodb+srv://AbdelrahmanEssmat:project12345@cluster0.0pmfj5p.mongodb.net/MyDatabase');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("Connection Succeeded");
})

//! Express Server Initialization
var app = express()
app.use(bodyParser.json());
app.use(express.static('Public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(productRoute);
app.use(customerRoute);

//! User Registration
app.post('/Users', function(req,res){
	var fname = req.body.fname;
	var lname = req.body.lname;
	var email =req.body.email;
	var pass = req.body.password;
	var gender =req.body.gender;

	console.log(req.body);
	db.collection('Users').insertOne(req.body,function(err, collection){
		if (err) throw err;
		console.log("Record Inserted Successfully");		
	});	
	return res.redirect("/HTML/HomePage.html");
})

//! User Login
app.post("/login", async function(req, res){
    try {
        //! Check if the user exists
        const user = await db.collection('Users').findOne({ email: req.body.email });
		console.log(user);
        if (user) {

          //! Check if password matches
          const result = req.body.password === user.password;
          if (result) {
			console.log("Loggin Page Hit !")
            res.redirect("/HTML/secret.html");
          } else {
			console.log("Incorrect Password !")
            res.status(400).json({ error: "Incorrect Password" });
          }
        } else {
			console.log("No Such User !")
        	res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
			console.log("Request Error !")
        	res.status(400).json({ error });
      }
});

app.get('/', function (req, res) {
	res.redirect("/HTML/HomePage.html");
})

var port = 5500;
app.listen(port, function () {
    console.log("Server Is Listening To Port 5500 !");
});
