// src/components/ResumeSection/ResumeSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ResumeSection.css';

const ResumeSection = () => {
  // Dynamically set threshold based on screen size
  const getThreshold = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768 ? 0.1 : 0.3;
    }
    return 0.3;
  };

  const [ref, inView] = useInView({
    threshold: getThreshold(),
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
  });

  const parallaxRef = useRef(null);
  const sectionRef = useRef(null);

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

  const resumeItems = [
    {
      type: 'edu',
      icon: 'fa-graduation-cap',
      title: 'Computer Science',
      subtitle: 'UTU, UT',
      period: '2016-2020',
      role: 'Student',
      details: [
        'Vice President, ACM (Association for Computing Machinery)',
        'Competed in university coding competitions, demonstrating advanced problem-solving and algorithmic skills'
      ]
    },
    {
      type: 'work',
      icon: 'fa-briefcase',
      title: 'Generation Labs',
      subtitle: 'St. George, UT',
      period: '2015-2016',
      role: 'Jr. Developer',
      details: [
        'Collaborated on web application development, gaining foundational software engineering experience'
      ]
    },
    {
      type: 'work',
      icon: 'fa-briefcase',
      title: 'Net Soft/SUW Design',
      subtitle: 'St. George, UT',
      period: '2016-2019',
      role: 'Software Engineer',
      details: [
        'Developed iOS and Android applications, improving mobile accessibility and usability',
        'Contributed to CRM data import systems and integration pipelines',
        'Refined skills in frontend and backend development, delivering reliable software solutions'
      ]
    },
    {
      type: 'work',
      icon: 'fa-briefcase',
      title: 'SpaceLander.io',
      subtitle: 'spacelander.io',
      period: '2019-2021',
      role: 'Co-founder',
      details: [
        'Co-founded a data-driven startup, achieving $500k pre-Series A valuation in 9 months',
        'Integrated Amazon and eBay APIs for cross-platform product listings and real-time inventory syncing',
        'Led development team using Lean methodology, translating validated ideas into production-ready solutions'
      ]
    },
    {
      type: 'work',
      icon: 'fa-briefcase',
      title: 'Alpha Terris',
      subtitle: 'Phoenix, AZ / London, UK',
      period: '2021-2023',
      role: 'Software Engineer',
      details: [
        'Designed HIPAA-compliant EMR systems integrating OpenAI ChatGPT for automating clinical notes, insurance claims, and record summarization',
        'Implemented production-grade neural networks for anomaly detection and computer vision, improving healthcare workflow efficiency',
        'Leveraged Pinecone vector databases for semantic search and context retrieval across large datasets',
        'Delivered secure software solutions for regulated industries, balancing innovation with compliance'
      ]
    },
    {
      type: 'work',
      icon: 'fa-briefcase',
      title: 'Farran Media',
      subtitle: 'Phoenix, AZ',
      period: '2024-2025',
      role: 'Lead Frontend Engineer',
      details: [
        'Led frontend React Native development team, delivering the Dentaltown mobile application for dental professionals',
        'Architected key features to ensure seamless mobile-first experience',
        'Oversaw code quality and cross-functional collaboration, setting technical strategy for scalable, maintainable applications'
      ]
    }
  ];

  return (
    <section id="sec4" className="scroll-con-sec dec-sec" ref={(el) => { ref(el); sectionRef.current = el; }}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="parallax-title right-pos" ref={parallaxRef}>Résumé</div>
          <h2>Résumé</h2>
          <p>"Innovation distinguishes between a leader and a follower"<br />-Steve Jobs</p>
          <div className="clearfix"></div>
          <span className="bold-separator"></span>
        </motion.div>

        <div className="custom-inner-holder">
          {resumeItems.map((item, index) => (
            <motion.div
              key={index}
              className="custom-inner"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="row">
                <div className="col-md-4">
                  <div className={`resum-header ${item.type}`}>
                    <i className={`fa ${item.icon}`}></i>
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <span>{item.period}</span>
                  </div>
                </div>
                <div className="col-md-8">
                  <h4>{item.role}</h4>
                  {item.details.map((detail, idx) => (
                    <p key={idx}>• {detail}</p>
                  ))}
                  <span className="custom-inner-dec"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="https://docs.google.com/document/d/1sX_PeqVo9HuBzRQzYvheHxptrYhk8aHQgP9h-_lVLWY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn hide-icon"
        >
          <i className="fa fa-file"></i>
          <span>Download Résumé</span>
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;