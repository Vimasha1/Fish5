const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use("users",router);
app.use("cors"());   


mongoose.conncect("")
.then(()=>console.log("connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch ((err)=>console.log((err)));



