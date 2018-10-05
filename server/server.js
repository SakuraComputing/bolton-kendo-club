const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('../api/users');
const club = require('../api/club');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to Mongo DB
mongoose
    .connect(db)
    .then(() => console.log('Mongo DB connected'))
    .catch(err => console.log(err));

app.use(passport.initialize());

// Passport Config
require('../config/passport')(passport);

// Allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Use Routes 
app.use('/api/users', users);
app.use('/api/club', club);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
