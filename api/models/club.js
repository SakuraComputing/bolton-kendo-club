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
    // addresses: [
    //     {
    //         address1: String,
    //         required: true
    //     },
    //     {
    //         address2: String,
    //         required: true
    //     },
    //     {
    //         address3: String
    //     },
    //     {
    //         address4: String
    //     },
    //     {
    //         postcode: String
    //     },
    //     {
    //         practices: [
    //             {
    //                 time: String,
    //                 required: true
    //             }
    //         ]
    //     }
    // ],
    contacts: [
        {
            name: {
                type: String,
                required: true
            }, 
            telephoneNumber: {
                type: String
            },
            email: { 
                type:String
            }
        }
    ],
    practices: [
        {
            venue: {
                type: String,
                required: true
            },
            time: {
                type: String,
                required: true
            }
        }
    ],
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