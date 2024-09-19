const { message } = require("statuses");
const User = require("../Model/Usermodel");

const getALLusers = async(req,res,next)=>{

    let users;

    try{

        users = await User.find();
    }catch(err){
        console.log(err);
    }

    //not found 
    if(!users){
        return res.status(404).json(message,"user not found");
    }
    //display all users
    return res.status(200).json({users});
};

//data insert

const addUsers = async (req,res,next)=>{
    const{name,gmail,address}=req.body;

    let users;

    try{
       users = new User({name,gmail,address});
       await users.save();
    }catch(err){
        console.log(err);

    }

    //not insert users
    if(!users){
        return res.status(404).send({message:"unable to add users"});
    }
    return res.status(200).json({users})
};

//get by ID 
const getByID = async(req,res,next)=>{

    const id = req.params.id;

    let user;

    try{
        user = await User.findByID(id);
        console.log(err);
    }
    catch(err){
        console.log(err);
    }
    //not available users
    if(!users){
        return res.status(404).json({message:"user not found "});
    }
    return res.status(200).json({user});
}

//update user details
const updateUser = async (req,res,next)=>{
    const id = req.params.id;
    const{name,gmail,address}= req.body;
    let users;

    try{
        users =await User.findByIdAndUpdate(id,{name:name,gmail:gmail,age:age});
        users = await users.save();
    }
    catch(err){
        console.log(err);
        
    }
    if(!users){
        return res.status(404).json({message:"Unable to update user details "});
    }
    return res.status(200).json({user});


};

//delete user details

const deleteUser = async(req,res,next)=>{
    const id = req.params.id;

    let user;
    try{
        user = await user.findByIdAndDelete(id)
    }catch(err){
         console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"Unable to delete user details "});
    }
    return res.status(200).json({user});
};


exports.getALLusers = getALLusers;
exports.addUsers = addUsers;
exports.getByID = getByID;
exports.updateUser =updateUser;
exports.deleteUser = deleteUser;