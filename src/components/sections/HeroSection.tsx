'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

export function HeroSection() {
  // Animation for typing effect
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "IT Undergraduate & Web Developer";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);
  
  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  // Using direct animation values instead of variants

  return (
    <section className="relative h-screen flex items-center">
      {/* Animated background with particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ParticleBackground />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Hi, I&apos;m <span className="gradient-text">Isuranga Silva</span>
              </h1>
              
              <div className="h-12 mb-5">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex">
                  <span>{displayText}</span>
                  <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 inline-block w-2 h-8 bg-primary-500`}></span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                Passionate about crafting responsive and user-friendly web experiences using modern technologies. 
                Currently pursuing my Bachelor&apos;s degree in Information Technology.
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <a 
                  href="https://github.com/IsurangaSilva" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/isuranga-silva/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://research-website-henna.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Research Website"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="hidden sm:inline text-sm">Research</span>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.5, type: "spring", stiffness: 300 }
              }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[480px] lg:h-[480px] rounded-full flex items-center justify-center"
            >
              {/* Professional animated gradient background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  backgroundSize: ["200% 200%", "150% 150%", "200% 200%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary-500 via-primary-500 to-secondary-500 opacity-70"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 15, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              />
              
              {/* Enhanced professional glow effect */}
              <motion.div
                className="absolute -inset-5 rounded-full opacity-20 blur-xl"
                animate={{ 
                  background: [
                    'radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(0,0,0,0) 70%)',
                    'radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(0,0,0,0) 70%)',
                    'radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(0,0,0,0) 70%)'
                  ],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  background: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Enhanced profile image with professional animations */}
              <motion.div 
                className="absolute w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full overflow-hidden bg-white dark:bg-gray-900 border-[5px] border-white dark:border-gray-800"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.4, type: "spring", stiffness: 150 }
                }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(0, 0, 0, 0.1)", 
                    "0 10px 30px rgba(0, 0, 0, 0.15)", 
                    "0 0 0 rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 8, repeat: Infinity, ease: "easeInOut" } 
                }}
              >
                {/* Inner border with gradient animation */}
                <motion.div 
                  className="absolute inset-1 rounded-full border-2 border-primary-300/40 dark:border-primary-600/30 z-10"
                  animate={{ 
                    borderColor: ["rgba(147, 197, 253, 0.4)", "rgba(59, 130, 246, 0.4)", "rgba(147, 197, 253, 0.4)"]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              
                <Image 
                  src="/images/image.png"
                  alt="Isuranga Silva"
                  fill
                  className="object-cover scale-[1.02]"
                  priority
                />
                
                {/* Professional overlay animation with better gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/10"
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3],
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                  }}
                  transition={{ 
                    opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    backgroundPosition: { duration: 15, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                
                {/* Subtle vignette effect for depth */}
                <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
              </motion.div>
              
              {/* Professional animated accent elements */}
              <motion.div 
                className="absolute w-full h-full rounded-full"
                animate={{ rotate: [0, 360] }}
                transition={{ 
                  duration: 60, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
              >
                {/* Accent circles */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-primary-500 opacity-70"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-3 right-10 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-secondary-500 opacity-60"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div 
                  className="absolute top-10 -left-2 w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 rounded-full bg-primary-400 opacity-50"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </motion.div>
            </motion.div>
            
            {/* Floating pulse element with enhanced effects */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40"
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <motion.div 
                  className="absolute w-full h-full rounded-full bg-gradient-to-r from-secondary-500 to-primary-500"
                  animate={{ 
                    opacity: [0.6, 0.8, 0.6],
                    scale: [1, 1.05, 1],
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                    backgroundPosition: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                <motion.div
                  className="absolute w-full h-full rounded-full bg-white/10 backdrop-blur-sm"
                  animate={{ scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="relative z-10 text-white font-bold text-sm md:text-base p-2 text-center bg-gradient-to-br from-transparent to-black/10 backdrop-blur-sm rounded-full"
                  animate={{ textShadow: ["0 0 8px rgba(255,255,255,0.5)", "0 0 16px rgba(255,255,255,0.8)", "0 0 8px rgba(255,255,255,0.5)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="animate-float">Full Stack</p>
                  <p className="animate-float">Developer</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
