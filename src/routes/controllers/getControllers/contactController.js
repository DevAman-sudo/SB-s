const JobsApi = require('./../../../models/jobsApi')

function contactControllers() {

    return {

        async process (req, res) {

            const data = await JobsApi.findOne({ _id: req.query.job_id })

            res.status(200).render('contact', {
                name: data.name
            })

        }

    }

}

module.exports = contactControllers