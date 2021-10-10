
const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    department: Number,
    city: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    population: Number
})



module.exports = mongoose.model('city', citySchema)
