// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import HeroSection from './components/HeroSection/HeroSection';
import ScrollNav from './components/ScrollNav/ScrollNav';
import AboutSection from './components/AboutSection/AboutSection';
import ResumeSection from './components/ResumeSection/ResumeSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ReferenceSection from './components/ReferenceSection/ReferenceSection';
import Footer from './components/Footer/Footer';
import ContactModal from './components/ContactModal/ContactModal';
import FixedColumn from './components/FixedColumn/FixedColumn';
import ShareContainer from './components/ShareContainer/ShareContainer';

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('About');
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1064);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1064);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      
      <motion.div 
        id="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Fixed Left Header */}
        <Header 
          onMenuToggle={() => setMenuOpen(!menuOpen)} 
          onShareToggle={() => setShareOpen(!shareOpen)}
        />
        
        {/* Menu Overlay */}
        <Menu 
          isOpen={menuOpen} 
          onClose={() => setMenuOpen(false)} 
          onContactClick={() => setModalOpen(true)}
        />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Fixed Left Column with Background - Only render on large screens */}
        {isLargeScreen && <FixedColumn currentSection={currentSection} />}
        
        {/* Main Content Wrapper */}
        <div className="column-wrap scroll-content">
          {/* Scroll Navigation */}
          <ScrollNav onSectionChange={setCurrentSection} />
          
          {/* Content Wrapper to ensure proper background */}
          <div className="content-wrapper">
            <AboutSection />
            <ResumeSection />
            <ProjectsSection onContactClick={() => setModalOpen(true)} />
            <SkillsSection />
            <ReferenceSection />
            
            {/* To Top Section */}
            <div className="small-sec fl-wrap">
              <div className="to-top-wrap">
                <a className="to-top" href="#" onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  <i className="fa fa-angle-double-up"></i> Back to Top
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fixed Right Footer */}
        <Footer onContactClick={() => setModalOpen(true)} />
        
        {/* Modals */}
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <ShareContainer isOpen={shareOpen} />
      </motion.div>
    </>
  );
}

export default App;