const Customer = require("../models/customers");
const productController = require("../controllers/productController")
exports.createCustomer = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const items = [];
    const total = 0;
    const customer = new Customer({ name, email, items, total });
    const savedCustomer = await customer.save();
    res.status(201).json({
        message: "Customer Added",
        customer: savedCustomer
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