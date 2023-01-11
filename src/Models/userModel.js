const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    PhoneNumber: {
        type: Number,
        required: true,
        trim: true
    },
    password:{
        type:String,
        trim:true
    }
})

module.exports = mongoose.model('user',userSchema)