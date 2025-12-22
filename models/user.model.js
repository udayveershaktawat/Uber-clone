const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({

    fullname:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,"first name must be at least 3 charaters long"]
        },
        lastName:{
            type:String,
            minlength:[3,"first name must be at least 3 charaters long"]

        }
    },
    email:{
        type:String,
        unique:true,
        required:true,
         minlength:[5,"first name must be at least 5 charaters long"]

    },
    password:{
        type:String,
        required:true,
        select:false,


    },
    socketId:{
        type:String
    },


})


userSchema.methods.generateAuthToken = ()=>{
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async (password)=>{
    return await bcrypt.compare(password,this.password)
}

userSchema.static.hashPassword = async (password)=>{
    return await brcypt.hash(password,10);
}

module.exports = mongoose.model("User",userSchema);