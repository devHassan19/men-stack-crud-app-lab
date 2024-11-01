const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema({
  model: String,
  color: String,
  year: Number
})

const Cars = mongoose.model('Cars', carsSchema)
module.exports = Cars
