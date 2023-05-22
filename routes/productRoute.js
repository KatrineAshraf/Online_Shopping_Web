const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');
const router = express.Router();
var bodyParser = require("body-parser");
const productController = require("../controllers/productController");
const db = require("../database.js");

router.get("/products/:id", productController.getProductURL);
router.post("/add-product", productController.createProduct);
router.post("/cart", productController.buyProduct);
router.post("/Section", async function(req, res){
	console.log(req.body.category)

        //! Check if the user exists
        let products = await db.collection('products').find({ category: req.body.category }).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
           
		  });
        res.render('List', {products: products});
      
});
router.post('/Product', async function(req, res){
	console.log(req.body.id)
	let item = await db.collection('products').findOne({_id : new ObjectId(req.body.id)})
	console.log(item)
	res.render('Product', {product: item});
});
module.exports = router;