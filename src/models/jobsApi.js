const mongoose = require('mongoose')

const jobsApi = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    salary: {
        type: String,
        required: true
    },

    image: {
        type: String,
        require: true
    },

    note: {
        type: String,
        default: "Nothing for This Vacancy"
    },

    description: {
        type: String
    },

    responsibillitites: {
        type: String
    }

})

module.exports = mongoose.model('JobsApi', jobsApi);