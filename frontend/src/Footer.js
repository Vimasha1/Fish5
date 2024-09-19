import React from 'react';
import './Footer.css'; 


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-info">
                    <div className="footer-company">
                        <h3>ST.FRANCIS XAVIER'S FISHERIES COMMUNITY</h3>
                        <p>ST.FRANCIS XAVIER'S, 46/26, Navam Mawatha,<br />Wennappuwa, Sri Lanka</p>
                    </div>
                    
                    <div className="footer-links">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><a href="#name">Terms & Conditions</a></li>
                            <li><a href="#name">Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-contact">
                        <h3>CONTACT</h3>
                        <p>Telephone: +94 11 234 3700<br />Whatsapp: +94 11 470 9400</p>
                        <p>Email: stfancis@gmail.com</p>
                    </div>
                </div>
                
                <div className="footer-social">
                    <h3>FIND US ON</h3>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                        <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                        <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;