import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Portfolio project placeholders
  const projects = [
    {
      id: 1,
      title: 'REST API with Symfony 6',
      category: 'backend',
      image: 'placeholder-dark-blue.jpg',
      tags: ['Symfony', 'PHP', 'REST API']
    },
    {
      id: 2,
      title: 'Angular E-commerce Dashboard',
      category: 'frontend',
      image: 'placeholder-dark-red.jpg',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      id: 3,
      title: 'Amazon Order Automation',
      category: 'automation',
      image: 'placeholder-dark-orange.jpg',
      tags: ['AWS', 'Automation', 'API Integration']
    },
    {
      id: 4,
      title: 'CI/CD Pipeline with AWS',
      category: 'devops',
      image: 'placeholder-dark-green.jpg',
      tags: ['AWS', 'CI/CD', 'DevOps']
    },
    {
      id: 5,
      title: 'React Dashboard Application',
      category: 'frontend',
      image: 'placeholder-dark-cyan.jpg',
      tags: ['React', 'JavaScript', 'Tailwind CSS']
    },
    {
      id: 6,
      title: 'Docker Containerization Project',
      category: 'devops',
      image: 'placeholder-dark-purple.jpg',
      tags: ['Docker', 'Kubernetes', 'DevOps']
    }
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'DevOps', value: 'devops' },
    { name: 'Automation', value: 'automation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Generate a placeholder color based on project id
  const getPlaceholderColor = (id) => {
    const colors = [
      'from-blue-600 to-blue-800',
      'from-red-600 to-red-800',
      'from-orange-600 to-orange-800',
      'from-green-600 to-green-800',
      'from-cyan-600 to-cyan-800',
      'from-purple-600 to-purple-800'
    ];
    return colors[(id - 1) % colors.length];
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project demonstrates different aspects of my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Placeholder for project image */}
              <div className={`h-48 bg-gradient-to-br ${getPlaceholderColor(project.id)} flex items-center justify-center`}>
                <span className="text-white text-lg font-medium">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                  In hac habitasse platea dictumst.
                </p>
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
