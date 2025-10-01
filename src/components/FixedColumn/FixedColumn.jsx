// src/components/FixedColumn/FixedColumn.jsx
import React, { useEffect, useState, useRef } from 'react';
import './FixedColumn.css';

const FixedColumn = ({ currentSection = '' }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const bgTitleRef = useRef(null);
  const animationRef = useRef(null);

  // Binary representations of mathematical constants
  const binaryConstants = useRef({
    // Pi: 3.14159265... → 11.001001000011111101...
    pi: '11001001000011111101101010100010001000010110100011000010001101001100',
    // Euler's number: 2.71828... → 10.101101111110000101...
    euler: '10101101111110000101010001011000101000101011101101001010000101110',
    // Golden ratio: 1.618033... → 1.100111110001101110...
    phi: '1100111110001101110111000110111001110110011011000011100111101111010'
  });

  const binaryIndex = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Check if scrolled past hero section (typically the first viewport height)
      const heroHeight = window.innerHeight;
      const scrollThreshold = heroHeight * 0.8;
      
      if (window.scrollY > scrollThreshold && !hasScrolledPastHero) {
        // Scrolled down past hero
        setHasScrolledPastHero(true);
      } else if (window.scrollY <= scrollThreshold && hasScrolledPastHero) {
        // Scrolled back up to hero - reset
        setHasScrolledPastHero(false);
        setDisplayText(''); // Clear the text to trigger new animation
        
        // Clear the span text immediately
        const span = bgTitleRef.current?.querySelector('span');
        if (span) {
          span.textContent = '';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledPastHero]);

  // Binary shuffle animation effect
  useEffect(() => {
    // Don't animate if we haven't scrolled past hero, currentSection is empty, or same as current display
    if (!hasScrolledPastHero || !currentSection || currentSection === displayText) return;

    const span = bgTitleRef.current?.querySelector('span');
    if (!span) return;

    // Clear any existing animation
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }

    const finalText = currentSection;
    const textArray = finalText.split('');
    
    // Get all binary digits in sequence
    const allBinary = 
      binaryConstants.current.pi + 
      binaryConstants.current.euler + 
      binaryConstants.current.phi;

    const positions = textArray.map((_, i) => i).filter(i => textArray[i] !== ' ');
    
    const getBinaryChar = () => {
      const char = allBinary[binaryIndex.current % allBinary.length];
      binaryIndex.current++;
      return char;
    };

    const step = 8; // Characters revealed per frame
    const fps = 25;
    let iteration = -step;

    const animate = () => {
      const displayArray = [...textArray];
      
      for (let i = 0; i < positions.length; i++) {
        const pos = positions[i];
        if (i < iteration) {
          // Already revealed
          displayArray[pos] = textArray[pos];
        } else if (i < iteration + step) {
          // Currently scrambling with binary from constants
          displayArray[pos] = getBinaryChar();
        } else {
          // Not yet revealed
          displayArray[pos] = '';
        }
      }

      span.textContent = displayArray.join('');

      iteration++;

      if (iteration <= positions.length) {
        animationRef.current = setTimeout(animate, 1000 / fps);
      } else {
        // Animation complete
        setDisplayText(currentSection);
        
        // Adjust font size based on text length
        const textLength = currentSection.length;
        if (bgTitleRef.current) {
          bgTitleRef.current.style.fontSize = textLength > 10 ? '64px' : '94px';
        }
      }
    };

    // Start animation
    animate();

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [currentSection, displayText, hasScrolledPastHero]);

  return (
    <div className="fixed-column">
      <div className="column-image fl-wrap full-height">
        <div className="bg bg-scroll"></div>
        <div className="overlay"></div>
      </div>
      <div className="bg-title alt" ref={bgTitleRef}>
        <span>{displayText}</span>
      </div>
      <div className="progress-bar-wrap">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </div>
  );
};

export default FixedColumn;