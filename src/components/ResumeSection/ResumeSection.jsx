// src/components/ResumeSection/ResumeSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ResumeSection.css';

const ResumeSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const resumeItems = [
    {
      type: 'edu',
      icon: 'fa-graduation-cap',
      title: 'Computer Science',
      subtitle: 'SUU, UT',
      period: '2016-2020',
      role: 'Student',
      details: [
        'Vice President, ACM (Association for Computing Machinery)',
        'Participated in multiple university-level coding competitions, demonstrating strong coding and problem-solving skills in a competitive environment'
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
        'Collaborated with team members to develop web applications and gain experience in software development'
      ]
    },
    {
      type: 'work',
      icon: 'fa-briefcase',
      title: 'Net Soft/SUW Design',
      subtitle: 'St George, UT',
      period: '2016-2019',
      role: 'Software Engineer',
      details: [
        'Worked on multiple software projects, including iOS and Android mobile app development',
        'Refined skills in frontend and backend development',
        'Contributed to CRM data import systems and integration'
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
        'Co-founded data-driven startup in an incubator environment',
        'Successfully led the company to a pre-Series A valuation of $500k within 9 months',
        'Integrated with Amazon and eBay APIs',
        'Utilized Laravel and Vue for web development',
        'Managed a small dev team, emphasizing Lean methodology'
      ]
    },
    {
      type: 'work',
      icon: 'fa-briefcase',
      title: 'Contractor',
      subtitle: 'Phoenix AZ / London UK',
      period: '2021-present',
      role: 'Software Engineer',
      details: [
        'Worked on multiple software projects, including iOS and Android mobile app development',
        'Refined skills in frontend and backend development',
        'Contributed to CRM data import systems and integration'
      ]
    }
  ];

  return (
    <section id="sec4" className="scroll-con-sec dec-sec" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="parallax-title right-pos">My Résumé</div>
          <h2>Résumé</h2>
          <p>Where the willingness is great, the difficulties cannot be great. -Machiavelli</p>
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
          href="https://docs.google.com/document/d/1N1tsowVguHzywbAR66xq6uxKfYdxRguJFyab8B9BuL8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn hide-icon"
        >
          <i className="fa fa-file-pdf-o"></i>
          <span>Download Résumé</span>
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
