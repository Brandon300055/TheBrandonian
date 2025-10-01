import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutSection.css';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="sec2" className="scroll-con-sec dec-sec" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>About me</h2>
          <p>"The only way to win is to learn faster than anyone else." - Eric Ries | The Lean Startup</p>
          <div className="clearfix"></div>
          <span className="bold-separator"></span>
          <div className="parallax-title right-pos">About Me</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-subtitle">The Artistry</h4>
          <h3 className="text-title">Software as an <span className="text">Art</span> Form</h3>
          <p>
            In the realm of software development, a unique marriage between creativity and logic emerges,
            paralleling the characteristics of classic art forms. As data courses through a program, it
            mirrors the fluid motion of water streaming down a river. A unified balance arises when classes
            and functions seamlessly intertwine, crafting a symbolic harmony.
          </p>
        </motion.div>

        <motion.div 
          style={{ marginTop: '40px' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="text-subtitle">The Innovation</h4>
          <h3 className="text-title">Starting a <span>Startup</span></h3>
          <div className="fl-wrap abt-wrap">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <a href="https://spaceLander.io" target="_blank" rel="noopener noreferrer">SpaceLander.io</a>, 
                  a promising early-stage startup, was born in the incubator at Attwood Innovation Plaza...
                </p>
              </div>
              <div className="col-md-6">
                <div className="box-item vis-det fl-wrap">
                  <img src="/images/the_office.jpg" className="respimg" alt="Office" />
                  <a data-src="/images/the_office.jpg" className="image-popup">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ marginTop: '40px' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="text-subtitle">The Intelligence</h4>
          <h3 className="text-title">On <span>Neural Networks</span></h3>
          <p>
            The elegance of neural networks lies in their ability to generate complex intelligence from
            simple building blocks...
          </p>
        </motion.div>

        <motion.div 
          style={{ marginTop: '40px' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h4 className="text-subtitle">The Skill</h4>
          <h3 className="text-title">An <span>Exceptional</span> cross-platform Mobile Developer</h3>
          <div className="row">
            <div className="col-md-6">
              <p>
                As a skilled React Native developer, I specialize in creating seamless and high-performing
                mobile applications for both iOS and Android platforms...
              </p>
              <div className="mw-100 text-center mb-5">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.suwdesign.ssc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn hide-icon m-auto"
                >
                  <i className="fab fa-google-play"></i>
                  <span>Download</span>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-item vis-det fl-wrap">
                <img src="/images/app.png" className="respimg" alt="App" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="custom-inner text-center" style={{ marginTop: '40px' }}>
          <div className="row">
            <div className="col-12">
              <h3 style={{ marginBottom: '5px' }}>
                Want to learn more about me? Did you know I am skilled at AWS (S3, EC2, EB, IAM)?
              </h3>
            </div>
            <div className="col-12">
              <div className="box-header amazon work">
                <h3>Just Say "Alexa, open the Brandon is Nifty Skill!"</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;