const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name:String,
    make:String,
    model:String,
    color:String,
    manufacturedate:Date
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car