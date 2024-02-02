const mongoose = require('mongoose');
const { productSchema } = require('./Product');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [{
    type: [productSchema],
    ref: 'Product',
  }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = { User, userSchema };
