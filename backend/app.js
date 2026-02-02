const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const app = express();
const dbConnect = require("./db/db");
const userRoutes = require("./routes/user.routes");


dbConnect();


 

app.use(cors());
app.use(morgan("dev"))

app.get("/",(req,res)=>{
    res.send("hello world ")
})

 


module.exports = app