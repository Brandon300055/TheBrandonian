// src/components/Loader/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <motion.div 
      className="loader-holder"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-inner">
        <div className="loader"></div>
      </div>
    </motion.div>
  );
};

export default Loader;