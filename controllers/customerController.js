const Customer = require("../models/customers");
const productController = require("../controllers/productController")
exports.createCustomer = async (req, res, next) => {
    console.log(req.body);
    var fname = req.body.fname;
	var lname = req.body.lname;
	var email =req.body.email;
	var password = req.body.password;
	var gender =req.body.gender;
	var items = []
	var total = 0;
    const customer = new Customer({ fname, lname, email, password, gender, items, total });
    const savedCustomer = await customer.save();
    res.redirect("/HTML/HomePage.html");
};

exports.signIn = async (req, res, next) => {
    try {
		//! Check if the user exists
		var email = req.body.email;
		const user = await Customer.findOne({ email : email });
		console.log(user);
		if (user) {
			//! Check if password matches
			const result = req.body.password === user.password;
			if (result) {
                req.session.userId = user._id;
                console.log(req.session);
				console.log("Loggin Page Hit !")
				res.redirect("/HTML/HomePage.html");
			} else {
				console.log("Incorrect Password !")
				res.redirect("/HTML/SignIn.html");
			}
		} else {
			console.log("No Such User !")
			res.status(404).json({ error: "User doesn't exist" });
		}
	} catch (error) {
		console.log("Request Error !")
		res.status(500).json({ error });
	}
};

exports.getCustomers = async (req, res, next) => {
    const customers = await Customer.find();
    res.status(201).json({
        message: customers.length ? "All Customers" : "No Registered Customers",
        customers: customers
    });
};

exports.buyItem = async (req, res, next) => {
    productController.buyProduct(req, res, next);
};
exports.checkOut = async (req, res, next) => {
    productController.checkOut(req, res, next);
};