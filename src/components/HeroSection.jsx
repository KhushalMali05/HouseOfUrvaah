import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSection.css';

const images = [
  "/assets/hero.png",
  "/assets/img4.webp",
  "/assets/img5.webp",
  "/assets/img6.webp",
];

function ElegantShape({
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "rgba(255, 255, 255, 0.08)",
    className = ""
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -20,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={`elegant-shape ${className}`}
            style={{
                width: width,
                height: height,
            }}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                  width: '100%',
                  height: '100%',
                }}
            >
                <div 
                  className="elegant-shape-inner"
                  style={{
                    background: `linear-gradient(to bottom right, ${gradient}, transparent)`,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                />
            </motion.div>
        </motion.div>
    );
}

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="hero-scroll-container">
      {/* Background Geometric Shapes */}
      <div className="hero-geometric-bg">
          <ElegantShape
              delay={0.3}
              width={600}
              height={140}
              rotate={12}
              gradient="rgba(16, 185, 129, 0.1)"
              className="shape-1"
          />

          <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient="rgba(245, 158, 11, 0.1)"
              className="shape-2"
          />

          <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient="rgba(20, 184, 166, 0.1)"
              className="shape-3"
          />

          <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={20}
              gradient="rgba(234, 179, 8, 0.1)"
              className="shape-4"
          />
      </div>

      <div className="hero-sticky-wrapper">
        <div className="hero-grid container">
          {/* Fixed Text Content */}
          <div className="hero-text-content">
            <motion.div 
              className="hero-subtitle-container"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-light">THE ART OF</span>
              <span className="text-accent"> CRAFTING </span>
              <span className="text-light">TIMELESS</span>
              <span className="text-accent"> SILK</span>
            </motion.div>
            
            <motion.h1 
              className="hero-main-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              ELEGANCE <br />
              WOVEN IN <br />
              <span className="italic-text">Tradition</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="hero-btn-primary">EXPLORE COLLECTION</button>
            </motion.div>
          </div>
          
          {/* Scroll-Triggered Image Side */}
          <div className="hero-visual-content">
            <motion.div 
              className="hero-image-wrapper"
              initial={{ 
                clipPath: "inset(100% 0% 0% 0%)",
                scale: 1.2,
                opacity: 0 
              }}
              animate={{ 
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
                opacity: 1 
              }}
              transition={{ 
                duration: 1.5, 
                ease: [0.19, 1, 0.22, 1], // Expo.easeOut
                delay: 0.2
              }}
            >
              <motion.div 
                className="landing-shape"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ width: "200%", height: "200%", opacity: 0.1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              {images.map((src, index) => (
                <ImageLayer 
                  key={src} 
                  src={src} 
                  index={index} 
                  progress={scrollYProgress} 
                  total={images.length}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageLayer = ({ src, index, progress, total }) => {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;
  const buffer = 0.05;

  let range, opacityValues;

  if (index === 0) {
    range = [0, end, end + buffer];
    opacityValues = [1, 1, 0];
  } else if (index === total - 1) {
    range = [start - buffer, start, 1];
    opacityValues = [0, 1, 1];
  } else {
    range = [start - buffer, start, end, end + buffer];
    opacityValues = [0, 1, 1, 0];
  }

  const safeRange = Array.from(new Set(range.map(v => Math.max(0, Math.min(1, v))))).sort((a, b) => a - b);
  const safeOpacityValues = safeRange.map(val => {
    if (index === 0 && val <= end) return 1;
    if (index === total - 1 && val >= start) return 1;
    if (val >= start && val <= end) return 1;
    return 0;
  });

  const opacity = useTransform(progress, safeRange, safeOpacityValues);
  const scale = useTransform(progress, [start, end], [1.05, 1.1]);

  return (
    <motion.img 
      src={src} 
      alt={`Hero variant ${index}`} 
      className="hero-main-img absolute-layer"
      style={{ 
        opacity,
        scale,
        zIndex: index + 1
      }}
    />
  );
};

export default HeroSection;
