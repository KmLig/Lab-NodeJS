const path = require("path");

const express = require("express");

const productControllers = require('../controllers/products');

const router = express.Router();


// /admin/add-product => GET request
router.get("/add-product", productControllers.getAddProducts);

// /admin/add-product => POST request
router.post("/add-product", productControllers.postAddProducts);

// module.exports = router;
module.exports = router;

