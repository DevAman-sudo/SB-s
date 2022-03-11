function jobDetailsControllers() {

    return {

        process(req, res) {

            
            res.redirect('/details?job_id=' + req.body.id)

        }

    }

}

module.exports = jobDetailsControllers