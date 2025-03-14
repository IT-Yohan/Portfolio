import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

// Main layout component with mobile app-like interface
const Layout = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items for bottom bar on mobile
  const navItems = [
    { id: 'home', icon: <FaHome size={24} />, label: 'Home' },
    { id: 'about', icon: <FaUser size={24} />, label: 'About' },
    { id: 'skills', icon: <FaCode size={24} />, label: 'Skills' },
    { id: 'experience', icon: <FaBriefcase size={24} />, label: 'Work' },
    { id: 'education', icon: <FaGraduationCap size={24} />, label: 'Education' },
    { id: 'contact', icon: <FaEnvelope size={24} />, label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white mobile-container">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-80 backdrop-blur-sm z-50 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">IT-Yohan</div>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20 pb-24 md:pt-24 md:pb-12">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden bottom-nav">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveSection(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full ${
              activeSection === item.id ? 'text-blue-400' : 'text-gray-400'
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Layout;
