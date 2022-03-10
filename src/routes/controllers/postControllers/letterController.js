// database ...
const NewsLetter = require('../../../models/newsLetter')

function letterControllers() {

    return {

        process(req, res) {

            const createDocument = async () => {

                const registerNews = new NewsLetter({
                    email: req.body.email
                });

                const registered = await registerNews.save();

            }

            createDocument();

            res.status(200).redirect('/?msg=' + "Congratulations you've successfully subscribed our NewsLetter")


        }

    }

}

module.exports = letterControllers