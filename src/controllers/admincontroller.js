const asyncwrapper = require("../middleware/asyncwrapper");
const Product = require('./../models/product');
const appError = require("../utils/appError");
const User = require('./../models/user');




const login = asyncwrapper(async (req , res , next)=>{
    const {email , password} = req.body;
    if(email !== 'admin@pizzahub.com' || password !== 'admin') return next(appError.createError(400 , 'email or password are incorrect'));
    res.status(201).json({message : 'login success'});
});
const products = asyncwrapper(async (req , res , next)=>{
    const products = await Product.find({});
    res.status(200).json({data : products});
});
const users = asyncwrapper(async (req , res , next)=>{
    const users = await User.find({});
    res.status(200).json({data : users});
});
const ProductDetails = asyncwrapper(async (req , res , next)=>{
    const product = await Product.findById(req.body.productId);
    res.status(200).json({data : product});
});
const userDetails = asyncwrapper(async (req , res , next)=>{
    const user = await User.findById(req.body._id);
    res.status(200).json({data : user});
});
const deleteProduct = asyncwrapper(async (req , res , next)=>{
    await Product.findByIdAndDelete(req.body.productId);
});
const deleteUser = asyncwrapper(async (req , res , next)=>{
    await User.findByIdAndDelete(req.body.userId);
    res.status(200).json({message : 'user deletion success'});
});
const add = asyncwrapper(async (req , res , next)=>{
    const images = req.files.map(( element )=>element.filename);
    const product = Product({
        name : req.body.name,
        description : req.body.description,
        images,
        type : req.body.type
    });
    await product.save();
    res.status(200).json({message : 'product added succesfully'});
});

module.exports = {
    login,
    products,
    add,
    deleteProduct,
    deleteUser,
    userDetails,
    ProductDetails,
    users
}