const mongoose = require("mongoose");


const blackelistTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400 //24h in sec
    }
})

module.exports = mongoose.model("blacklistToken",blackelistTokenSchema)