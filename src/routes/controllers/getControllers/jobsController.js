function jobsControllers() {

    return {

        process(req, res) {

            res.status(200).render('jobs')

        }

    }

}

module.exports = jobsControllers