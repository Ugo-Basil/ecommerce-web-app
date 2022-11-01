const express = require('express');
const router = express.Router();

const { signUp, signIn } = require('../controllers/userController.js');


router.post('/auth/signup', signUp);
router.post('/auth/signin', signIn);

module.exports = router;
