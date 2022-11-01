const express = require("express");
const router = express.Router();
const {addOrderItems,getOrders}= require('../controllers/orderController.js');

router.post('/orders/add', addOrderItems);
router.get('/orders/get', getOrders);

module.exports = router;