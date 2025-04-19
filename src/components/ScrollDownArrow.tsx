// src/components/ScrollDownArrow.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function ScrollDownArrow() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(false);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 text-[#FF6B35]"
      >
        <motion.div
          animate={{
            y: [0, 20, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "easeOut",
              bounce: 0.5
            }
          }}
          className="text-4xl cursor-pointer text-primary hover:text-primary/80 transition-colors"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          ↓
        </motion.div>
      </motion.div>
    );
  }

export default ScrollDownArrow;