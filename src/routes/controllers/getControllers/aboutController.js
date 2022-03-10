function aboutControllers() {

    return {

        process(req, res) {

            res.status(200).render('about')

        }

    }

}

module.exports = aboutControllers