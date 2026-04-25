import React from 'react';
import { motion } from 'framer-motion';
import './NewsletterSection.css';

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="container newsletter-container">
        <motion.div 
          className="newsletter-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="newsletter-title">Join Our Inner Circle</h2>
          <p className="newsletter-subtitle">
            Subscribe to receive updates on new arrivals, special offers, and styling inspiration.
          </p>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-submit-btn">
                SUBSCRIBE
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
