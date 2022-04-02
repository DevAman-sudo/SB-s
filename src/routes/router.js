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

// get controllers ...
const indexControllers = require('./controllers/getControllers/indexController')
const aboutControllers = require('./controllers/getControllers/aboutController')
const jobsControllers = require('./controllers/getControllers/jobsController')
const contactControllers = require('./controllers/getControllers/contactController')
const detailsControllers = require('./controllers/getControllers/detailsController')
const notFoundControllers = require('./controllers/getControllers/notFoundController')

// post controllers ...
const applyControllers = require('./controllers/postControllers/applyController')
const letterControllers = require('./controllers/postControllers/letterController')
const jobDetailsControllers = require('./controllers/postControllers/jobDetailsController')
const jobIdControllers = require('./controllers/postControllers/jobIdController')

// api controllers ...
const jobsApiControllers = require('./controllers/apiControllers/jobsApiController')
const jobsApi = require('./controllers/apiControllers/jobsApi')

// get routes ...
router.get('/', indexControllers().process)
router.get('/about', aboutControllers().process)
router.get('/jobs', jobsControllers().process)
router.get('/contact', contactControllers().process)
router.get('/details', detailsControllers().process)
router.get('*', notFoundControllers().process)


// post routes ...
router.post('/apply', applyControllers().process)
router.post('/letter', letterControllers().process)
router.post('/jobs/details', jobDetailsControllers().process)
router.post('/jobid', jobIdControllers().process)

// api routes ...
router.get('/jobs-api', jobsApi().process)
router.post('/api/jobs', jobsApiControllers().process)

module.exports = router;