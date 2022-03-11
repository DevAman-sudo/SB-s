function jobsApiControllers() {

    return {

        process(req , res) {

            res.status(200).render('jobsApi', {message: req.query.msg})

        }

    }

}

module.exports = jobsApiControllers