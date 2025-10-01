import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

const Menu = ({ isOpen, onClose }) => {
  const menuVariants = {
    closed: { x: -320 },
    open: { x: 20 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="menu-wrap"
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
                </ul>
              </div>
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
      )}
    </AnimatePresence>
  );
};

export default Menu;