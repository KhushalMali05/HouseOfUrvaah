import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './FeedbackSection.css';

const feedbacks = [
  {
    id: 1,
    name: "Ananya Sharma",
    location: "Mumbai",
    text: "The Emerald Silk saree is a masterpiece. The quality of the Zari and the richness of the fabric exceeded all my expectations. Truly a heritage piece.",
    rating: "5.0"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "London",
    text: "I wore the Banarasi Royale for my wedding reception. I have never felt more elegant. House of Urvaah truly understands timeless grace.",
    rating: "5.0"
  },
  {
    id: 3,
    name: "Meera Iyer",
    location: "Bangalore",
    text: "Ordering from overseas was so seamless. The packaging was beautiful and the saree itself is breathtaking. Effortlessly put together indeed!",
    rating: "4.9"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    location: "Hyderabad",
    text: "The craftsmanship is visible in every thread. It's rare to find such authentic hand-woven quality in today's market. Simply stunning.",
    rating: "5.0"
  },
  {
    id: 5,
    name: "Aditi Gupta",
    location: "Delhi",
    text: "Every piece I own from Urvaah feels like a legacy. The customer service is as premium as their collections. Highly recommended.",
    rating: "5.0"
  },
  {
    id: 6,
    name: "Sarah Jenkins",
    location: "New York",
    text: "I was looking for something that bridges tradition and modern luxury. The Mint Zari Glow saree is exactly that. Absolute perfection.",
    rating: "5.0"
  },
  {
    id: 7,
    name: "Fatima Al-Sayed",
    location: "Dubai",
    text: "The attention to detail in the embroidery is unlike anything I've seen. It truly feels like wearing a piece of art. A wonderful experience.",
    rating: "5.0"
  },
  {
    id: 8,
    name: "Ishani Kapoor",
    location: "Singapore",
    text: "The fabric drapes like a dream. You can tell this isn't mass-produced. House of Urvaah is now my go-to for all heritage wear.",
    rating: "4.9"
  },
  {
    id: 9,
    name: "Rohan Malhotra",
    location: "Toronto",
    text: "Gifted a custom saree to my mother for her 60th. The smile on her face said it all. Thank you for making it so special.",
    rating: "5.0"
  }
];

const FeedbackSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-70%", "0%"]);

  return (
    <section ref={sectionRef} className="feedback-parallax-container">
      <div className="feedback-sticky-wrapper">
        <div className="feedback-header">
          <motion.span
            className="feedback-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            VOICES OF ELEGANCE
          </motion.span>
          <motion.h2
            className="feedback-main-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            CLIENT <span className="italic-accent">Reflections</span>
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="feedback-track">
          {feedbacks.map((item) => (
            <div key={item.id} className="feedback-card">
              <div className="feedback-quote-icon">“</div>
              <p className="feedback-text">{item.text}</p>
              <div className="feedback-divider"></div>
              <div className="feedback-author-info">
                <div>
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-location">{item.location}</p>
                </div>
                <div className="author-rating">
                  <span className="rating-star">★</span>
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackSection;
