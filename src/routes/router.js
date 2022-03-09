// npm packages ...
const express = require('express');
const path = require('path');
const router = express();
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const Jobs = require('../models/schema');
const NewsLetter = require('../models/newsLetter');
router.set('views', path.join(__dirname, '../../templates/views'));

// nodemailer transporter ...
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASSWORD
	},
});

// index route ...
router.get('/', (req, res) => {

	res.status(200).render('index');

});

// about route ...
router.get('/about', (req, res) => {

	res.status(200).render('about')

})

// jobs route ...
router.get('/jobs', (req, res) => {

	res.status(200).render('jobs')

})

// contact route ...
router.get('/contact', (req, res) => {

	res.status(200).render('contact')

})

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

// newsletter post route ...
router.post('/letter', (req, res) => {

	const createDocument = async () => {

		const registerNews = new NewsLetter({
			email: req.body.email
		});

		const registered = await registerNews.save();

	}

	createDocument();

	res.status(200).render('index' , { message: "Congratulations you've successfully subscribed our NewsLetter" })

})

module.exports = router;