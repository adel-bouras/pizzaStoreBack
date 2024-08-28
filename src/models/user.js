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
       type : [mongoose.Schema.Types.ObjectId],
       default : []
    } ,
    token : {
        type : String
    }

});

module.exports = mongoose.model('user' , userSchema);
 