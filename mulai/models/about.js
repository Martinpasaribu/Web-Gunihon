
const mongoose = require('mongoose') ;

const UserSchema = new mongoose.Schema({
    teks: {
      type: String,
    
    },
    name: {
        type: String,
        required: true
      }
  });
  
  
const about =  mongoose.model('about',UserSchema);

module.exports = about;