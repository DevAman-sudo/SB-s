// database ...
const async = require('hbs/lib/async')
const JobsApi = require('./../../../models/jobsApi')


function jobsControllers() {

    return {

        async process (req, res) {

            let data = await JobsApi.find()
            res.status(200).render('jobs', {jobsApi: data})

        }

    }

}

module.exports = jobsControllers