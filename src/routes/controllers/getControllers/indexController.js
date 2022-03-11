// database ...
const async = require('hbs/lib/async')
const JobsApi = require('./../../../models/jobsApi')


function indexControllers() {

    return {

        async process(req, res) {

            let data = await JobsApi.find().limit(6)

            res.status(200).render('index', {

                message: req.query.msg,
                jobsApi: data

            })

        }

    }

}

module.exports = indexControllers