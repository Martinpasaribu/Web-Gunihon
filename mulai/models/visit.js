const mongoose = require('mongoose');



const aa = new mongoose.Schema({
    name: String,
    count: Number
})


const visit = mongoose.model('visit', aa);

module.exports = visit;
