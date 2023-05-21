const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

router.get("/customers", customerController.getCustomers);
router.put("/customer/buy", customerController.buyItem);
router.post("/customer/checkOut", customerController.checkOut);
router.post("/add-customer", customerController.createCustomer);

module.exports = router;