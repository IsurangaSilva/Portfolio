'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export function AboutSection() {
  const highlights = [
    'MERN Stack development expertise',
    'Specializing in React and Next.js',
    'Full-stack development capabilities',
    'Strong focus on responsive design',
    'Research experience in web technologies',
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50 dark:bg-dark-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200/20 dark:bg-primary-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary-200/20 dark:bg-secondary-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-200/30 dark:bg-dark-300/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-100/60 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium">
              Who I Am
            </div>
            <h2 className="heading-2 mb-6">About Me</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Get to know more about me and my professional journey in web development
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image 
                src="/img.jpg" 
                alt="Isuranga - About Me"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 opacity-30" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-primary-500 rounded-2xl z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-secondary-500 rounded-2xl z-[-1]"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Professional Web Developer with a passion for creating <span className="gradient-text">beautiful experiences</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am Isuranga, a passionate web developer currently pursuing my Bachelor's degree in Information Technology 
              at Sri Lanka Institute of Information Technology. I specialize in building responsive web applications 
              using modern technologies like React, Next.js, and the MERN stack.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              My journey in web development began during my studies, and I've strengthened my skills through professional experience 
              at Ewis Company where I worked on real-world applications. I'm particularly interested in creating 
              user-friendly interfaces and robust backend systems that deliver seamless experiences.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircleIcon className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
