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
    // address: [
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
            name: String
        },
        {
            telNo: String
        },
        {
            email: String
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