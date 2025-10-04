// src/components/ReferenceSection/ReferenceSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ReferenceSection.css';

const ReferenceSection = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const parallaxRef = useRef(null);
  const sectionRef = useRef(null);

  const setRefs = (element) => {
    sectionRef.current = element;
    inViewRef(element);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrolled = window.scrollY;
        const offset = (scrolled - sectionTop) * 0.3;
        parallaxRef.current.style.transform = `translate3d(0px, ${offset}px, 0px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="sec7" className="scroll-con-sec" ref={setRefs}>
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>References</h2>
          <p>
            "The first method for estimating the intelligence of a ruler is to look at the men he has around him" 
            -Machiavelli
          </p>
          <div className="clearfix"></div>
          <span className="bold-separator"></span>
        </motion.div>

        <motion.div 
          className="row"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="col-12">
            <h3 className="text-subtitle">
              For Complete list of References Please refer to my downloadable resume:
            </h3>
          </div>
          <div className="col-12">
            <a 
              href="https://docs.google.com/document/d/1N1tsowVguHzywbAR66xq6uxKfYdxRguJFyab8B9BuL8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hide-icon"
            >
              <i className="fa fa-file-pdf-o"></i>
              <span>Download Résumé</span>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="parallax-title right-pos" ref={parallaxRef}>Reference</div>
    </section>
  );
};

export default ReferenceSection;