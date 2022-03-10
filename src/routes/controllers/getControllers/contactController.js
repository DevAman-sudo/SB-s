function contactControllers() {

    return {

        process(req, res) {

            res.status(200).render('contact')

        }

    }

}

module.exports = contactControllers