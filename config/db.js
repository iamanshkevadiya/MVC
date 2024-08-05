const mongoose = require('mongoose');

const dbconnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/mvc")
    console.log("Connected to the database");
    
}

module.exports = dbconnect