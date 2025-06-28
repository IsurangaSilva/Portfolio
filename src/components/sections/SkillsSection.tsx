'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { TechnologyIcon } from '@/components/ui/TechnologyIcon';

// Featured technologies have been integrated into the main skills categories

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
          <p className="text-lg text-gray-600 dark:text-gray-400">
            These are the technologies I work with on a regular basis
          </p>
        </motion.div>
        
        {/* Technology Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {skills.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-8 text-center gradient-text">{category.name}</h3>
              <div className="w-16 h-1 bg-primary-500 mx-auto mb-8"></div>
              <div className="grid grid-cols-2 gap-6">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex flex-col items-center gap-3 p-5 bg-gray-50 dark:bg-dark-400 rounded-lg hover:shadow-lg transition-all"
                  >
                    <div className="p-4 bg-white dark:bg-dark-300 rounded-lg shadow-md">
                      <TechnologyIcon name={skill} size="xxl" />
                    </div>
                    <span className="font-medium text-center text-gray-700 dark:text-gray-300">{skill}</span>
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
          <h2 className="text-2xl font-bold mb-4">Technical Proficiencies</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies I've learned and applied in my projects
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
                className="bg-white dark:bg-dark-300 rounded-xl p-7 shadow-lg space-y-5"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white dark:bg-dark-300 rounded-lg shadow-md">
                      <TechnologyIcon name={skill.name} size="xl" />
                    </div>
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

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 mt-24"
        >
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            My academic background and certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">BACHELOR'S INFORMATION TECHNOLOGY</h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">(2021 - PRESENT)</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Sri Lanka Institute of Information Technology</p>
              <div className="mt-auto">
                <div className="w-16 h-1 bg-primary-500 mt-6 mb-4"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">WEB DESIGN CERTIFICATE</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">UNIVERSITY OF MORATUWA</p>
              <div className="mt-auto">
                <div className="w-16 h-1 bg-primary-500 mt-6 mb-4"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">G.C.E ADVANCED LEVEL</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">MARIS STELLA COLLEGE THIMBRIGASKATUWA</p>
              <div className="mt-auto">
                <div className="w-16 h-1 bg-primary-500 mt-6 mb-4"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">G.C.E ORDINARY LEVEL</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">ST JUDE'S COLLEGE NEGOMBO</p>
              <div className="mt-auto">
                <div className="w-16 h-1 bg-primary-500 mt-6 mb-4"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Web Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Ewis Company</p>
              </div>
              <p className="text-primary-600 dark:text-primary-400 font-semibold mt-2 md:mt-0">25/04/2023 - 25/10/2023</p>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                Improved problem-solving and learned more about software development.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Used ReactJS, NodeJS, MongoDB, ExpressJS, and Azure DevOps.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Built and fixed the Add Delivery Page (frontend and backend)
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS', 'Azure DevOps'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-dark-400 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
