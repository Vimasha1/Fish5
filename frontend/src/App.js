import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Dashboard from './Components/Dashboard/Dashboard';
import CommunityMemberForm from './Components/CommunityMemberForm/CommunityMemberForm';
import UserPage from './Components/UserPage/UserPage';
import UpdateMember from './Components/UpdateMember/UpdateMember';
import MyDetails from './Components/MyDetails/MyDetails';
import PaymentGateway from './Components/PaymentGateway/PaymentGateway';
import PaymentDetails from './Components/PaymentDetails/PaymentDetails';
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/community-member" element={<CommunityMemberForm />} />
        <Route path="/payment-details" element={<PaymentDetails />} />

        <Route path="/userpage" element={<UserPage />} />
        <Route path="/my-details" element={<MyDetails />} />
        <Route path="/update-member/:id" element={<UpdateMember />} />
        <Route path="/make-payment" element={<PaymentGateway />} />
      </Routes>
    </Router>
          
       
        
      
   
  );
}

export default App;
