var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

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
        type: Number,
        required: true,
        default: 0
    },
    downvotes: {
        type: Number,
        required: true,
        default: 0
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