const mongoose = require('mongoose');
const Product = require('./product');

const userSchema = new mongoose.Schema({
    userName : {
        type : String
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String
    },
    commands :{
       type : [Product],
       default : []
    } ,
    token : {
        type : String
    }

});

const User = mongoose.model('user' , userSchema);

module.exports = User;