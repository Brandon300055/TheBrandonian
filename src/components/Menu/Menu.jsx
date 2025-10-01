// src/components/Menu/Menu.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

const Menu = ({ isOpen, onClose, onContactClick }) => {
  const menuVariants = {
    closed: { x: '-100%' },
    open: { x: 0 }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const handleCardClick = (e) => {
    e.preventDefault();
    onContactClick();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div 
            className="menu-wrap menu-open"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.4 }}
          >
            <div className="menu-inner">
              <a href="/" className="menu-logo">
                <h6 className="logo-sub-text">THE</h6>
                <h2 className="logo-text">BRANDONIAN</h2>
              </a>
              
              <div className="hid-men-wrap alt">
                <div id="hid-men">
                  <ul className="menu">
                    <li><a href="/" onClick={onClose}>Home</a></li>
                    <li>
                      <a 
                        href="https://github.com/Brandon300055" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i> GitHub
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/brandon-stewart-aab173133/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin"></i> LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="menu-card-wrap">
                <a href="#" className="btn hide-icon" onClick={handleCardClick}>
                  <i className="fa fa-address-card"></i>
                  <span>Take My Card</span>
                </a>
              </div>
            </div>
            
            <svg 
              className="morph-shape"
              xmlns="http://www.w3.org/2000/svg" 
              width="100%" 
              height="100%" 
              viewBox="0 0 100 800"
              preserveAspectRatio="none"
            >
              <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z" />
            </svg>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Menu;