//! Importing Modules
var express = require("express");
var bodyParser = require("body-parser");
var db = require("../project/database.js");
const customerRoute = require("./routes/customerRoute")
const productRoute = require("./routes/productRoute")
var path = require("path");

//! Database Connection


//! Express Server Initialization
var app = express()
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'Public')));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(productRoute);
app.use(customerRoute);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
//! User Registration
app.post('/Users', function(req,res){
	/*var fname = req.body.fname;
	var lname = req.body.lname;
	var email =req.body.email;
	var pass = req.body.password;
	var gender =req.body.gender;
*/
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
module.exports = app;