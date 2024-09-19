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

