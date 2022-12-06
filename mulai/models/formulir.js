
const mongoose = require('mongoose') ;

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      
    },
    jk: {
      type: String,
      required: true
    },
    nowa: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
      },
    sts: {
        type: String,
        required: true
      },
    program: {
        type: String,
        required: true
      },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  
const formulir =  mongoose.model('formulir',UserSchema);

module.exports = formulir;