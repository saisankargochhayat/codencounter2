var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var issueSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    issue_location: {
        lat: String,
        long: String
    },
    upvotes: {
        type: [ObjectId],
        required: true,
        default: []
    },
    downvotes: {
        type: [ObjectId],
        required: true,
        default: []
    },
    marked_for_consideration: {
        type: Boolean,
        required: true,
        default: false
    },
    resolved: {
        success: {
            type: Boolean,
            default: false
        },
        mesasge: {
            type: String,
            default: false
        } 
    }
}, {
    collection: 'issues',
    timestamps: true
})

module.exports = mongoose.model('Issue', issueSchema);