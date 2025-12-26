const User = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult } = require("express-validator");


module.exports.registerUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:error.array()});
    }

    const {firstName,lastName,email,password} = req.body;

    const hashedpassword = await User.hashPassword(password);

    const user = await userService.createUser({
        firstname,
        lastname,
        email,
        password:hashedpassword
    });


    const token = user.generateAuthToken();

    res.status(201).json({
        token,user
    })






}


module.exportsloginUser = async(req,res,next)=>{
    




    
}
