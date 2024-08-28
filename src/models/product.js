const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String
    },
    description : {
        type : String
    },
    images : [String],
    type :{
        type : String
    }
});

module.exports = mongoose.model('product' , productSchema);