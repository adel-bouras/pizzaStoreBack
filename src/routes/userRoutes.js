const router = require('express').Router();
const userController = require('./../controllers/usercontroller');
const verifyToken = require('./../middleware/verifyToken');
const verifyOTP = require('../middleware/verifyOTP');
const sendOTP = require('./../middleware/sendOTP');

router.post('/login' , userController.login);

router.post('/sendOTP' , sendOTP);

router.post('/register', verifyOTP , userController.register);

router.get('/products' , verifyToken , userController.products);

router.get('/details' , verifyToken , userController.details);

router.post('/command' , verifyToken , userController.command);

router.get('/listCommands' , verifyToken , userController.listCommands);


module.exports = router;