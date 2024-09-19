import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/NavbarComplaint';
import Complaints from './Components/ComplaintDetails/ComplaintDetails'; // Make sure the path is correct
import Login from './Components/Login/Login';
import ComplaintForm from './Components/ComplaintForm/ComplaintForm';
import Process from './Components/Process/Process';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/add-complaint" element={<ComplaintForm />} />
                        <Route path="/process" element={<Process />} />
                        <Route path="/complaint-details" element={<Complaints />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
import {Route, Routes } from 'react-router';
import './App.css';
import Loan from './Components/Loan/Loan';
import Nav from './Components/Nav/Nav';
import Addrequest from './Components/Addrequest/Addrequest';
import Requests from './Components/Requestdetails/Requests';
import Updaterequest from './Components/Updaterequest/Updaterequest';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Contactadmin from './Components/Contactadmin/Contactadmin';
import Uploadcollateral from './Components/Uploadcollateral/Uploadcollateral';

function App() {
  return (
    <div>
      <Nav />
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Loan />}/>
          <Route path="/mainloan" element={<Loan />}/>
          <Route path="/addrequest" element={<Addrequest />}/>
          <Route path="/requestdetails" element={<Requests />}/>
          <Route path="/regi" element={<Register />}/>
          <Route path="/log" element={<Login />}/>
          <Route path="/contact" element={<Contactadmin />}/>
          <Route path="/upload" element={<Uploadcollateral />}/>
          <Route path="/requestdetails/:id" element={<Updaterequest />}/>
        
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
