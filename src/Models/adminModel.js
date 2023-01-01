const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
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

module.exports = mongoose.model('admin',slotSchema)