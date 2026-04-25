import React from 'react';
import { motion } from 'framer-motion';
import './ProductAutoScroll.css';

const products = [
  { id: 1, name: "Royal Banarasi Silk", price: "₹24,500", img: "/assets/scenes/scene1.png" },
  { id: 2, name: "Midnight Velvet Saree", price: "₹18,900", img: "/assets/scenes/scene2.png" },
  { id: 3, name: "Emerald Heritage Zari", price: "₹32,000", img: "/assets/scenes/scene3.png" },
  { id: 4, name: "Champagne Blush Organza", price: "₹15,600", img: "/assets/scenes/scene4.png" },
  { id: 5, name: "Oceanic Blue Kanjeevaram", price: "₹28,400", img: "/assets/scenes/scene5.png" },
  { id: 6, name: "Golden Bloom Tissue", price: "₹21,000", img: "/assets/scenes/scene6.png" },
  { id: 7, name: "Ruby Red Wedding Edit", price: "₹45,000", img: "/assets/scenes/scene7.png" },
  { id: 8, name: "Teal Grace Chiffon", price: "₹12,800", img: "/assets/scenes/scene8.png" },
  { id: 9, name: "Ivory Pearl Collection", price: "₹19,500", img: "/assets/scenes/scene9.png" },
  { id: 10, name: "Sunset Gold Banarasi", price: "₹26,000", img: "/assets/scenes/scene10.png" },
];

const ProductAutoScroll = () => {
  // Double the products to create a seamless infinite loop
  const loopProducts = [...products, ...products];

  return (
    <section className="product-autoscroll-container">
      <div className="autoscroll-header">
        <h2 className="autoscroll-title">SHOP THE LOOK</h2>
      </div>

      <div className="autoscroll-viewport">
        <motion.div 
          className="autoscroll-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Adjust speed here
              ease: "linear",
            },
          }}
        >
          {loopProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="product-item-card">
              <div className="product-img-wrapper">
                <div className="product-discount-banner">
                  10% OFF ON FIRST ORDER
                </div>
                <img src={product.img} alt={product.name} className="product-scroll-img" />
                <div className="product-quick-view">
                  <span>QUICK VIEW</span>
                </div>
              </div>
              <div className="product-info-minimal">
                <h3 className="product-scroll-name">{product.name}</h3>
                <p className="product-scroll-price">{product.price}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductAutoScroll;
