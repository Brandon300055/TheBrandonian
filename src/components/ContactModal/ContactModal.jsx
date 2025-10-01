// src/components/ContactModal/ContactModal.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneLink, setPhoneLink] = useState('');

  useEffect(() => {
    const encodedEmail = 'YnJhbmRvbnN0ZXdhcnQzMDAwNTVAZ21haWwuY29t';
    const encodedPhone = 'NTE4LTg2Ny01MDE4';
    const encodedPhoneLink = 'MTUxODg2NzUwMTg=';
    
    setEmail(atob(encodedEmail));
    setPhone(atob(encodedPhone));
    setPhoneLink(atob(encodedPhoneLink));
  }, []);

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
            
            <a href={`tel:${phoneLink}`} className="phone-top">{phone}</a>
            
            <div className="company">
              Pierce &amp; Pierce
              <span className="company-sub">Mergers And Acquisitions</span>
            </div>
            
            <h2 className="name">Brandon Stewart</h2>
            <h3 className="title">Software Engineer</h3>
            
            <div className="bottom-info">
              <span id="email">{email}</span>
              <i 
                className="fas fa-copy copy-btn" 
                onClick={() => copyToClipboard(email, '#email')}
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