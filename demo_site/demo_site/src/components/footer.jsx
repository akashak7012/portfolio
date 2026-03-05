import React from 'react';
import './footer.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">  
        <nav className="footer-nav">
          <ul>
            <li><a href="#1">About</a></li>
            <li><a href="/resume.pdf" 
        download="resume.pdf">Download Resume</a></li>
            <li><a href="#3">Works</a></li>
          </ul>
        </nav>
        
        <div className="footer-social-icons">
          <a href="https://www.linkedin.com/in/akashak1/"><FaLinkedin /></a>
          <a href="https://www.behance.net/akashs100"><FontAwesomeIcon icon={faBehance} /></a>
          <a href="https://www.instagram.com/_a_k_a_s_h__s?igsh=Z2F0ODdpd21uOXd5"><FaInstagram /></a>
          <a href="https://github.com/akashak7012"><FaGithub /></a>
        </div>
        <div className="footer-copyright">
          © Copyright 2025, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;