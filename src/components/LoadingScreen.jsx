import React, { useState, useEffect } from 'react';
import '../components/animations.css';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${loading ? '' : 'loaded'}`}>
      <div className="loading-spinner"></div>
      <h2 className="text-white text-2xl font-bold">Yohan Chapuis</h2>
      <p className="text-blue-400 mt-2">Full-Stack Developer</p>
    </div>
  );
};

export default LoadingScreen;
