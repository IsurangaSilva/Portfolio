'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { TechnologyIcon } from '@/components/ui/TechnologyIcon';
import { FaFilePdf } from 'react-icons/fa';

// Featured technologies to showcase with large icons
const featuredTechnologies = [
  'React', 
  'Next.js',
  'Node.js',
  'TypeScript',
  'Tailwind CSS',
  'MongoDB'
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-200">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-2 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            These are the technologies I work with on a regular basis
          </p>
          <a 
            href="/documents/Isuranga 3.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaFilePdf className="text-lg" />
            <span>View My Resume</span>
          </a>
        </motion.div>
        
        {/* Featured Technologies */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl font-bold mb-12 text-center gradient-text"
          >
            Featured Technologies
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {featuredTechnologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.15 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="p-8 bg-white dark:bg-dark-300 rounded-xl shadow-lg">
                  <TechnologyIcon name={tech} size="3xl" />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          {skills.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-dark-300 rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-center gradient-text">{category.name}</h3>
              <div className="grid grid-cols-2 gap-6">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex flex-col items-center gap-3 p-4 bg-gray-50 dark:bg-dark-400 rounded-lg hover:shadow-lg transition-all"
                  >
                    <TechnologyIcon name={skill} size="xl" />
                    <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Skills Section with Skill Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Advanced Proficiencies</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies I've mastered through extensive experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.flatMap(category => 
            category.advanced?.map((skill, index) => (
              <motion.div 
                key={`${category.name}-${skill.name}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-300 rounded-xl p-6 shadow-md space-y-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <TechnologyIcon name={skill.name} size="lg" />
                    <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">{skill.level}%</span>
                </div>
                <div className="w-full h-4 bg-gray-200 dark:bg-dark-400 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
