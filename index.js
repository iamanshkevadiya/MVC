const express = require("express");
const dbconnect= require("./config/db");
const userRouter = require("./routes/user.route");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Working...."); 
    res.send("Working...");
})

app.use("/user",userRouter);

app.listen(8090, () => {
    console.log("Listening a  8090");
    dbconnect();
})