//! Importing Modules
var express = require("express");
const session = require('express-session');
var bodyParser = require("body-parser");
var db = require("./database.js");
const customerRoute = require("./routes/customerRoute")
const Customer = require("./models/customers.js");
const productRoute = require("./routes/productRoute")
var path = require("path");
const cookieParser = require("cookie-parser");

//! Database Connection


//! Express Server Initialization
var app = express();
app.use(cookieParser());
app.use(session({
	secret: 'idk',
	saveUninitialized: true,
    resave: true,
	cookie: {
		secure:false,
	  httpOnly: false,
	}
  }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'Public')));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(productRoute);
app.use(customerRoute);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.redirect("/HTML/HomePage.html");
})

app.get("/HomePage", function (req, res) {
	res.redirect("/HTML/HomePage.html");
})
app.get("/Categories", function (req, res) {
	res.redirect("/HTML/Categories.html");
})
app.get("/TopSellers", function (req, res) {
	res.redirect("/HTML/HomePage.html");
})
app.get("/AboutUS", function (req, res) {
	res.redirect("/HTML/AboutUS.html");
})
app.get("/ContactUs", function (req, res) {
	res.redirect("/HTML/ContactUs.html");
})
app.get("/SignIn.html", function (req, res) {
	res.redirect("/HTML/SignIn.html");
})
app.get("/SignUp.html", function (req, res) {
	res.redirect("/HTML/SignUp.html");
})

var port = 5500;
app.listen(port, function () {
	console.log("Server Is Listening To Port 5500 !");
});
module.exports = app;