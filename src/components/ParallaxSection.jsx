import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900 z-0"></div>
      
      {/* Parallax layers */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{ y: y1, opacity }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 z-20"
        style={{ y: y2, opacity }}
      >
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyan-500 rounded-full opacity-30 blur-lg"></div>
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-indigo-500 rounded-full opacity-30 blur-lg"></div>
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 z-30"
        style={{ y: y3 }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-40">
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative Solutions
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-blue-200 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bringing technical expertise and creative problem-solving to every project
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
