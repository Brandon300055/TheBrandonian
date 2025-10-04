// src/components/ProjectsSection/ProjectsSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProjectsSection.css';

const ProjectsSection = ({ onContactClick }) => {
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const parallaxRef = useRef(null);
  const sectionRef = useRef(null);

  // Combine refs
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

  const projects = [
    {
      title: 'Spacelander',
      description: 'Developed a large-scale, SaaS-based platform for identifying potential markets.',
      link: 'https://spacelander.io'
    },
    {
      title: 'Neural-Network-From-Scratch',
      description: 'Implemented a basic neural network in Python to explore AI and machine learning concepts.',
      link: 'https://github.com/Brandon300055/Neural-Network-From-Scratch'
    },
    {
      title: 'Hotdog-Not-Hotdog',
      description: "Developed an image classifier inspired by HBO's Silicon Valley to identify hotdogs in images.",
      link: 'https://github.com/Brandon300055/Hotdog-Not-Hotdog'
    },
    {
      title: 'Starving Student Card App',
      description: 'Location-based app for students, utilizing the Haversine formula for distance calculation.',
      link: 'https://play.google.com/store/apps/details?id=com.suwdesign.ssc'
    }
  ];

  return (
    <section id="sec5" className="scroll-con-sec dec-sec" ref={setRefs}>
      <div className="sec-dec right-rot"></div>
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Projects</h2>
          <p>"Innovation distinguishes between a leader and a follower" -Steve Jobs</p>
          <div className="clearfix"></div>
          <span className="bold-separator"></span>
        </motion.div>

        <div className="row">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="col-md-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="project-box">
                  <h3>{project.title}</h3>
                  <h5>{project.description}</h5>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="github-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="github-header">
            <h3>GitHub Activity</h3>
            <p>A visual representation of my daily contributions and commitment to continuous development</p>
          </div>
          <div className="github-contribution-graph">
            <img 
              src="https://ghchart.rshah.org/4CAF50/Brandon300055"
              alt="GitHub Contribution Graph"
            />
          </div>
        </motion.div>

        <div className="order-wrap fl-wrap color-bg">
          <div className="row">
            <div className="col-md-8">
              <h4>Let me know if you want to work together</h4>
            </div>
            <div className="col-md-4">
              <button className="ord-link openModal" onClick={onContactClick}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="parallax-title right-pos" ref={parallaxRef}>Projects</div>
    </section>
  );
};

export default ProjectsSection;