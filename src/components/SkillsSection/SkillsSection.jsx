// src/components/SkillsSection/SkillsSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faAws, faVuejs, faPhp, faJs, faPython, faAppStore, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faPlug, faDatabase, faBrain, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './SkillsSection.css';

const SkillsSection = () => {
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

  const skillRows = [
    [
      { icon: faLaravel, name: 'Laravel' },
      { icon: faAws, name: 'AWS' },
      { icon: faVuejs, name: 'Vue.js' }
    ],
    [
      { icon: faPhp, name: 'PHP' },
      { icon: faJs, name: 'JavaScript' },
      { icon: faPython, name: 'Python' }
    ],
    [
      { icon: faPlug, name: "Rest API's" },
      { icon: faAppStore, name: 'iOS/Android Development' },
      { icon: faDatabase, name: 'SQL/ORM' }
    ],
    [
      { icon: faBrain, name: 'Deep Learning' },
      { icon: faCodeBranch, name: 'Git/Project Management' },
      { icon: faReact, name: 'React' }
    ]
  ];

  return (
    <section id="sec6" className="scroll-con-sec dec-sec" ref={setRefs}>
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Skills</h2>
          <p>"The question isn't who is going to let me; it's who is going to stop me." -Ayn Rand</p>
          <div className="clearfix"></div>
          <span className="bold-separator"></span>
        </motion.div>

        {skillRows.map((row, rowIndex) => (
          <motion.div 
            key={rowIndex}
            className="skills-wrap"
            style={{ display: 'flex' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: rowIndex * 0.15 }}
          >
            {row.map((skill, index) => (
              <motion.div 
                key={index}
                style={{ padding: '30px', margin: 'auto' }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={skill.icon} style={{ fontSize: '72px' }} />
                <h5>{skill.name}</h5>
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Amazon / Voice Section */}
        <div className="custom-inner text-center" style={{ marginTop: '40px' }}>
          <div className="row">
            <div className="col-12">
              <h3 style={{ marginBottom: '5px' }}>
                Full-Stack Capabilities: AWS (S3, EC2, Elastic Beanstalk, IAM, Lambda, CloudFront)
              </h3>
            </div>
            <div className="col-12">
              <div className="box-header alexa-skill work">
                <h3>Try My Alexa Skill, just say: "Alexa, open the Brandon is Nifty Skill!"</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-title right-pos" ref={parallaxRef}>Skills</div>
    </section>
  );
};

export default SkillsSection;