const express = require("express");
const app = express();
const dbconnect = require("./db");
dbconnect();

const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");


app.use(cors());



app.get("/",(req,res)=>{
    res.send("hello udayveer")
})




module.exports = app;