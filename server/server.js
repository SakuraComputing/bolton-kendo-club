const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('../api/users.js');
const club = require('../api/club.js');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('../config/keys.js').mongoURI;

// Connect to Mongo DB
mongoose
    .connect(db)
    .then(() => console.log('Mongo DB connected server/server.js'))
    .catch(err => console.log(err));

app.use(passport.initialize());

// Passport Config
require('../config/passport.js')(passport);

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

if(process.env.NODE_ENV === 'production') {
    // app.use(express.static(__dirname + "/dist/"));
    //     app.get(/.*/, function(req, res) {
    //     res.sendFile(__dirname + "/dist/index.html");
    // });
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
app.listen(port, () => console.log(`Server running on port ${port}`));
