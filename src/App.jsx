import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ParallaxCollection from './components/ParallaxCollection';
import ProductAutoScroll from './components/ProductAutoScroll';
import FeedbackSection from './components/FeedbackSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <main>
        <Navbar />
        <HeroSection />
        <ParallaxCollection />
        <ProductAutoScroll />
        <FeedbackSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
