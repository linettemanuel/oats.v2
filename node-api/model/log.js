const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    session_id: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false
    },
    ui_id: {
        type: String,
        default: ''
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
})

module.exports = mongoose.model('Log', logSchema);