const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClubSchema = new Schema ({
    clubName: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    clubHistory: {
        type: String
    },
    videos: [
        {
            etag: {
                type: String,
                rewuired: true
            } 
        }
    ]
});

module.exports = Club = mongoose.model('club', ClubSchema);