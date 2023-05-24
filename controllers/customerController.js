const Customer = require("../models/customers");
const Product = require("../models/products");
const productController = require("../controllers/productController");
const transactions = require("../models/transactions");


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
	//const user = await Customer.findOne({ email : email });
	req.session.userId = savedCustomer._id;
    res.redirect("/HomePage");
};

exports.signIn = async (req, res, next) => {
    try {
		//! Check if the user exists
		var email = req.body.email;
		const user = await Customer.findOne({ email : email });
		//console.log(user);
		if (user) {
			//! Check if password matches
			const result = req.body.password === user.password;
			if (result) {
                req.session.userId = user._id;
               // console.log(req.session);
			//	console.log("Loggin Page Hit !")
				res.redirect("/HomePage");
			} else {
				console.log("Incorrect Password !")
				res.redirect("/HTML/SignIn.html");
			}
		} else {
			console.log("No Such User !")
			res.redirect("/HTML/SignIn.html");
		}
	} catch (error) {
		//console.log("Request Error !")
		res.status(500).json({ error });
	}
};

exports.signOut = async (req, res, next) => {
    req.session.destroy((err) => {
		if (err) {
		  console.log('Error destroying session:', err);
		} else {
		  res.redirect('/SignIn.html');
		}
	  });
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
exports.getProfile = async (req, res, next) => {
    const customer = await Customer.findOne({_id: req.session.userId})
    if (customer){
		const Transactions = await transactions.find({CID: req.session.userId})
		var spent = 0;
	//	console.log(Transactions[0]);
		for (let i=0; i<Transactions.length; i++){
			spent += Transactions[i].total;
		}
        res.render('profile', { customer: customer , spent: spent})
    }
};

exports.getCart = async (req, res, next) =>  {
	const customer = await Customer.findOne({ _id: req.session.userId });
	const booksID = customer.items;
	let books = [];
	//console.log("books: " + booksID)
	for (let i = 0; i < booksID.length; i++) {
		const product = await Product.findOne({ _id: booksID[i] })
	//	console.log("book" + (i+1) +": "+ booksID[i])
		books.push(product);
	}
	//console.log("final books: " + books)
	res.render("cart", { products: books, total: customer.total});
	
}