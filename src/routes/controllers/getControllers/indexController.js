function indexControllers() {

    return {

        process(req, res) {

            res.status(200).render('index', {message: req.query.msg})

        }

    }

}

module.exports = indexControllers