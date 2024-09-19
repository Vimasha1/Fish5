// SideNav.js
import React from 'react';
import './SideNav.css'; // Import the CSS file

const SideNav = () => {
  return (
    <div className="sidenav">
      <img src="logo.png" alt="Logo" className="logo-img" />
      <ul className="nav-list">
        <li className="nav-item">
          <img src="house.png" alt="Home" className="nav-icon" />
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <img src="service.png" alt="Services" className="nav-icon" />
          <a href="#services">Services</a>
        </li>
        <li className="nav-item">
          <img src="about.png" alt="About Us" className="nav-icon" />
          <a href="#about-us">About Us</a>
        </li>
        <li className="nav-item">
          <img src="contact.png" alt="Contact Us" className="nav-icon" />
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
