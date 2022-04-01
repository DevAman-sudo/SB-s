function jobDetailsControllers() {

    return {

        process(req, res) {

            res.redirect('/contact?job_id=' + req.body.id)

        }

    }

}

module.exports = jobDetailsControllers