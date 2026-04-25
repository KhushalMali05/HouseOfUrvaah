import React from 'react';
import { motion } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div 
      className="product-card"
      whileHover={{ 
        scale: 1.05, 
        rotateY: index % 2 === 0 ? -10 : 10,
        z: 50
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button className="quick-view-btn">Quick View</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
