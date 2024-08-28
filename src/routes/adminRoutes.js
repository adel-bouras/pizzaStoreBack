const router = require('express').Router();
const adminController = require('./../controllers/admincontroller');

router.post('/login' , adminController.login);
router.get('/products' , adminController.products);
router.get('/users' , adminController.users);
router.get('/ProductDetails' , adminController.ProductDetails);
router.get('/userDetails' , adminController.userDetails);
router.delete('./product' , adminController.deleteProduct);
router.delete('./user' , adminController.deleteUser);
router.post('./add' , adminController.add);


module.exports = router;