import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxCollection.css';

const collectionItems = [
  { id: 1, title: "Emerald Elegance", img: "/assets/pt1.webp" },
  { id: 2, title: "Teal Grace", img: "/assets/pt2.webp" },
  { id: 3, title: "Royal Heritage", img: "/assets/pt3.webp" },
  { id: 4, title: "Mint Zari Glow", img: "/assets/pt4.webp" },
  { id: 5, title: "Midnight Glam", img: "/assets/pt5.webp" },
  { id: 6, title: "Champagne Silk", img: "/assets/pt6.webp" },
  { id: 7, title: "Banarasi Royale", img: "/assets/pt7.webp" },
  { id: 8, title: "Bridal Blue Luxury", img: "/assets/pt8.webp" },
];

const ParallaxCollection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70.674%"]);

  return (
    <section ref={targetRef} className="horizontal-parallax-container">
      <div className="sticky-wrapper">
        <motion.div style={{ x }} className="horizontal-track">
          {/* Section Intro Title */}
          <div className="collection-intro">
            <div className="intro-top-group">
              <motion.span 
                className="intro-subtitle"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                VOYAGE THROUGH SILK
              </motion.span>
              <motion.h2 
                className="intro-main-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                THE <br />
                <span className="italic-accent">Heritage</span> <br />
                EDIT
              </motion.h2>
              
              <motion.p 
                className="intro-manifesto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                A curated selection of hand-woven masterpieces, where every thread tells a story of ancient looms and timeless grace. Discover the soul of Indian craftsmanship.
              </motion.p>
            </div>

            <div className="scroll-hint">
              <span className="hint-text">EXPLORE COLLECTION</span>
              <div className="hint-line"></div>
            </div>
          </div>

          {collectionItems.map((item) => (
            <div key={item.id} className="parallax-scene-horizontal">
              <div 
                className="parallax-blur-bg" 
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              
              <div className="bg-container">
                <img 
                  src={item.img} 
                  className="parallax-bg-contain" 
                  alt={item.title}
                />
              </div>
              
              <div className="parallax-overlay"></div>

              <div className="parallax-content">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {item.title}
                </motion.h1>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxCollection;
