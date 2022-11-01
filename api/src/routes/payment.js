const {payment} = require('../controllers/paymentController');
const express = require("express");
const router = express.Router();

router.post('/payment', payment);

module.exports = router;