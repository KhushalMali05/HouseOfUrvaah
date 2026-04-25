import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="15" r="4" fill="#B07A4F" />
          <path d="M20 80 C 20 40, 80 40, 80 80" stroke="#B07A4F" strokeWidth="2" />
          <path d="M10 85 C 10 30, 90 30, 90 85" stroke="#1F4D3A" strokeWidth="3" />
          <line x1="50" y1="65" x2="50" y2="85" stroke="#1F4D3A" strokeWidth="3" />
          <line x1="35" y1="85" x2="65" y2="85" stroke="#1F4D3A" strokeWidth="3" />
        </svg>
      </div>
      <div className="logo-text-wrapper">
        <span className="logo-house-of">HOUSE OF</span>
        <span className="logo-urvaah">URVAAH</span>
        <div className="logo-divider"></div>
        <span className="logo-tagline">EFFORTLESSLY PUT TOGETHER</span>
      </div>
    </div>
  );
};

export default Logo;
