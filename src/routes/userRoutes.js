const router = require('express').Router();
const userController = require('./../controllers/usercontroller');
const verifyToken = require('./../middleware/verifyToken');
const verifyOTP = require('../middleware/verifyOTP');
const sendOTP = require('./../middleware/sendOTP');
const multer = require('multer');
const appError = require('../utils/appError');
const storage = multer.diskStorage({
    destination : (req , file , cb)=>{
        cb(null , './../uploads');
    },
    filename : (req , file , cb)=>{
        cb(null , Date.now() + `.${file.mimetype.split('/')[1]}`);
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



router.post('/login' , userController.login);

router.post('/sendOTP' , sendOTP);

router.post('/register', verifyOTP , userController.register);

router.get('/products' , verifyToken , userController.products);

router.get('/details' , verifyToken , userController.details);

router.post('/command' , verifyToken , userController.command);

router.get('/listCommands' , verifyToken , userController.listCommands);


module.exports = router;