const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    data : [{
        type : Object,
        required : true
    }],
    chat : {
        type : ObjectId,
        ref : "Chat"
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Conversation", conversationSchema)