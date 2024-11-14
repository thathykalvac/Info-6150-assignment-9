const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  companyName: { type: String},
  image: { type: String, default: null } // Add this field to store the image URL or path
});

const User = mongoose.model('User', userSchema);

module.exports = User;
