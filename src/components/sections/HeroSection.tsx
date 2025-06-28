'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30 dark:opacity-20 pointer-events-none">
        {/* Main gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 dark:bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 dark:bg-secondary-500/10 rounded-full filter blur-3xl animate-float" />
        
        {/* Additional visual elements */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent/30 rounded-full filter blur-xl animate-spin-slow" />
        <div className="absolute bottom-1/3 left-2/3 w-32 h-32 bg-primary-300/20 dark:bg-primary-700/20 rounded-full filter blur-xl" />
        
        {/* Grid background for texture */}
        <div className="absolute inset-0 grid-bg opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary-100/60 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium">
              Welcome to my portfolio
            </div>
            
            <h1 className="heading-1 mb-4">
              Hi, I&apos;m <span className="animated-gradient-text">Isuranga</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300 font-light">
              Professional Web Developer
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
              I design and develop beautiful, high-performance web applications with a focus on user 
              experience and modern technologies. <span className="text-black dark:text-white font-medium">Passionate about creating digital solutions that make a difference.</span>
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link 
                href="/#projects"
                className="group px-8 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-medium transition shadow-md hover:shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 flex items-center gap-2"
              >
                <span>View My Work</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-3 rounded-lg bg-white dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 text-gray-800 dark:text-gray-200 font-medium transition shadow-md hover:shadow-lg border border-gray-200 dark:border-dark-500 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Get In Touch</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-1 mt-10">
              <div className="h-px bg-gray-300 dark:bg-dark-500 w-12"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400 px-4">Follow me on</span>
              <div className="h-px bg-gray-300 dark:bg-dark-500 w-12"></div>
            </div>
            
            <div className="flex gap-5 mt-5">
              <a 
                href="https://github.com/isuranga" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full text-gray-700 hover:text-white dark:text-gray-300 dark:hover:text-white bg-gray-100 dark:bg-dark-300 hover:bg-primary-600 dark:hover:bg-primary-600 transition-all hover:-translate-y-1"
              >
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/isuranga" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full text-gray-700 hover:text-white dark:text-gray-300 dark:hover:text-white bg-gray-100 dark:bg-dark-300 hover:bg-primary-600 dark:hover:bg-primary-600 transition-all hover:-translate-y-1"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>
          
          {/* Image with tech orbit */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Main profile image */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-dark-400 shadow-xl glow">
                <Image 
                  src="/images/image.png" 
                  alt="Isuranga - Professional Web Developer"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 dark:bg-yellow-600 rounded-full shadow-lg animate-float"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-blue-400 dark:bg-blue-600 rounded-full shadow-lg animate-pulse-slow"></div>
              </div>
              
              {/* Orbiting tech icons */}
              <div className="absolute inset-0 -m-12 md:-m-24 animate-spin-slow">
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white dark:bg-dark-300 p-2 md:p-3 rounded-full shadow-lg">
                  <div className="relative w-6 h-6 md:w-8 md:h-8 overflow-hidden">
                    <Image 
                      src="/images/tech/react.svg" 
                      alt="React"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white dark:bg-dark-300 p-2 md:p-3 rounded-full shadow-lg">
                  <div className="relative w-6 h-6 md:w-8 md:h-8 overflow-hidden">
                    <Image 
                      src="/images/tech/next.svg" 
                      alt="Next.js"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white dark:bg-dark-300 p-2 md:p-3 rounded-full shadow-lg">
                  <div className="relative w-6 h-6 md:w-8 md:h-8 overflow-hidden">
                    <Image 
                      src="/images/tech/tailwind.svg" 
                      alt="Tailwind CSS"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white dark:bg-dark-300 p-2 md:p-3 rounded-full shadow-lg">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">TS</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
