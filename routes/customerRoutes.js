const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/products', customerController.getAllProducts);

module.exports = router;
