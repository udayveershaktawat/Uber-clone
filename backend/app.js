const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const app = express();
const dbConnect = require("./db/db");
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/user.routes");


dbConnect();


 

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("hello world ")
});

app.use("/users",userRoutes)

 


module.exports = app