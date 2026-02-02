const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../controllers/user.controller")



// register
router.post("/register",[
    body("email").isEmail().withMessage("invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 character long"),
    body("password").isLength({min:6}).withMessage("password must be at least 6 character long")
],userController.registerUser)

// login
router.post("/login",[
    body("email").isEmail().withMessage("invalid email"),
    body("password").isLength({min:6}).withMessage("password must be at least 6 character")
],userController.loginUser);

// profile
router.get("/profile",userController.getUserProfile)


module.exports = router;