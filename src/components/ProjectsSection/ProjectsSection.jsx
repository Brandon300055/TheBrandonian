// src/components/ProjectsSection/ProjectsSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProjectsSection.css';

const ProjectsSection = ({ onContactClick }) => {
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
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
    <section id="sec5" className="scroll-con-sec dec-sec" ref={setRefs}>
      <div className="sec-dec right-rot"></div>
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>"The only way to do great work is to love what you do."<br /> - Steve Jobs</p>
          <div className="clearfix"></div>
          <span className="bold-separator"></span>
        </div>

        {/* Town Apps */}
        <div className="project-card">
          <div className="project-card-header">
            <i className="fa fa-mobile project-icon"></i>
            <h3>Town Apps Platform</h3>
            <span className="badge-cofounder">Health Project</span>
          </div>
          <p className="project-tagline">Professional iOS & Android apps for dental industry</p>
          <div className="app-icons-grid">
            <a href="https://apps.apple.com/us/app/dentaltown/id640834699" target="_blank" rel="noopener noreferrer" className="app-icon-item">
              <img src="/images/dt.webp" alt="Dentaltown" />
              <span>Dentaltown</span>
            </a>
            <a href="https://apps.apple.com/us/app/orthotown/id666587350" target="_blank" rel="noopener noreferrer" className="app-icon-item">
              <img src="/images/ot.webp" alt="Orthotown" />
              <span>Orthotown</span>
            </a>
            <a href="https://apps.apple.com/us/app/hygienetown/id666562322" target="_blank" rel="noopener noreferrer" className="app-icon-item">
              <img src="/images/ht.webp" alt="Hygienetown" />
              <span>Hygienetown</span>
            </a>
          </div>
          <div className="tech-tags">
            <span>React Native</span>
            <span>iOS</span>
            <span>Android</span>
            <span>API Integration</span>
          </div>
        </div>

        {/* Starving Student Card */}
        <div className="project-card">
          <div className="project-card-header">
            <i className="fa fa-map-marker project-icon"></i>
            <h3>Starving Student Card</h3>
          </div>
          <p className="project-tagline">Location-based student discount app</p>
          <div className="ssc-layout">
            <div className="ssc-visual">
              <img src="/images/ssc.webp" alt="Starving Student Card" />
            </div>
            <div className="ssc-content">
              <div className="ssc-stats">
                <div className="stat-item">
                  <i className="fa fa-users"></i>
                  <strong>15K+</strong>
                  <span>Active Users</span>
                </div>
                <div className="stat-item">
                  <i className="fa fa-building"></i>
                  <strong>200+</strong>
                  <span>Partners</span>
                </div>
                <div className="stat-item">
                  <i className="fa fa-map"></i>
                  <strong>3 Cities</strong>
                  <span>Coverage</span>
                </div>
              </div>
              <ul className="feature-list">
                <li><i className="fa fa-check"></i> GPS-based distance calculations with Haversine formula</li>
                <li><i className="fa fa-check"></i> Real-time merchant deals and exclusive discounts</li>
                <li><i className="fa fa-check"></i> Student email verification system</li>
                <li><i className="fa fa-check"></i> Push notifications for nearby deals</li>
              </ul>
            </div>
          </div>
          <div className="bottom-row">
            <div className="tech-tags">
              <span>React Native</span>
              <span>Laravel</span>
              <span>Hybrid App</span>
              <span>GPS API</span>
            </div>
            <a 
              href="https://play.google.com/store/apps/details?id=com.suwdesign.ssc&hl=en_US&gl=US"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hide-icon"
            >
              <i className="fab fa-google-play"></i>
              <span>Download App</span>
            </a>
          </div>
        </div>

        {/* ForBright Bank */}
        <div className="project-card">
          <div className="project-card-header">
            <i className="fa fa-university project-icon"></i>
            <h3>ForBright Bank</h3>
            <span className="badge-cofounder">Financial Project</span>
          </div>
          <p className="project-tagline">Digital banking platform development</p>
          <p className="project-description">
            Led full-stack development for a modern banking platform, creating secure loan processing systems and 
            completely redesigning the customer-facing interface for improved user experience.
          </p>
          <div className="dual-focus">
            <div className="focus-item">
              <i className="fa fa-server"></i>
              <h4>Laravel Backend</h4>
              <p>Loan processing infrastructure & secure REST APIs</p>
            </div>
            <div className="focus-item">
              <i className="fa fa-paint-brush"></i>
              <h4>Vue.js Frontend</h4>
              <p>Complete UI/UX rebranding & responsive design</p>
            </div>
          </div>
          <div className="tech-tags">
            <span>Laravel</span>
            <span>Vue.js</span>
            <span>MySQL</span>
            <span>REST API</span>
          </div>
          <a 
            href="https://www.forbrightbank.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn hide-icon"
          >
            <i className="fa fa-external-link"></i>
            <span>Visit Site</span>
          </a>
        </div>

        {/* EMRDesk */}
        <div className="project-card">
          <div className="project-card-header">
            <i className="fa fa-heartbeat project-icon"></i>
            <h3>EMRDesk Platform</h3>
            <span className="badge-cofounder">Health Project</span>
          </div>
          <p className="project-tagline">Electronic medical records management system</p>
          <p className="project-description">
            Built a comprehensive healthcare platform with enterprise-grade security on Firebase, handling sensitive 
            patient data for multiple medical practices with real-time synchronization and AI-powered doctor notes and patient record summarization.
          </p>
          <div className="dual-focus">
            <div className="focus-item">
              <i className="fa fa-shield"></i>
              <h4>HIPAA Compliance</h4>
              <p>256-bit encryption & BAA-compliant infrastructure</p>
            </div>
            <div className="focus-item">
              <i className="fa fa-fire"></i>
              <h4>Firebase Backend</h4>
              <p>Real-time database & cloud functions</p>
            </div>
          </div>
          <div className="tech-tags">
            <span>Firebase</span>
            <span>HIPAA Compliant</span>
            <span>AI Integration</span>
            <span>NoSQL</span>
          </div>
          <a 
            href="https://emrdesk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn hide-icon"
          >
            <i className="fa fa-heartbeat"></i>
            <span>Learn More</span>
          </a>
        </div>

        {/* SpaceLander */}
        <div className="project-card startup-card">
          <div className="project-card-header">
            <i className="fa fa-rocket project-icon"></i>
            <h3>SpaceLander.io</h3>
            <span className="badge-cofounder">Co-founder</span>
          </div>
          <p className="project-tagline">E-commerce market analysis SaaS platform</p>
          <div className="achievement-stats">
            <div className="stat">
              <i className="fa fa-dollar-sign"></i>
              <h4>$500K</h4>
              <p>Pre-Series A</p>
            </div>
            <div className="stat">
              <i className="fa fa-calendar"></i>
              <h4>9 months</h4>
              <p>To valuation</p>
            </div>
            <div className="stat">
              <i className="fa fa-plug"></i>
              <h4>2 APIs</h4>
              <p>Amazon + eBay</p>
            </div>
          </div>
          <div className="tech-tags">
            <span>Laravel</span>
            <span>Vue.js</span>
            <span>Data Analytics</span>
            <span>Lean Methodology</span>
          </div>
          <p className="note-text"><i className="fa fa-info-circle"></i> Platform no longer live</p>
        </div>

        {/* This Site */}
        <div className="project-card">
          <div className="project-card-header">
            <i className="fab fa-react project-icon"></i>
            <h3>TheBrandonian</h3>
          </div>
          <p className="project-tagline">This portfolio site you're viewing right now</p>
          <div className="tech-tags">
            <span>React</span>
            <span>Framer Motion</span>
            <span>Custom Animations</span>
            <span>Responsive Design</span>
          </div>
          <a 
            href="https://github.com/Brandon300055/TheBrandonian"
            target="_blank"
            rel="noopener noreferrer"
            className="btn hide-icon"
          >
            <i className="fab fa-github"></i>
            <span>View Code</span>
          </a>
        </div>

        {/* GitHub Section */}
        <div className="github-container">
          <h3 className="github-container-header"><i className="fab fa-github"></i> Open Source & GitHub Activity</h3>
          
          {/* GitHub Projects */}
          <div className="other-projects-section">
            <div className="github-projects-grid">
              <a href="https://github.com/Brandon300055/Neural-Network-From-Scratch" target="_blank" rel="noopener noreferrer" className="project-box">
                <i className="fa fa-brain"></i>
                <h3>Neural Network From Scratch</h3>
                <h5>Pure Python implementation exploring AI fundamentals</h5>
              </a>
              <a href="https://github.com/Brandon300055/Hotdog-Not-Hotdog" target="_blank" rel="noopener noreferrer" className="project-box">
                <i className="fa fa-hotdog"></i>
                <h3>Hotdog-Not-Hotdog</h3>
                <h5>Computer vision classifier inspired by Silicon Valley</h5>
              </a>
            </div>
          </div>

          {/* GitHub Activity */}
          <div className="github-section">
            <div className="github-header">
              <p>My GitHub Contribution Graph: Showcasing consistent commitment to growth</p>
            </div>
            <div className="github-contribution-graph">
              <a href="https://github.com/Brandon300055" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://ghchart.rshah.org/4CAF50/Brandon300055"
                  alt="GitHub Contribution Graph"
                />
              </a>
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