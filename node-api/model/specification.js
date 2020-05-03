const mongoose = require('mongoose')

const specificationSchema = new mongoose.Schema({
    hashed_apikey : {
        type : String,
        required : true
    },
    hashed_url : {
        type : String,
        required : true
    },
    hashed_workspaceID : {
        type : String,
        required : true
    },
    salt : String,
    logo : {
        data : Buffer,
        contentType : String
    },
    icon : {
        data : Buffer,
        contentType : String
    },
    chat : [{type : ObjectId, ref : "Chat"}],
    created : {
        type : Date,
        default : Date.now
    },
    updated : Date

})

module.exports = mongoose.model("Specification", specificationSchema);