import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const titlePart = "HOUSE OF";
  const brandPart = "URVAAH";

  const letterVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="splash-screen-premium"
      initial={{ opacity: 1 }}
      exit={{
        clipPath: "inset(0 0 100% 0)",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="splash-bg-texture"></div>
      <div className="splash-vignette"></div>

      <div className="splash-content">
        <motion.div
          className="splash-emblem-wrapper"
          initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="splash-emblem-inner">
            <span className="emblem-char">U</span>
            <div className="emblem-ring"></div>
            <div className="emblem-glow"></div>
          </div>
        </motion.div>

        <div className="splash-title-premium-stack">
          {/* HOUSE OF */}
          <div className="title-row top-row">
            {titlePart.split("").map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                transition={{
                  delay: 0.8 + (i * 0.05),
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="title-letter-large"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          {/* URVAAH */}
          <div className="title-row bottom-row">
            {brandPart.split("").map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                transition={{
                  delay: 1.2 + (i * 0.08),
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="brand-letter-large"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="splash-divider-premium"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
        ></motion.div>

        <motion.p
          className="splash-tagline-premium"
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 0.8, letterSpacing: "0.8em" }}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          HERITAGE & ELEGANCE
        </motion.p>
      </div>

      <div className="splash-footer">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 3 }}
        >

        </motion.span>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
