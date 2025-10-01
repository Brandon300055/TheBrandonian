
// src/components/ShareContainer/ShareContainer.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ShareContainer.css';

const ShareContainer = ({ isOpen }) => {
  const socialLinks = [
    { icon: 'fa-facebook', name: 'facebook', url: 'https://facebook.com/sharer/sharer.php?u=' },
    { icon: 'fa-twitter', name: 'twitter', url: 'https://twitter.com/intent/tweet?url=' },
    { icon: 'fa-linkedin', name: 'linkedin', url: 'https://www.linkedin.com/shareArticle?mini=true&url=' },
    { icon: 'fa-pinterest', name: 'pinterest', url: 'https://pinterest.com/pin/create/button/?url=' }
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