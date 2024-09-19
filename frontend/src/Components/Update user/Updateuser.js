import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {userParams} from 'react-router'
import{useNavigate} from 'react-router'

function Updateuser() {

    const [inputs,props]=useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(()=>{

        const fetchHandler = async()=>{
            await axios
        .get('http://lacalhost:5000/users/${id}')
        .then((res)=>res.data)
        .then((data)=>setInputs(data.user));
        };
         fetchHandler();

    },[id]);

    const sendRequest = async()=>{
        await axios.put('http://lacalhost:5000/users/${id}',{
        name:String(inputs.name),
        gmail:String(inputs.gmail),
        address:String(inputs.address),
    })

        .then((res)=>res.data);
    };
    handleChange =(e)=>{
        setInputs((preStates)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }));
    };
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>
         history('userdetails'));
    };


  return (
    <div>
      <h1>Update user</h1>
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
  );
}

export default Updateuser
