const mongoose = require('mongoose');
require("dotenv").config()  // inbuilt functions

const dbconnect = async () => {
    await mongoose.connect("process.env.NODE_ENV")
    console.log("Connected to the database");
    
}

module.exports = dbconnect