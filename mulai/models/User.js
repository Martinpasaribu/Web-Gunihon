const mongoose = require('mongoose');



const aa = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


const User = mongoose.model('User', aa);

module.exports = User;
