const asyncwrapper = require('./../middleware/asyncwrapper');
const bcrypt = require('bcrypt');
const jwt = require('./../utils/generateToken');
const User = require('./../models/user');
const appError = require('./../utils/appError');
const Product = require('./../models/product');


const login = asyncwrapper(async (req , res , next)=>{
    const {email , password} = req.body;

    const user = await User.findOne({email});
    if(!user) return next(appError.createError(404 , 'email or password incorrect'));

    const result = await bcrypt.compare(password , user.password);
    if(!result) return next(appError.createError(401 , 'email or password incorrect'));

    const token = jwt({email , _id : user._id});

    user.token = token;
    await user.save();
    res.status(201).json({message : 'login success' , token , _id : user._id});
});

const register = asyncwrapper(async (req , res , next)=>{
    const {userName , email , password} = req.body;


    const hashedPassword = await bcrypt.hash(password , 10);

    let user = User({
        userName,
        email,
        password : hashedPassword
    });

    await user.save();
    user = await User.findById(user._id);
    user.token = jwt({email , _id : user._id});

    await user.save();

    res.status(201).json({message : 'user registred successfully' , token : user.token , _id : user._id});
});

const products = asyncwrapper(async (req , res , next)=>{
    const products = await Product.find({});
    res.status(200).json({data : products});
});

const command = asyncwrapper(async (req , res , next)=>{
    const user = await User.findById(req.body._id);
    const productId = req.body.productId;
    if(!user.commands.includes(productId)){
        user.commands.push(productId);
        user.save();
        res.status(202).json({message : 'command successfull'});
    }else {
        return next(appError.createError(401 , 'product already commanded'));
    }
});

const details = asyncwrapper(async (req , res , next)=>{
    const product = await Product.findById(req.body.productId);
    res.status(200).json({data : product});
});

const listCommands = asyncwrapper(async (req , res , next)=>{
    const user = await User.findById(req.body._id);
    const products = await Product.find({
        _id : {$in : user.commands}
    });
    res.status(200).json({data : products});
});




module.exports = {
    login,
    register,
    products,
    command,
    details,
    listCommands
}