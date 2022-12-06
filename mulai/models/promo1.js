
const mongoose = require('mongoose') ;

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
 
    },
    hasli: {
        type: String,
        required: true
      },
      hpromo: {
        type: String,
        required: true
      },
      fit1: {
        type: String,
        required: true
      },
      fit2: {
        type: String,
        required: true
      },
      fit3: {
        type: String,
        required: true
      },
      fit4: {
        type: String,
        required: true
      }

  });
  
  
const promo1 =  mongoose.model('promo1',UserSchema);

module.exports = promo1;