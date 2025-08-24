const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:"true",
            minlength:[3,"First name must be at least 3 character long"]
        },
        lastname:{
            type:String,
            minlength:[3,"last name must be at least 3 character long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlenth:[5,"email must be at least 5 character long"]
    },
    password:{
        type:String,
        required:true
    },
    socketId:{
        type:String
    },
});


