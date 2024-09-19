// App.js
import React from 'react';
import SideNav from './SideNav';
import Footer from './Footer';
import Dash from './Dash'; 


const App = () => {
  return (
    <div>
      <SideNav />
      
      <div style={{ marginLeft: '260px', padding: '20px' }}>

      <Dash/>

        
        {/* Main content goes here */}
      </div>
      <Footer />
    </div>
    
  );
};


export default App;
