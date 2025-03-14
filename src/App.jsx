import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import ThreeBackground from './components/ThreeBackground';
import ParallaxSection from './components/ParallaxSection';
import AnimatedCursor from './components/AnimatedCursor';
import ThreeHero from './components/ThreeHero';
import SkillsVisualization from './components/SkillsVisualization';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTopButton from './components/ScrollToTopButton';
import './components/animations.css';
import './components/cross-browser-fixes.css';
import { Suspense, lazy, useState, useEffect } from 'react';

// Import Three.js to ensure it's loaded before any components that use it
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Make Three.js available globally to avoid initialization issues
window.THREE = THREE;
window.OrbitControls = OrbitControls;

// Lazy load components that aren't needed for initial render
const LazySkillsVisualization = lazy(() => import('./components/SkillsVisualization'));
const LazyThreeHero = lazy(() => import('./components/ThreeHero'));
const LazyParallaxSection = lazy(() => import('./components/ParallaxSection'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Set loaded state after loading screen completes
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Store in session storage that the site has been loaded once
      sessionStorage.setItem('hasLoaded', 'true');
    }, 2500);
    
    // Check if this is the first load in this session
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setIsFirstLoad(false);
    }
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isFirstLoad && <LoadingScreen />}
      <AnimatedCursor />
      <ScrollToTopButton />
      <Layout>
        <div className="relative">
          <ThreeBackground />
          <HeroSection />
        </div>
        
        <Suspense fallback={<div className="h-[300px] flex items-center justify-center">Loading 3D content...</div>}>
          <LazyThreeHero />
        </Suspense>
        
        <SkillsSection />
        
        <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading skills visualization...</div>}>
          <LazySkillsVisualization />
        </Suspense>
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading parallax effects...</div>}>
          <LazyParallaxSection />
        </Suspense>
        
        <ExperienceSection />
        <EducationSection />
        <PortfolioSection />
        <ContactSection />
      </Layout>
    </>
  );
}

export default App;
