const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: String, required: true, trim: true },
  about: { type: String, trim: true },
  image: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('Fruit', fruitSchema);
