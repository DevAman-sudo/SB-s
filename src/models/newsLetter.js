// npm packages ...
const mongoose = require('mongoose');

const newsLetter = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('NewsLetter', newsLetter);