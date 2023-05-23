const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');
const router = express.Router();
var bodyParser = require("body-parser");
const productController = require("../controllers/productController");
const db = require("../database.js");

//router.get("/products/:id", productController.getProductURL);
router.post("/add-product", productController.createProduct);
router.post("/cart", productController.buyProduct);
router.post("/Section", productController.ListProduct);
router.post('/Product', productController.getProduct);
module.exports = router;