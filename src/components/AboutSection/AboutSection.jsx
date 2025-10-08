import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutSection.css';

const AboutSection = () => {
  // Dynamically set threshold based on screen size
  const getThreshold = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768 ? 0.1 : 0.1;
    }
    return 0.1;
  };

  const [inViewRef, inView] = useInView({
    threshold: getThreshold(),
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
  });

  const parallaxRef = useRef(null);
  const sectionRef = useRef(null);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState('');

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

  const handleImageClick = (imageSrc) => {
    setZoomedImage(imageSrc);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
    setZoomedImage('');
  };

  return (
    <section id="sec2" className="scroll-con-sec dec-sec" ref={setRefs}>
      <div className="container">
        {/* Section Title */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>About me</h2>
          <p>"Waste no more time arguing about what a good man should be. Be one."<br />- Marcus Aurelius</p>
          <span className="bold-separator"></span>
          <div className="parallax-title right-pos" ref={parallaxRef}>About Me</div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="motion-section"
        >
          <h4 className="text-subtitle">Bio</h4>
          <h3 className="text-title">Software <span>Engineer</span></h3>
          <p>
            Software engineer specializing in scalable architectures, cryptographic systems, and cross-platform mobile development.
            Co-founded SpaceLander.io, achieving $500k pre-Series A valuation within 9 months. Published research on encrypted
            search algorithms for zero-trust architectures, demonstrating 20x performance improvements in healthcare EMR systems.
            Extensive experience in highly regulated industries including financial services, healthcare systems, and government state
            sites, ensuring HIPAA compliance, financial data security, and accessibility standards. Experienced with AWS cloud infrastructure,
            React Native mobile apps, and machine learning integration. Strong background in both startup environments and enterprise-level
            development, with proven ability to lead technical teams and deliver production-ready solutions that balance innovation with
            maintainability.
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          style={{ marginTop: '20px' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="motion-section"
        >
          <h4 className="text-subtitle">Philosophy</h4>
          <h3 className="text-title">Software as <span>Art</span></h3>
          <p>
            Software is an art, not only in what is seen, but in the code that makes it move. Data flows like water, precise and purposeful,
            carving its path through functions and modules. When crafted with care, code achieves clarity and balance—every line purposeful,
            every structure intentional. Elegance is in restraint, in reliability, in harmony of design and function. Like a current that never falters,
            it carries its intention forward, quietly powerful, enduring, and undeniably deliberate.
          </p>
        </motion.div>

        {/* Startup */}
        <motion.div
          style={{ marginTop: '20px' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="motion-section"
        >
          <h4 className="text-subtitle">Startup</h4>
          <h3 className="text-title">SpaceLander <span>Founder</span></h3>
          <div className="fl-wrap abt-wrap">
            <div className="row">
              <div className="col-md-6">
                <p>
                  As founder at SpaceLander.io, I guided a dedicated team in the Attwood Innovation Plaza incubator,
                  creating a data-driven solution for identifying best-selling products. Architected the core platform using
                  Laravel and Vue with BigQuery for large-scale data storage. Integrated Amazon and eBay APIs to enable
                  cross-platform product listings and real-time inventory syncing. Embracing Lean methodology, we validated
                  features with customer archetypes before development, transforming an idea into a company with a pre-Series A
                  valuation of $500k within 9 months. Led technical strategy, managed the development team, and applied predictive
                  models for advanced analytics.
                </p>
              </div>
              <div className="col-md-6">
                <div className="box-item vis-det fl-wrap">
                  <img src="/images/the_office.jpg" className="respimg" alt="Office" />
                  <a 
                    className="image-popup"
                    onClick={() => handleImageClick('/images/the_office.jpg')}
                  >
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research */}
        <motion.div
          style={{ marginTop: '20px' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="motion-section"
        >
          <h4 className="text-subtitle">Research</h4>
          <h3 className="text-title"><span>Cryptography</span> Publication</h3>
          <p>
            Co-authored "An Encrypted Search Algorithm for a Zero-Trust Architecture" addressing critical challenges in
            secure industries like healthcare and finance. Developed a blind-indexing algorithm using HMAC-SHA-256 that
            achieves sub-2-second search times on datasets exceeding 100,000 records while maintaining complete encryption—a
            20x performance improvement over traditional decryption methods. Applied to production healthcare EMR systems
            with HIPAA compliance. Pending publication in the academic journal Frontiers.
          </p>
          <div className="mw-100 text-center" style={{ marginBottom: '40px' }}>
            <a
              href="https://docs.google.com/document/d/1pXZbB9vQv_SacAhQTq7CMExV9P3G8qoRI3MX3cIM5qw/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hide-icon m-auto"
            >
              <i className="fa fa-file-alt"></i>
              <span>Read The Paper</span>
            </a>
          </div>
        </motion.div>


        {/* Intelligence */}
        <motion.div
          style={{ marginTop: '20px', clear: 'both' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="motion-section"
        >
          <h4 className="text-subtitle">Intelligence</h4>
          <h3 className="text-title"><span>Neural</span> Networks</h3>
          <p>
            Specialized in implementing production-grade neural network systems for healthcare applications and
            computer vision solutions. Developed convolutional neural networks for real-time image classification
            achieving 95%+ accuracy, and built custom LLM integrations for anomaly detection in patient records,
            while maintaining HIPAA compliance. Experienced in integrating OpenAI's ChatGPT API to develop
            intelligent EMR interfaces that enable clinicians to generate clinical notes, automate insurance claims
            processing, summarize patient records, and flag critical medical information through natural language
            interactions. Leveraged Pinecone vector databases for semantic search and context retrieval across medical
            documentation, ensuring efficient and accurate patient data access.
          </p>
        </motion.div>

        {/* Mobile */}
        <motion.div
          style={{ marginTop: '20px' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="motion-section"
        >
          <h4 className="text-subtitle">Mobile</h4>
          <h3 className="text-title"><span>Expert</span> Mobile Developer</h3>
          <p>
            Skilled mobile application developer with expertise in building high-performance, cross-platform applications using
            React Native for both iOS and Android platforms. Specialized in creating seamless user experiences with smooth 60fps
            animations, gesture-based interactions, and responsive UI components. Proficient in implementing offline-first
            architectures with local data persistence, background synchronization, and network resilience. Published multiple
            production applications with high user ratings, demonstrating strong understanding of platform-specific design
            guidelines, app store optimization, and mobile-specific performance considerations. Experienced in integrating native
            modules, push notifications, in-app purchases, and device APIs while maintaining code reusability across platforms.
            Committed to delivering polished, production-ready applications that provide exceptional user experiences on mobile devices.
          </p>
        </motion.div>

      </div>

      {/* Image Zoom Modal */}
      {isImageOpen && (
        <div className="image-zoom-modal" onClick={closeImage}>
          <span className="close-zoom" onClick={closeImage}>&times;</span>
          <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    </section>
  );
};

export default AboutSection;