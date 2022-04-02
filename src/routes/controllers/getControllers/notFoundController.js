function notFoundControllers() {

    return {

        process(req, res) {

            res.status(404).render('404')

        }

    }

}

module.exports = notFoundControllers