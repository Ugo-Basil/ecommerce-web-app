const express = require('express');
const router = express.Router();

const { addProduct, getProducts } = require('../controllers/productsController.js');

router.post('/add', addProduct);
router.get('/get', getProducts);

module.exports = router;
