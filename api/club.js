const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load input validation
const validateClubInput = require('../validation/club');

// Load user model
const Club = require('./models/club');

// console.log(Club.schema);

router.get('/', (req, res) => {
    Club.find()
        .then(club => res.json(club))
        .catch(err => res.status(404));
})

// @route GET api/club
// @desc club details
// @access Public
router.get('/:clubName', (req, res) => {
    Club.findOne( { clubName: req.params.clubName })
        .then(club => res.json(club))
        .catch(error => console.log(error));
    });
    


router.get('/test', (req, res) => res.json({msg: " works"}));

router.post(
    '/clubName/:clubName',
    passport.authenticate('jwt', { session: false}),
    (req,res) => {

        const { errors, isValid } = validateClubInput(req.body);
        if(!isValid) {
            // Return any errors with 400 status
            return res.status(400).json(errors);
        }
        
        const clubFields = {};
        // if(req.body.clubName) clubFields.clubName = req.body.clubName;
        if(req.body.title) clubFields.title = req.body.title;
        if(req.body.clubHistory) clubFields.clubHistory = req.body.clubHistory;
        
        Club.findOne({ clubName: req.params.clubName })
        .then(club => {
            if(club) {
                Club.findOneAndUpdate(
                    { clubName: req.params.clubName },
                    { $set: clubFields },
                    { new: true }
                )
                .then(club => res.json(club))
            }
        })
        .catch(err => res.json(err))
    }
);

// @route POST api/club/contact
// @desc Add contact to club
// @access Private
router.post('/contact', passport.authenticate('jwt', { session: false }), (req,res) => {
    // const { errors, isValid } = validateExperienceInput(req.body);

    // Check validation
    // if(!isValid) {
    //     return res.status(400).json(errors);
    // }

    Club.findOne({ clubName: req.body.clubName })
        .then(club => {
            const newContact = {
                name: req.body.name,
                telNo: req.body.telNo,
                email: req.body.email,
            };

            // Add to experience array
            club.contacts.unshift(newContact);

            club.save().then(club => res.json(club));
        })
});
module.exports = router;

