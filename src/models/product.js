const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String
    },
    description : {
        type : String
    },
    images : [String]
});

const Product = mongoose.model('product' , productSchema);

module.exports = Product;