const express = require("express");
const router = express.Router();
const {body}= require("express-validator");

const captainController = require("../controllers/captain.controller")
const authmiddleware = require("../middlewares/auth.middleware")


// register route
router.post("/register",[
    body("email").isEmail().withMessage('invalid email'),
    body("fullname.firstname").isLength({min:3}).withMessage("first name must be at least 3 character long"),
    body("password").isLength({min:6}).withMessage("password must be at 6 charater long"),
    body("vehicle.color").isLength({min:3}).withMessage("vehicle color must be at least 3 character long"),
    body("vehicle.plate").isLength({min:3}).withMessage("vehicle plate must be at least 3 character long"),
    body("vehicle.capacity").isInt({min:1}).withMessage("capacity must be at least 1 "),
    body("vehicle.vehicleType").isIn(['car',"motorcycle",'auto']).withMessage("invalid vehicle type")

],captainController.registerCaptain);

// login route
router.post("/login",[
    body("email").isEmail().withMessage("invalid email"),
    body("password").isLength({min:6}).withMessage("password must be at least 6 character long")
],captainController.loginCaptain)

// profile captain
router.get("/profile",authmiddleware.authCaptain,captainController.getCaptainProfile);

// logout captain
router.get("/logout",authmiddleware.authCaptain,captainController.logoutCaptain)




module.exports = router;