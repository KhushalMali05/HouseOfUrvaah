import React from 'react';
import { motion } from 'framer-motion';
import './SignatureSeries.css';

const signatureScenes = [
  { id: 1, title: "Emerald Royal Silk", img: "/assets/scenes/scene12.png" },
  { id: 2, title: "Teal Heritage Drape", img: "/assets/scenes/scene14.png" },
  { id: 3, title: "Royal Temple Weave", img: "/assets/scenes/scene1.png" },
  { id: 4, title: "Mint Zari Elegance", img: "/assets/scenes/scene13.png" },
  { id: 5, title: "Midnight Black Grace", img: "/assets/scenes/scene3.png" },
  { id: 6, title: "Champagne Silk Luxe", img: "/assets/scenes/scene11.png" },
  { id: 7, title: "Classic Banarasi Royale", img: "/assets/scenes/scene8.png" },
  { id: 8, title: "Azure Bridal Collection", img: "/assets/scenes/scene2.png" },
];

const SignatureSeries = () => {
  return (
    <section className="signature-series">
      <div className="signature-header container">
        <motion.span 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          COLLECTORS CHOICE
        </motion.span>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          THE SIGNATURE <span className="italic-accent">Series</span>
        </motion.h2>
      </div>

      <div className="signature-grid">
        {signatureScenes.map((scene) => (
          <div key={scene.id} className="scene-container">
            <motion.div 
              className="scene"
              initial="inactive"
              whileInView="active"
              viewport={{ once: false, amount: 0.3 }}
            >
              <img src={scene.img} className="bg" alt={scene.title} />
              <motion.div 
                className="content"
                variants={{
                  inactive: { opacity: 0, y: 40 },
                  active: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1>{scene.title}</h1>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SignatureSeries;
