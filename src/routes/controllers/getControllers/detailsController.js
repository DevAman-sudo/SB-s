const JobsApi = require("../../../models/jobsApi")

function detailsControllers() {

    return {

        async process(req, res) {

            const data = await JobsApi.findOne({ _id: req.query.job_id })

            // console.log(data.name)
            res.render('details', {

                id : req.query.job_id,
                name: data.name,
                image: data.image,
                salary: data.salary,
                note: data.note,
                location: data.location,
                description: data.description,
                responsibillitites: data.responsibillitites 

            })

        }

    }

}

module.exports = detailsControllers