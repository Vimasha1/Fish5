
import React from "react";
import{Routes,Routes}from "react-router";
import "./App.css";
import Home from "./Component/Home/home";
import AddUser from"./Component/Add user/adduser";
import Users from"/componat/userdetail/Users"
import Updateuser from "./Component/Update user/Updateuser";
function App() {
  return (
    <div>
       
      <React.fragment>
        <Routes>
        <Route path="/"element={<home/>}/>
          <Route path="/mainhome"element={<Home/>}/>
          <Route path="/adduser"element={<AddUser/>}/>
          <Route path="/userdetails"element={<UpdateUsers/>}/>


        </Routes>
        
        </React.fragment> 
    </div>
  );
}

export default App;
