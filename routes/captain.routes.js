const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const captainController = require("../controllers/captain.controller");

const authMiddleware = require("../middlewares/auth.middleware")




router.post("/register",[
    body("email").isEmail().withMessage("invalid email"),
    body("fullname.firstname").isLength({min:3}).withMessage('first name must be at least 3 character'),
    body("password").isLength({min:6}).withMessage('password must be at least 6 character'),
    body("vehicle.color").isLength({min:3}).withMessage('color must be at least 3 character'),
    body("vehicle.plate").isLength({min:3}).withMessage('color must be at least 3 character'),
    body("vehicle.capacity").isLength({min:1}).withMessage('color must be at least 3 character'),
    body("vehicle.vehicleType").isIn(['car',"auto","motorcycle"]).withMessage('invalid type'),
],captainController.registerCaptain);


router.post("/login",[
    body("email").isEmail().withMessage("invalid email"),
    body("password").isLength({min:6}).withMessage('password must be at least 6 character'),
    
],captainController.loginCaptain);

// get profile
router.get("/profile",authMiddleware.authCaptain,captainController.getCaptainProfile);







module.exports = router;