import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = () => {
  const education = [
    {
      institution: 'G4 INSTITUTE',
      period: '2021 - 2024',
      degrees: [
        "Master's Degree in IT Project Management (RNCP Level 7)",
        "Bachelor's Degree in Application Development (RNCP Level 6)"
      ]
    },
    {
      institution: 'CHARLES PEGUY',
      period: '2019 - 2021',
      degrees: [
        "Associate Degree in IT Services for Organizations – Software Solutions for Applications (BTS SIO, SLAM)"
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
              variants={item}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-900 mr-4">
                  <FaGraduationCap className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <p className="text-blue-400">{edu.period}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {edu.degrees.map((degree, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                    <span className="text-gray-300">{degree}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
