const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../controllers/user.controller");

router.post("/register",[
    body('email').isEmail().withMessage("invalid email"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 character long"),
    body("password").isLength({min:5}).withMessage("password must be at least 5 character long")
],);


module.exports = router;