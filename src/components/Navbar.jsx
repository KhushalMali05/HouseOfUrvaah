import React, { useState, useEffect } from 'react';
import { User, Search, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="nav-logo">
          <Logo />
        </div>
        
        <div className={`nav-links-center ${isMenuOpen ? 'active' : ''}`}>
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
          <button className="nav-icon-btn mobile-hidden"><Search size={20} /></button>
          <button className="nav-icon-btn cart-btn">
            <ShoppingBag size={20} />
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
           <div className="mobile-nav-links">
              <a href="#" className="mobile-nav-item">SAREE</a>
              <a href="#" className="mobile-nav-item">BLOUSE</a>
              <a href="#" className="mobile-nav-item">MEN'S KURTA</a>
              <a href="#" className="mobile-nav-item">BLOG</a>
              <a href="#" className="mobile-nav-item">EKROOP COLLECTION</a>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
