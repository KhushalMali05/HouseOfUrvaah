import React, { useState, useEffect } from 'react';
import { User, Search, ShoppingBag, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-logo">
          <Logo />
        </div>
        
        <div className="nav-links-center">
          <div className="nav-item-dropdown">
            <a href="#" className="nav-item">SAREE <ChevronDown size={14} /></a>
          </div>
          <a href="#" className="nav-item">BLOUSE</a>
          <div className="nav-item-dropdown">
            <a href="#" className="nav-item">MEN'S KURTA <ChevronDown size={14} /></a>
          </div>
          <a href="#" className="nav-item">BLOG</a>
          <a href="#" className="nav-item">EKROOP COLLECTION</a>
        </div>
        
        <div className="nav-icons">
          <button className="nav-icon-btn"><User size={20} /></button>
          <button className="nav-icon-btn"><Search size={20} /></button>
          <button className="nav-icon-btn cart-btn">
            <ShoppingBag size={20} />
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
