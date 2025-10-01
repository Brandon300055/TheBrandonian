// src/components/ContactModal/ContactModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const copyToClipboard = (text, elementId) => {
    navigator.clipboard.writeText(text);
    const element = document.querySelector(elementId);
    if (element) {
      element.classList.add("copied");
      setTimeout(() => {
        element.classList.remove("copied");
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={onClose}>&times;</span>
            
            <a href="tel:14358624642" className="phone-top">1-435-862-4642</a>
            
            <div className="company">
              Pierce &amp; Pierce
              <span className="company-sub">Mergers And Acquisitions</span>
            </div>
            
            <h2 className="name">Brandon Stewart</h2>
            <h3 className="title">Software Engineer</h3>
            
            <div className="bottom-info">
              <span id="email">brandonstewart300055@gmail.com</span>
              <i 
                className="fas fa-copy copy-btn" 
                onClick={() => copyToClipboard('brandonstewart300055@gmail.com', '#email')}
              ></i>
              &nbsp;&nbsp;Fax none &nbsp; Telex none
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;