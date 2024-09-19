import React,{useState,userEffect} from 'react';
import Nav from '../Nav/nav';
import axios from "axios";
import User from '../User/User'
import {userReacToPrint} from "react-to-print";

const URL ="http://lacalhost:5000/users"

const fetchHandler = async()=>{
    return await axios.get(URL).then((res)=> res.data)
}

function Users() {
    const[users,setUsers]=useState();
    userEffect(()=>{
        fetchHandler().then((data)=>setUsers(data.users))
    },[])

      const Component = useRef();
      const handlePrint = useReactToPrint({
            constent :()=>ComponentRef.current,
            DocumentTitle:"Users Report",
            onafterprint:()=>alert("User Report Successfully Download !")
      });

      const [searchQuery,setSearchQuery]=userState("");
      const[noResults,setNoResult]=userState(false);

      const handleSearch =()=>{
        fetchHandler().then((data)=>{
          const filteredUser = data.users.filter((user)=>
            Object.values(user).some((field)=>
              field.toSTRING().toLowerCase().includes(searchQuery.toLowerCase())
          ))
          setUsers(filteredUsers);
          setNoResult(filteredUsers.lenght===0);
        });
      }
      const handlerSendReport = ()=>{
        //Create the whatsapp chat URL
        const phoneNumber ="+94789654158"; //replace with the desired phone number
        const message =`selected user reports`;
        const WhatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(

        massage

      )}`;
      //open the whatsapp chat in new window
      window.open(WhatsappUrl,"_blank");



  return (
    <div>
      <Nav/>
      <h1>User details Display Page</h1>
      <input
      onChange={(e)=>setSearchQuery(e.target.value)}
      type="text"
      name="search"
      placeholder="Search Users details"
           > </input>
      <button onClick={handleSearch}>Search</button>
       
      {noResults ?(
      <div>
      <p>No Users Found</p>
      </div>
      
      ):(
      <div ref={ComponentsRef}>
        {users && users.map((user,i)(
          <div key={i}>
            <User user={user}/>
            
       </div>
   ))}
    </div>
   )}
     
    <button onClick={handlePrint}>Download Report</button>
    <br></br>
    <button onClick={handleSendReport}>Send Whatsapp message</button>
    </div>

  );
}

export default Users;
