import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductCard from './ProductCard';
import './FeaturedCollection.css';

const products = [
  { id: 1, name: "Emerald Silk Veda", price: "₹45,000", image: "/assets/hero.png" },
  { id: 2, name: "Golden Aura Banarasi", price: "₹38,000", image: "/assets/product1.png" },
  { id: 3, name: "Terracotta Earth", price: "₹29,000", image: "/assets/product2.png" },
  { id: 4, name: "Ivory Mist", price: "₹32,000", image: "/assets/product3.png" },
  { id: 5, name: "Midnight Forest", price: "₹42,000", image: "/assets/hero.png" },
];

const FeaturedCollection = () => {
  const containerRef = useRef(null);
  
  return (
    <section id="collections" className="featured-collection section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Exquisite Craftsmanship</span>
          <h2 className="section-title">The Urvaah Edit</h2>
        </div>
        
        <div className="carousel-wrapper">
          <motion.div 
            className="carousel-container"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
          >
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
