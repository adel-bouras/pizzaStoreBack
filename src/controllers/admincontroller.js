const asyncwrapper = require("../middleware/asyncwrapper");
const Product = require('./../models/product');
const Admin = require('./../models/admin');

const login = asyncwrapper(async (req , res , next)=>{

});
const products = asyncwrapper(async (req , res , next)=>{

});
const users = asyncwrapper(async (req , res , next)=>{

});
const ProductDetails = asyncwrapper(async (req , res , next)=>{

});
const userDetails = asyncwrapper(async (req , res , next)=>{

});
const deleteProduct = asyncwrapper(async (req , res , next)=>{

});
const deleteUser = asyncwrapper(async (req , res , next)=>{

});
const add = asyncwrapper(async (req , res , next)=>{

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