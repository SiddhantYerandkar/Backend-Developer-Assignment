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
    }, Age: {
        type: Number,
        required: true,
        trim: true
    }, Pincode: {
        type: Number,
        required: true,
        trim: true
    }, AadharNo: {
        type: String,
        required: true,
        trim: true
    },vaccinationStatus :{
        type : String,
        enum : ['none','First Dose Completed','All Completed'],
        default : "none"
    }
})

module.exports = mongoose.model('user',userSchema)