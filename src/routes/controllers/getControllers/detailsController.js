const JobsApi = require("../../../models/jobsApi")

function detailsControllers() {

    return {

        async process(req, res) {


            const data = await JobsApi.findOne({ _id: req.query.job_id })
            .then(data => {

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

            }).catch(err => {

                res.status(404).render('404')

            })
           

        }

    }

}

module.exports = detailsControllers