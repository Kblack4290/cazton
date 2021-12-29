const mongoose = require('mongoose');

const NumbersSchema = mongoose.Schema({


    numbers: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('numbers', NumbersSchema)