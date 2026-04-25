import React from 'react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-popular">
      <div className="footer-main container">
        {/* Brand & Social Section */}
        <div className="footer-section brand-col">
          <div className="footer-logo-box small-logo">
            <Logo />
          </div>
          <p className="footer-brand-desc">
            House of Urvaah brings you the finest handcrafted sarees, woven with tradition and elegance for the modern woman.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Youtube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="#" aria-label="Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"></path><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* Shop Column */}
        <div className="footer-section">
          <h4 className="footer-title">SHOP</h4>
          <ul className="footer-links">
            <li><a href="#">Heritage Silk</a></li>
            <li><a href="#">Bridal Collection</a></li>
            <li><a href="#">Daily Wear</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-section">
          <h4 className="footer-title">THE HOUSE</h4>
          <ul className="footer-links">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Artisans of Urvaah</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Store Locator</a></li>
          </ul>
        </div>

        {/* Customer Care Column */}
        <div className="footer-section">
          <h4 className="footer-title">CUSTOMER CARE</h4>
          <ul className="footer-links">
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Sizing Guide</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-section contact-col">
          <h4 className="footer-title">GET IN TOUCH</h4>
          <div className="footer-contact-item">
            <span>Email: concierge@houseofurvaah.com</span>
          </div>
          <div className="footer-contact-item">
            <span>Phone: +91 98765 43210</span>
          </div>
          <a href="#" className="whatsapp-footer-btn">
            WHATSAPP US
          </a>
        </div>
      </div>

      <div className="footer-divider container"></div>

      <div className="footer-bottom container">
        <div className="footer-copyright">
          © 2025 HOUSE OF URVAAH. ALL RIGHTS RESERVED.
        </div>
        <div className="footer-legal">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF SERVICE</a>
          <a href="#">COOKIES</a>
        </div>
        <div className="footer-payments">
          <div className="payment-icon">VISA</div>
          <div className="payment-icon">MASTER</div>
          <div className="payment-icon">UPI</div>
          <div className="payment-icon">AMEX</div>
          <div className="payment-icon">GPAY</div>
          <div className="payment-icon">APPLE</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
