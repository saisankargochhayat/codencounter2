var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var pollSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    city: {
        type: String,
        Default: "Default"
    },
    upvotes: Number,
    options: [{
        key: String,
        name: String,
        description: String,
        votes:[ObjectId]
    }],
    resolved: {
        success: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            default: false
        } 
    }
}, {
    collection: 'polls',
    timestamps: true
})

module.exports = mongoose.model('Poll', pollSchema);