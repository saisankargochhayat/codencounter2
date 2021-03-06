var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
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
        default: []
    },
    pollsParticipated: {
        type: [ObjectId],
        default: []
    }
}, {
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);
