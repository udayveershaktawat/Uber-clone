const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistToken = require("../models/blacklistToken.model")

exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  const isBlacklisted = await blacklistToken.findOne({token:token}) 
  if(isBlacklisted){
    return res.status(401).json({message:"unauthorized"})
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET,{exporesIn:"24h"});
    const user = await User.findById(decode._id);

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "unauthorized" });
  }
};


// captain authorization
exports.authCaptain = async(req,res,next)=>{
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if(!token){
    return res.status(401).json({message:"unauthorized"});
  }

  const isBlacklisted = await blacklistToken.findOne({token:token});


  if(isBlacklisted){
    return res.status(401).json({message:"unauthorized"});
  }


  try{

    const decoded = await jwt.verify(token,process.env.JWT_SECRET);
    const captain = await Captain.findById(decoded._id);
    req.captain = captain;

  }
  catch(error){

    res.status(401).json({message:"unauthorized"})


  }








}




