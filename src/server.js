// npm packages ...
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const hbs = require('hbs');
const Routes = require('./routes/router'); // app routes ...
const app = express();
const port = process.env.PORT || 5000;

// file paths ...
const staticPath = path.join(__dirname, '../public/');
const cssPath = path.join(__dirname, '../public/css');
const viewsPath = path.join(__dirname, '../templates/views/');
const partialsPath = path.join(__dirname, '../templates/partials/');

// app middlewares ...
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));
app.use(Routes);
app.use(express.static(cssPath))

// mongodb connection ...
mongoose.connect(`mongodb+srv://devaman:${process.env.PASS}@cluster0.bgpt2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    }).then(() => {
        console.log('database connected');
    }).catch((error) => {
        console.log(`error occured while database connection => ${error}`);
    });

// listening to app on port 5000 ...
app.listen(port, (error) => {
    if (error) {
        console.log(`error occured while listening to app => ${error}`);
    } else {
        console.log(`server running on localhost port ${port}`);
    }
});