const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  time: {
    type: Date,
    required: true
  }, slot: {
    type: Date,
    required: true
  }, numberOfDose: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('slot', slotSchema)