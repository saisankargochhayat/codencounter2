var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    aadhar: {
        type: Number,
        required: true
    },
    id_upload: {
        type: String
        // required: true
    },
    city: {
        type: String,
        required: true
    },
    resident_location: {
        lat: String,
        long: String
    },
    issuesCreated: {
        type: [ObjectId],
        required: true,
        default: []
    },
    pollsParticipated: {
        type: [ObjectId],
        required: true,
        default: []
    }
}, {
    collection: 'issues',
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);