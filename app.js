//! Importing Modules
var express = require("express");
const session = require('express-session');
var bodyParser = require("body-parser");
const customerRoute = require("./routes/customerRoute")
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
		secure: false,
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
	res.redirect("/HomePage");
})

app.get("/HomePage", function (req, res) {
	res.render('HomePage', { userId: req.session.userId });
})
app.get("/Categories", function (req, res) {
	res.render("Categories", { userId: req.session.userId });
})

app.get("/AboutUS", function (req, res) {
	res.render("AboutUs", { userId: req.session.userId });
})
app.get("/ContactUs", function (req, res) {
	res.render("ContactUs", { userId: req.session.userId });
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
	console.log("go to http://localhost:" + port);
});


module.exports = app;