function indexControllers() {

    return {

        process(req, res) {

            res.status(200).render('index')

        }

    }

}

module.exports = indexControllers