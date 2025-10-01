// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = ({ onContactClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <p className="mail-link" onClick={onContactClick}>
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </p>
      
      <div className="footer-social">
        <ul>
          <li>
            <a href="https://github.com/Brandon300055" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/brandon-stewart-aab173133/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      
      <div className="copyright">
        &copy; {currentYear} Brandon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;