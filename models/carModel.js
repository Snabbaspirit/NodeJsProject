const {Schema, model} = require('mongoose');

const car = new Schema({
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: String
})


module.exports = model('Car', car);