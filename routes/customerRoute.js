const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

router.get("/customers", customerController.getCustomers);
router.put("/customer/buy", customerController.buyItem);
router.post("/customer/checkout", customerController.checkOut);
router.post("/Users", customerController.createCustomer);
router.post("/login", customerController.signIn);

module.exports = router;