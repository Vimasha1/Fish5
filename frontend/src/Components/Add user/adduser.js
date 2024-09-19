import React, { useState } from 'react';
import Nav from '../Nav/nav';
import { useNavigate } from "react-router";
 import axios from 'axios';

function adduser() {
    const history = useNavigate();
    const[inputs,setInputs]=useState({
        name:"",
        gmail:"",
        age:"",
        address:"",
    });
    const handleChange =(e)=>{
        setInputs((preStates)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }));
    };
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(inputs);
        await sendRequest();
        history('userdetails');
    }
    const sendrequest = async()=>{
        await axios.post("http://lacalhost:5000/users",{
            name:String(inputs.name),
            gmail:String(inputs.gmail),
            address:String(inputs.address)
        })
    }


  return (
    <div>
        <Nav/>
      <h1>Add User</h1>
      <from on Submit={handleSubmit}>
          <label>name</label>
          <br/>
          <input type="text"name="name"onchange={handleChange}value={inputs.name}required></input>
          <br></br>
          <br></br>
          <label>gmail</label>
          <br/>
          <input type="gmail"name="gmail"onchange={handleChange}value={inputs.gmail}required></input>
          <br></br>
          <br></br>
           
          <label>address</label>
          <br/>
          <input type="text"name="address"onchange={handleChange}value={inputs.address}required></input>
          <br></br>
          <br></br>
          <button>submit</button>



        </from>
    </div>
  )
}

export default adduser
