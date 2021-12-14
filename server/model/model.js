const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    imgPath : {
        type: String,
        required: true,
        unique: true
    },
    objPath : {
        type: String,
        required: true,
        unique: true
    }
    
})

const Userdb = mongoose.model('medias', schema);

module.exports = Userdb;