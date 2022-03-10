

// npm packages ...
// let nodemailer = require('nodemailer');

// database ...
const Jobs = require('../../../models/schema')



function applyControllers() {

    return {

        process(req, res) {

            const createDocument = async () => {

                const registerJobs = new Jobs({
                    name: req.body.name,
                    email: req.body.email,
                    number: req.body.number,
                    jobs: req.body.jobs,
                    message: req.body.message,
                });

                const registered = await registerJobs.save();

            }

            createDocument();

            let mailOptions = {
                from: "sbs.com.np@gmail.com",
                to: "sbs.com.np@gmail.com",
                subject: req.body.name,
                text: `Name = ${req.body.name} ,
                 Email = ${req.body.email} ,
                  Number = ${req.body.number} , 
                  Requested_Job = ${req.body.jobs} ,
                  Message = ${req.body.message}`
            };

            transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    res.render('index', { message: "Something Went Wrong Please Try Again" });
                } else {
                    res.render('index', { message: "Thanks sir/mam , we've received your message" });
                }
            });


        }

    }

}

module.exports = applyControllers