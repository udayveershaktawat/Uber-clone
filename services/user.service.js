const User = require("../models/user.model");


exports.createUser = async({
    firstname,lastname,email,password
})=>{
    if(!firstname || !email || !password){
        throw new Error('all fields are required')
    }

    const user = await User.create({
        fullname:{
            firstname,
            lastname,

        },
        email,
        password
    })


    return user








}