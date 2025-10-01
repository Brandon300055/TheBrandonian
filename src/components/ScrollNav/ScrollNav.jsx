// src/components/ScrollNav/ScrollNav.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './ScrollNav.css';

const ScrollNav = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState('sec2');

  const sections = [
    { id: 'sec2', label: 'About', bgText: 'About' },
    { id: 'sec4', label: 'Résumé', bgText: 'Résumé' },
    { id: 'sec5', label: 'Projects', bgText: 'Projects' },
    { id: 'sec6', label: 'Skills', bgText: 'Skills' },
    { id: 'sec7', label: 'Reference', bgText: 'Reference' }
  ];

  return (
    <div className="scroll-nav-holder fl-wrap">
      <nav className="scroll-nav fl-wrap">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.id}
                spy={true}
                smooth={true}
                duration={1200}
                offset={-70}
                className="scroll-link"
                activeClass="act-link"
                onSetActive={() => {
                  setActiveSection(section.id);
                  onSectionChange(section.bgText);
                }}
              >
                <span>{section.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ScrollNav;