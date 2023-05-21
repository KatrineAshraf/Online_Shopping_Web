const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/products/:id", productController.getProductURL);
router.post("/add-product", productController.createProduct);

module.exports = router;