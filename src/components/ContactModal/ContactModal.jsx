import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, contactInfo }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneLink, setPhoneLink] = useState('');

  useEffect(() => {
    // Default encoded values
    const encodedEmail = 'YnJhbmRvbnN0ZXdhcnQzMDAwNTVAZ21haWwuY29t';
    const encodedPhone = 'NTE4LTg2Ny01MDE4';
    const encodedPhoneLink = 'MTUxODg2NzUwMTg=';

    setEmail(contactInfo?.email || atob(encodedEmail));
    setPhone(contactInfo?.phone || atob(encodedPhone));
    setPhoneLink(contactInfo?.phoneLink || atob(encodedPhoneLink));
  }, [contactInfo]);

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

  const companyName = contactInfo?.company || "Pierce & Pierce";
  const companySub = contactInfo?.companySub || "Mergers And Acquisitions";
  const name = contactInfo?.name || "Brandon Stewart";
  const title = contactInfo?.title || "Software Engineer";

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
            
            <div className="phone-container">
              <a href={`tel:${phoneLink}`} className="phone-top" id="phone">{phone}</a>
              <i 
                className="fas fa-copy copy-btn phone-copy" 
                onClick={() => copyToClipboard(phone, '#phone')}
              ></i>
            </div>
            
            <div className="company">
              {companyName}
              <span className="company-sub">{companySub}</span>
            </div>
            
            <h2 className="name">{name}</h2>
            <h3 className="title">{title}</h3>
            
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
