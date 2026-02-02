const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = () => {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbconnect;
