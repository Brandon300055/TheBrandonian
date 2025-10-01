// src/components/HeroSection/HeroSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './HeroSection.css';

const HeroSection = () => {
  const parallaxRef = useRef(null);
  const [bgImage, setBgImage] = useState('/images/TheBrandonian.png');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgImage('/images/TheBrandonianSmall.png');
      } else {
        setBgImage('/images/TheBrandonian.png');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 10;
      const yPos = (clientY / innerHeight - 0.5) * 10;
      
      parallaxRef.current.style.transform = 
        `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hero-wrap fl-wrap full-height">
      <div className="impulse-wrap">
        <div className="mm-par-wrap">
          <div className="mm-parallax" ref={parallaxRef}>
            <div className="overlay"></div>
            <div 
              className="bg" 
              style={{ 
                backgroundImage: `url(${bgImage})`
              }}
            ></div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="hero-wrap-item single-title-wrap left-her alt"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="fl-wrap section-entry">
          <h2>Brandon Stewart</h2>
          <h3>Coder | Founder | AI Engineer | Artist</h3>
          
          <Link 
            to="sec2" 
            smooth={true} 
            duration={1200}
            className="btn hide-icon custom-scroll-link"
          >
            <i className="fa fa-flag-checkered"></i>
            <span>Let's start</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;