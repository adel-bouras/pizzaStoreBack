const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name : 'admin',
    email : 'admin@pizzaHub.com',
    password : 'admin'
});


const Admin = mongoose.model('admin' , adminSchema);

module.exports = Admin;