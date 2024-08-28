const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name : {
        type : String,
        default : 'admin'
    },

    email : {
        type : String,
       default : 'admin@pizzaHub.com'
    },
    password : {
        type : String,
       default : 'admin'
    }
});


const Admin = mongoose.model('admin' , adminSchema);

module.exports = Admin;