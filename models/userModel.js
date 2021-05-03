const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  basket: {
    items: [
      {
        count: {
          type: Number,
          required: true,
          default: 1,
        },
        carId: {
          type: Schema.Types.ObjectId,
          ref: 'Car',
          required: true,
        }
      }
    ]
  }
})

module.exports = model('User', userSchema)