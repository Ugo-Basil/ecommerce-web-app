const express = require("express");
const router = express.Router();
const {addOrderItems,getOrders}= require('../controllers/orderController.js');

router.post('/add', addOrderItems);
router.get('/get', getOrders);

module.exports = router;