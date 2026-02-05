const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");


// register captain
module.exports.registerCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: "captain already exists" });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "error while register captain ",
      success: false,
    });
  }
};


// logincaptain
module.exports.loginCaptain = async(req,res,next)=>{
    try{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        const {email,password} = req.body;

        const captain = await captainModel.findOne({email}).select("+password");

        if(!captain){
            return res.status(400).json({message:"invalid email & password"})
        }

        const isMatch = await captain.comparePassword(password);

        if(!isMatch){
            return res.status(400).json({message:"invalid email & password "})
        }

        const token = captain.generateAuthToken();

        res.cookie("token",token);

        return res.status(200).json({token,captain})

    }catch(error){
        return res.status(500).json({
            message:"error while login captain",
            success:false
        })
    }
}
// getProfileCaptain
module.exports.getCaptainProfile = async(req,res,next)=>{
  res.status(200).json({captain:req.captain})
}