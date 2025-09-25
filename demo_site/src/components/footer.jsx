import React from 'react';
import './footer.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">  
        <nav className="footer-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Download Resume</a></li>
            <li><a href="#features">Download CV</a></li>
            <li><a href="#works">Works</a></li>
          </ul>
        </nav>
        
        <div className="footer-social-icons">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaGithub /></a>
        </div>
        <div className="footer-copyright">
          © Copyright 2025, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;