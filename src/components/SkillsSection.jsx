import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaSymfony, FaAngular, FaFigma, FaDocker, FaGit, FaJira } from 'react-icons/fa';
import { SiGooglesheets, SiSonarqube, SiMicrosoftteams, SiGoogledatastudio } from 'react-icons/si';

const SkillsSection = () => {
  const frameworks = [
    { name: 'React', icon: <FaReact size={48} className="text-blue-400" />, level: 90 },
    { name: 'Symfony', icon: <FaSymfony size={48} className="text-gray-200" />, level: 85 },
    { name: 'Angular', icon: <FaAngular size={48} className="text-red-500" />, level: 80 },
  ];

  const tools = [
    { name: 'Figma', icon: <FaFigma size={36} className="text-purple-400" />, level: 75 },
    { name: 'Google Sheets', icon: <SiGooglesheets size={36} className="text-green-500" />, level: 85 },
    { name: 'Docker', icon: <FaDocker size={36} className="text-blue-500" />, level: 90 },
    { name: 'Data Studio', icon: <SiGoogledatastudio size={36} className="text-yellow-500" />, level: 80 },
    { name: 'SonarQube', icon: <SiSonarqube size={36} className="text-blue-300" />, level: 75 },
    { name: 'Jira', icon: <FaJira size={36} className="text-blue-600" />, level: 85 },
    { name: 'Git', icon: <FaGit size={36} className="text-orange-500" />, level: 95 },
    { name: 'Teams', icon: <SiMicrosoftteams size={36} className="text-blue-500" />, level: 80 },
  ];

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

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Frameworks</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {frameworks.map((framework, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900 rounded-lg p-6 shadow-lg"
                variants={item}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">{framework.icon}</div>
                  <h4 className="text-xl font-bold mb-4">{framework.name}</h4>
                  <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                    <div 
                      className="bg-blue-600 h-4 rounded-full" 
                      style={{ width: `${framework.level}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-400">{framework.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Tools</h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900 rounded-lg p-4 shadow-lg"
                variants={item}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3">{tool.icon}</div>
                  <h4 className="text-lg font-bold mb-3">{tool.name}</h4>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <div 
                      className="bg-blue-600 h-3 rounded-full" 
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
