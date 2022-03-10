// npm packages ...
const express = require('express');
const path = require('path');
const router = express();
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

// database ...
const Jobs = require('../models/schema');
const NewsLetter = require('../models/newsLetter');

// middlewares ...
router.set('views', path.join(__dirname, '../../templates/views'));

// nodemailer transporter ...
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASSWORD
	},
});

// get controllers ...
const indexControllers = require('./controllers/getControllers/indexController')
const aboutControllers = require('./controllers/getControllers/aboutController')
const jobsControllers = require('./controllers/getControllers/jobsController')
const contactControllers = require('./controllers/getControllers/contactController')

// post controllers ...
// const applyControllers = require('./controllers/postControllers/applyController')
const letterControllers = require('./controllers/postControllers/letterController')

// get routes ...
router.get('/', indexControllers().process)
router.get('/about', aboutControllers().process)
router.get('/jobs', jobsControllers().process)
router.get('/contact', contactControllers().process)


// jobs details route ...
router.get('/details', (req, res) => {

	res.status(200).render('details')

})

// call receiver route ...
router.get('/call', (req, res) => {

	res.status(200).render('call')

})

// accountant route ...
router.get('/accountant', (req, res) => {

	res.status(200).render('accountant')

})

// accountant route ...
router.get('/online', (req, res) => {

	res.status(200).render('online')

})

// accountant route ...
router.get('/cook', (req, res) => {

	res.status(200).render('cook')

})

// accountant route ...
router.get('/designer', (req, res) => {

	res.status(200).render('designer')

})

// accountant route ...
router.get('/receptionist', (req, res) => {

	res.status(200).render('receptionist')

})

// guard route ...
router.get('/guard', (req, res) => {

	res.status(200).render('guard')

})

// waiters route ...
router.get('/waiters', (req, res) => {

	res.status(200).render('waiter')

})

// salse girl route ...
router.get('/salse', (req, res) => {

	res.status(200).render('salse')

})

// apply post route ...
router.post('/apply', (req, res) => {

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


})



// post routes ...
// router.post('/apply', applyControllers().process)
router.post('/letter', letterControllers().process)

module.exports = router;