const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name:{
        type:String,//data type
        required:true,//validate
    },
    
    gmail:{
        type:String,//data type
        required:true,//validate
    },
 
    addresss:{
        type:String,//data type
        required:true,//validate
    }



});

module.export = mongoose.model(
    "UserModel", //file name
    userSchema //function name
    
)