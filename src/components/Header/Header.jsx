// src/components/Header/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import shareIcon from '../../assets/images/share.png';

const Header = ({ onMenuToggle, onShareToggle }) => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
    onMenuToggle();
  };

  return (
    <header className="main-header">
      <a href="/" className="logo-holder">
        <h6 className="logo-sub-text">THE</h6>
        <h2 className="logo-text">B</h2>
      </a>
      
      <div className="nav-button" onClick={handleMenuClick}>
        <span className={`menu-global menu-top ${menuActive ? 'menu-top-click' : ''}`}></span>
        <span className={`menu-global menu-middle ${menuActive ? 'menu-middle-click' : ''}`}></span>
        <span className={`menu-global menu-bottom ${menuActive ? 'menu-bottom-click' : ''}`}></span>
      </div>
      
      <div className="show-share isShare" onClick={onShareToggle}>
        <img src={shareIcon} alt="Share" />
      </div>
    </header>
  );
};

export default Header;