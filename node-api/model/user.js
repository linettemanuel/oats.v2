const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    subjectName : {
        type : String,
        trim : true,
        required : true
    },
    email : {
        type : String,
        trim : true,
        required : true
    },
    hashed_password : {
        type : String,
        required : true
    },
    salt : String,
    photo : {
        data : Buffer,
        contentType : String
    },
    chats : [{type : ObjectId, ref : "User"}],
    created : {
        type : Date,
        default : Date.now
    },
    updated : Date

})

module.exports = mongoose.model("User", userSchema);