const express = require("express");
const app = express();
const dbconnect = require("./db/db");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./routes/user.routes")


const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use("/users",userRoutes)



dbconnect();



app.get("/",(req,res)=>{
    res.send("hello udayveer")
})




module.exports = app;