const path = require('node:path');
const router = require('express').Router();
const adminController = require('./../controllers/admincontroller');
const multer = require('multer');
const appError = require('../utils/appError');
const storage = multer.diskStorage({
    destination : (req , file , cb)=>{
        cb(null , path.join(__dirname, './../uploads'));
    },
    filename : (req , file , cb)=>{
        cb(null , Date.now() + file.originalname + `.${file.mimetype.split('/')[1]}`);
    }

});
const upload = multer({
    storage : storage,
    fileFilter : (req , file , cb)=>{
        if(file.mimetype.split('/')[0] === 'image'){
            return cb(null , true);
        } else {
            return cb(appError.createError(400 , 'image not authorized') , false);
        }
    }
}); 



router.post('/login' , adminController.login);
router.get('/products' , adminController.products);
router.get('/users' , adminController.users);
router.get('/ProductDetails' , adminController.ProductDetails);
router.get('/userDetails' , adminController.userDetails);
router.delete('/product' , adminController.deleteProduct);
router.delete('/user' , adminController.deleteUser);
router.post('/add',upload.array('images' , 4) , adminController.add);


module.exports = router;