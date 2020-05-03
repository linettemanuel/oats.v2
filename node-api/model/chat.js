const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    owner : {
        type : ObjectId,
        ref: "User",
        required : true
    },
    testURL : {
        type : String,
        trim : true
    },
    specification : {
        type : ObjectId,
        ref : "Specification",
        required : true
    },
    conversations : [{type : ObjectId, ref : "Conversation"}],
    created : {
        type : Date,
        default : Date.now
    },
    updated : Date

})

module.exports = mongoose.model("Chat", chatSchema);