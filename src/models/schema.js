// npm packages ...
const mongoose = require('mongoose');

const jobs = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true
    },
    jobs: {
        type: String,
        required: true
    },
    message: {
        type: String
    }

});

module.exports = mongoose.model('Jobs', jobs);