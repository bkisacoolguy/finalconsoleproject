const express = require('express');
const router = express.Router();

const { signupValidation, loginValidation } = require('../Middleware/AuthValidation');
const { signup, login } = require('../Controllers/AuthController');

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

module.exports = router;

// const { signup, login } = require('../Controllers/AuthController');
// const { signupValidation, loginValidation } = require('../Middleware/AuthValidation');

// const router =require('express').Router();

// router.post('/login', loginValidation, login);
// router.post('/signup', signupValidation, signup);

// module.exports =router;