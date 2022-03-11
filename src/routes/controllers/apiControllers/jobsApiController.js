// database ...
const JobsApi = require('../../../models/jobsApi')


function jobsApiControllers() {

    return {

        process(req , res) {

            const createDocument = async () => {

                const registerJobs = new JobsApi({
                    name: req.body.name,
                    location: req.body.location,
                    salary: req.body.salary,
                    path: req.body.path,
                    routes: req.body.routes,
                });
        
                const registered = await registerJobs.save();
        
            }
        
            createDocument();

            res.status(302).redirect('/jobs-api?msg=' + "sucessfully registered")

        }

    }

}

module.exports = jobsApiControllers