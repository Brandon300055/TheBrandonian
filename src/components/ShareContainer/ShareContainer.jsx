// src/components/ShareContainer/ShareContainer.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ShareContainer.css';

const ShareContainer = ({ isOpen }) => {
  const socialLinks = [
    { icon: 'fa-linkedin', name: 'linkedin', url: 'https://www.linkedin.com/shareArticle?mini=true&url=' },
    { icon: 'fa-twitter', name: 'twitter', url: 'https://twitter.com/intent/tweet?url=' },
    { icon: 'fa-instagram', name: 'instagram', url: 'https://www.instagram.com/' },
    { icon: 'fa-snapchat', name: 'snapchat', url: 'https://www.snapchat.com/' }
  ];

  const handleShare = (url) => {
    const currentUrl = window.location.href;
    window.open(url + encodeURIComponent(currentUrl), '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="share-container visshare">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              className={`share-icon share-icon-${link.name}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleShare(link.url)}
            >
              <i className={`fab ${link.icon}`}></i>
            </motion.a>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default ShareContainer;