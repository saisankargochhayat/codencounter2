var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    quantity: {
        type: [Number],
        required: true,
        default: [1]
    },
    unit: {
        type: String,
        required: true
    },
    categories: [String],
    calculationMethod: String,
    components: [{
        name: String,
        quantity: [Number],
        unit: String
    }]
})

module.exports = mongoose.model('User', userSchema);