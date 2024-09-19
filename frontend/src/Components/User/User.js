import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {userNavigate} from "react-router-dom";
import

function User() {
    const {_id,name,gmail,address}=props.user;

    const history =userNavigate();

    const deleteHandler =  async ()=>{
        await axios.delete(`http://lacalhost:5000/users/${_id}`)
        .then (res=>res.data)
        .then(()=>history("/"))
        .then(()=>history("/userdetails"))
    }

  return (
    <div>
      
      <h1>User dispaly </h1>
      <br></br>
      <h1>ID:{_id}</h1>
      <h1>Name:{name}</h1>
      <h1>Gmail:{gmail}</h1>
      <h1>address:{address}</h1>
       <Link to ={`/userdetails/${_id}`}>Update</Link>

       <button onClick={deleteHandler}>Delete</button>

      <br></br>
      <br></br>
      <br></br>
      <br></br>


    </div>
  );
}

export default User
