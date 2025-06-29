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
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            initial={{ letterSpacing: "0px", opacity: 0.8 }}
            whileInView={{ letterSpacing: "1px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="heading-2 mb-4 gradient-text text-3xl font-bold"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            These are the technologies I work with on a regular basis
          </motion.p>
        </motion.div>
        
        {/* Technology Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg border-t-4 border-primary-500"
            >
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.6 }}
                className="text-xl font-bold mb-6 text-center gradient-text"
              >
                {category.name}
              </motion.h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"
              ></motion.div>
              <div className="grid grid-cols-2 gap-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.4 + skillIndex * 0.1 + categoryIndex * 0.05, 
                      duration: 0.5 
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      rotateY: 5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      transition: { type: "spring", stiffness: 400, damping: 15 }
                    }}
                    className="flex flex-col items-center gap-3 p-5 bg-gray-50 dark:bg-dark-400 rounded-lg hover:shadow-lg transition-all"
                  >
                    <motion.div 
                      whileHover={{ 
                        rotate: [0, -5, 5, -5, 5, 0],
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                      }}
                      transition={{ duration: 0.6 }}
                      className="p-4 bg-white dark:bg-dark-300 rounded-lg shadow-md relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <TechnologyIcon name={skill} size="xxl" />
                    </motion.div>
                    <motion.span 
                      initial={{ y: 5, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      className="font-medium text-center text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Skills Section with Skill Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring", 
            stiffness: 100,
            damping: 15
          }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-bold mb-4 gradient-text"
            >
              Technical Proficiencies
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"
            ></motion.div>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 dark:text-gray-400"
            >
              Technologies I&apos;ve learned and applied in my projects
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {skills.flatMap(category => 
            category.advanced?.map((skill, index) => (
              <motion.div 
                key={`${category.name}-${skill.name}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                className="bg-white dark:bg-dark-300 rounded-xl p-7 shadow-lg space-y-5 border-b-4 border-primary-500"
              >
                <div className="flex justify-between items-center">
                  <motion.div 
                    className="flex items-center gap-4"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-gray-50 to-white dark:from-dark-400 dark:to-dark-300 rounded-lg shadow-md relative overflow-hidden"
                      whileHover={{ 
                        rotate: [0, -3, 3, -3, 3, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/10 opacity-0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <TechnologyIcon name={skill.name} size="xl" />
                    </motion.div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{skill.name}</span>
                  </motion.div>
                  <motion.span 
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="text-primary-600 dark:text-primary-400 font-bold text-lg px-3 py-1 bg-primary-50 dark:bg-primary-900/20 rounded-full"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full h-5 bg-gray-200 dark:bg-dark-400 rounded-full overflow-hidden p-1">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 bottom-0 w-4 bg-white/30"
                      animate={{ 
                        x: [10, -5, 10],
                        opacity: [0, 1, 0] 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                    />
                  </motion.div>
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
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 mt-24"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
            My academic background and certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 0.1 
            }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg border-l-4 border-primary-500"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">BACHELOR&apos;S INFORMATION TECHNOLOGY</h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">(2021 - PRESENT)</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Sri Lanka Institute of Information Technology</p>
              <div className="mt-auto">
                <div className="w-16 h-1 bg-primary-500 mt-6 mb-4"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg border-r-4 border-secondary-500"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="absolute -bottom-2 right-0 h-0.5 bg-gradient-to-l from-secondary-500 to-transparent"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">WEB DESIGN CERTIFICATE</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">UNIVERSITY OF MORATUWA</p>
              <div className="mt-auto">
                <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mt-6 mb-4"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 0.3 
            }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              y: -10,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg border-l-4 border-primary-500 relative overflow-hidden"
          >
            <motion.div
              className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500 opacity-10 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            />
            <div className="flex flex-col h-full">
              <div className="mb-4 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"
                />
                <motion.h3 
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl font-bold text-gray-800 dark:text-gray-100"
                >
                  G.C.E ADVANCED LEVEL
                </motion.h3>
              </div>
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-gray-600 dark:text-gray-400 mb-2"
              >
                MARIS STELLA COLLEGE THIMBRIGASKATUWA
              </motion.p>
              <div className="mt-auto">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "64px" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mt-6 mb-4"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 0.4 
            }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              y: -10,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg border-b-4 border-secondary-500 relative overflow-hidden"
          >
            <motion.div
              className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary-500 opacity-10 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            />
            <div className="flex flex-col h-full">
              <div className="mb-4 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-2 right-0 h-0.5 bg-gradient-to-l from-secondary-500 to-transparent"
                />
                <motion.h3 
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl font-bold text-gray-800 dark:text-gray-100"
                >
                  G.C.E ORDINARY LEVEL
                </motion.h3>
              </div>
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-gray-600 dark:text-gray-400 mb-2"
              >
                ST JUDE&apos;S COLLEGE NEGOMBO
              </motion.p>
              <div className="mt-auto">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "64px" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mt-6 mb-4"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15 
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -8px rgba(0, 0, 0, 0.1)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="bg-white dark:bg-dark-300 rounded-xl p-8 shadow-lg border-l-4 border-secondary-500"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">Web Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Ewis Company</p>
              </motion.div>
              <motion.p 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-primary-600 dark:text-primary-400 font-semibold mt-2 md:mt-0 bg-primary-50 dark:bg-primary-900/20 px-4 py-1 rounded-full"
              >
                25/04/2023 - 25/10/2023
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-start">
                <div className="min-w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mt-1 mr-3 flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Improved problem-solving and learned more about software development.
                </p>
              </div>
              <div className="flex items-start">
                <div className="min-w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mt-1 mr-3 flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Used ReactJS, NodeJS, MongoDB, ExpressJS, and Azure DevOps.
                </p>
              </div>
              <div className="flex items-start">
                <div className="min-w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mt-1 mr-3 flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Built and fixed the Add Delivery Page (frontend and backend)
                </p>
              </div>
            </motion.div>
            
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
