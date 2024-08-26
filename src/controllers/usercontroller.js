const asyncwrapper = require('./../middleware/asyncwrapper');
const bcrypt = require('bcrypt');
const jwt = require('./../utils/generateToken');
const User = require('./../models/user');


const login = asyncwrapper(async (req , res , next)=>{

});
const register = asyncwrapper(async (req , res , next)=>{

});
const products = asyncwrapper(async (req , res , next)=>{

});
const command = asyncwrapper(async (req , res , next)=>{

});
const details = asyncwrapper(async (req , res , next)=>{

});


module.exports = {
    login,
    register,
    products,
    command,
    details
}