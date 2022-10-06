const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
            ou: String,
            divisions: [String]
        }
    ],
    manager: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    }
})

const employees = mongoose.model('Employee', userSchema);
module.exports = employees;