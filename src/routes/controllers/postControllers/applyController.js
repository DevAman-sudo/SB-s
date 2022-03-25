// npm packages ...
let nodemailer = require('nodemailer');

// database ...
const Jobs = require('../../../models/schema')


// nodemailer transporter ...
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASSWORD
	},
});


function applyControllers() {

    return {

        process(req, res) {

            const createDocument = async () => {

                const registerJobs = new Jobs({
                    name: req.body.name,
                    email: req.body.email,
                    number: req.body.number,
                    location: req.body.location,
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
                          Location = ${req.body.location},
                          Requested_Job = ${req.body.jobs} ,
                          Message = ${req.body.message}`
            };
        
            transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    res.redirect('/?msg=' + "Something Went Wrong Please Try Again");
                } else {
                    res.redirect('/?msg=' + "Thanks sir/mam , we've received your message");
                }
            });
        

        }

    }

}

module.exports = applyControllers