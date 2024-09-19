const express = require("express");
const Router = express.Router();

//Insert Model
const User = reuire("../Model/Usermodel");
//indert user controller
const userController = require("../controller/usercontroller");

Router.get("/",Usercontroller.getALLusers);
Router.post("/",Usercontroller.addUsers);
Router.get("/:id",Usercontroller.getByID);
Router.put("/:id",Usercontroller.updateUser);
Router.delete("/:id",Usercontroller.deleteUser);

//export
module.export = router;
