import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Sopra-Steria',
      position: 'Full-Stack Developer – AMS, Aeroline for Airbus Helicopter',
      period: '2022 - Present',
      responsibilities: [
        'Worked on 15+ projects with different PO and workflows',
        'Full-stack development using multiple major frameworks',
        'Led the industrialization efforts through scripting (Powershell) and tools like Docker, Husky, and Prettier',
        'Performance analysis & KPI\'s with SonarQube & Dynatrace',
        'Specifications and documentation using Jira and Confluence',
        'Collaborated within Agile teams for sprint planning and product delivery'
      ]
    },
    {
      company: 'Planet-Cards',
      position: 'Full-Stack Developer',
      period: '2021 - 2022',
      responsibilities: [
        'Developed a REST API using Symfony 6',
        'Enhanced and maintained an Angular application',
        'Built an Amazon store automated order generation tool',
        'Created a CI/CD pipeline from scratch using AWS'
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          className="relative pl-8 md:pl-0"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col md:flex-row mb-12 md:mb-24 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              variants={item}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-900 z-10"></div>
              
              {/* Timeline card */}
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg relative">
                  {/* Mobile timeline line and dot */}
                  <div className="md:hidden absolute top-0 left-0 h-full w-1 bg-blue-600 -ml-8"></div>
                  <div className="md:hidden absolute top-6 left-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-gray-900 -ml-10"></div>
                  
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-blue-900 mr-4">
                      <FaBriefcase className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-blue-400">{exp.period}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-4">{exp.position}</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                        <span className="text-gray-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
