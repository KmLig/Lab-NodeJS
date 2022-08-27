const path = require("path");

const express = require("express");

const adminController = require('../controllers/admin');

const router = express.Router();


// /admin/add-product => GET request
router.get("/add-product", adminController.getAddProducts);

// /admin/products => GET request
router.get("/products", adminController.getProducts);

// /admin/add-product => POST request
router.post("/add-product", adminController.postAddProducts);

// module.exports = router;
module.exports = router;

