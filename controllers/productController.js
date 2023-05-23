const Product = require("../models/products");
const Customer = require("../models/customers");
const Transaction = require("../models/transactions");
var db = require("../database.js");
const mongoose = require("mongoose");
const { session } = require("passport");
exports.createProduct = async (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const author = req.body.author;
    const genre = req.body.genre;
    const quantity = req.body.quantity;
    const product = new Product({ name, price, author, genre, quantity });
    const savedProduct = await product.save();
    res.status(201).json({
        message: "New Product Added",
        product: savedProduct
    });
};

exports.buyProduct = async (req, res, next) => {
    const CID = req.session.userId;
    const PID = req.body.id;
    console.log(CID, PID);
    const product = await Product.findOne({ _id: PID });
    const customer = await Customer.findOne({ _id: CID });
    if (!customer) {
        res.status(201).json({
            message: "Customer Not Found"
        });
    }
    else if (!product) {
        res.status(201).json({
            message: "Product Not Found"
        });
    }
    else {
        if (product.qty > 0) {
            product.qty -= 1;
            await product.save();
            customer.items.push(product._id);
            customer.total += product.price;
            const Ncustomer = await customer.save();
            res.status(201).json({
                message: "Product Bought",
                product: product,
                customer: Ncustomer
            });
        }
        else {
            res.status(201).json({
                message: "Product Out Of Stock",
                product: product
            });
        }
    }
};
exports.checkOut = async (req, res, next) => {
    const CID = req.body.CID;
    const customer = await Customer.findOne({ _id: CID });
    const items = customer.items;
    const transaction = new Transaction({ CID, items });
    const newTransaction = await transaction.save();
    customer.items = [];
    customer.total = 0;
    cart = await customer.save()
    res.status(201).json({
        message: "New Transaction Added To History",
        transaction: newTransaction,
        customerCart: cart
    });
};
exports.getProductURL = async (req, res, next) => {
    const ID = req.params.id;
    const product = await Product.findOne({ _id: ID })
    res.status(201).json({
        message: product ? "Product found" : "Product not found",
        product: product
    });
};
