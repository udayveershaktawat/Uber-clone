const Captain = require("../models/captain.model");
const captainService = require("../services/captain.service");
const {validationResult} = require("express-validator")



exports.registerCaptain = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors,isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname,email,password,vehicle} = req.body;

    const isCaptainAlreadyExist = await Captain.findOne({email});
    if(isCaptainAlreadyExist){
        return res.status(400).json({message:"captain already exists"})
    }

    const hashedPassword = await Captain.hashPassword(password);


    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        color:vehicle.capacity,
        color:vehicle.plate,
        color:vehicle.vehicleType,
    });

    const token = await captain.generateAuthToken();


    return res.status(201).json({token,captain})






}