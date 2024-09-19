const express = require("express");  
const mongoose = require("mongoose");  
const cors = require("cors");  
const multer = require("multer");  
const path = require("path");  
const complaintRoutes = require("./Routes/ComplaintRoutes");  

const app = express();  
const PORT = process.env.PORT || 5000;  
const MONGO_URI = "mongodb+srv://user:Olivea16@demo.hg0q5c8.mongodb.net/?retryWrites=true&w=majority"; 

// Middleware
app.use(cors());  
app.use(express.json()); 

// Multer configuration for file uploads
const upload = multer({ dest: "uploads/" }); 

// Simple file upload route
app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }
    res.send(`File uploaded successfully: ${req.file.filename}`);
});

// Use complaint routes
app.use("/complaints", complaintRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);  
    res.status(500).send("Something went wrong!"); 
});

// Connect to MongoDB and start the server
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB", err);
    });

//app.js
const express = require ("express");
const mongoose = require("mongoose");
const router = require ("./Route/UserRouter");

const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/users",router);

mongoose.connect("mongodb+srv://admin:lqhlcqTNVSzGt4Xu@fishstocks.oyejb.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5005);
})
.catch((err)=> console.log((err)));

//QKXpuF7m67GwIdA3

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/RequestRoutes");
const app = express();
const cors = require("cors");

//middleware

app.use(express.json());
app.use(cors());
app.use("/requests", router);
app.use("/file", express.static("file"));





mongoose.connect("mongodb+srv://Vimasha:QKXpuF7m67GwIdA3@loandb.n37fe.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));
//Register
//Call Register Model
require("./Model/Register");
const Treasurer = mongoose.model("Register");
app.post("/register", async(req, res) => {
    const { name, gmail, password } = req.body;
    try{
        await Treasurer.create({
            name,
            gmail,
            password,
        })
        res.send({status:"ok"});
    }catch(err){
        res.send({status:"error"});
    }
});

//Login
//Call Login Model
app.post("/login", async(req, res) => {
    const { gmail, password } = req.body;
    try{
        const treasurer = await Treasurer.findOne({gmail});
        if(!treasurer){
            return res.json({err:"Invalid Login"})
        }
        if(treasurer.password === password){
            return res.json({status:"ok"});
        }else{
            return res.json({err:"Incorrect Password"})
        }
    }catch(err){
        console.error(err);
        res.status(500).json({err:"Server Error"})
    }
});

//setup multer
const multer = require("multer");
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './file');
    },
    filename:function(req, file, cb){
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },

});

//insert model part
require("./Model/PdfModel");
const pdfSchema = mongoose.model("PdfDetails");

const upload = multer({storage})
app.post("/uploadFile", upload.single("file"), async(req, res) => {
    console.log(req.file);
    const name = req.body.name;
    const title = req.body.title;
    const pdf = req.file.filename;
    try{
        await pdfSchema.create({
            name:name,
            title:title,
            pdf:pdf,
        });
        console.log("File uploaded successfully");
        res.send({status:200}); 
    }catch(err){
        console.log(err);
        res.status(500).send({status: "error"});
    }   
    
});

//get model part
app.get("/getFile", async(req, res) => {
    try{
        const data = await pdfSchema.find({});
        res.send({status: 200, data: data});
    }catch(err){
        console.log(err);
        res.status(500).send({status: "error"});
    }
});
