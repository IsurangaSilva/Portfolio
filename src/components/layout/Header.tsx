'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

const navItems = [
  { name: 'Home', href: '/', sectionId: 'home' },
  { name: 'About', href: '/#about', sectionId: 'about' },
  { name: 'Projects', href: '/#projects', sectionId: 'projects' },
  { name: 'Skills', href: '/#skills', sectionId: 'skills' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (href: string, sectionId: string) => {
    // For pages other than homepage
    if (!pathname.startsWith('/') || pathname !== '/') {
      return pathname === href;
    }
    
    // For homepage sections
    if (pathname === '/' && sectionId === activeSection) {
      return true;
    }
    
    // For homepage when no section is active yet
    if (pathname === '/' && sectionId === 'home' && !activeSection) {
      return true;
    }
    
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/90 dark:bg-dark-100/90 backdrop-blur-md shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-sm md:text-base">IS</div>
            <span className="font-bold text-xl md:text-2xl gradient-text">Isuranga</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 transition px-1 py-2 ${
                  isActive(item.href, item.sectionId) 
                    ? 'text-primary-600 dark:text-primary-400 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-primary-500 after:to-secondary-500' 
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white transition shadow-md hover:shadow-lg text-sm font-medium"
            >
              Resume
            </Link>
          </div>
        </motion.nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-300 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-dark-200/95 backdrop-blur-sm shadow-lg border-t border-gray-200 dark:border-dark-300 overflow-hidden"
          >
            <nav className="container-custom py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium text-gray-800 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400 py-2 px-3 rounded-lg transition-colors ${
                    isActive(item.href, item.sectionId) ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-2 border-t border-gray-200 dark:border-dark-300">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block px-5 py-2 mt-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white transition shadow-md hover:shadow-lg text-sm font-medium"
                >
                  View Resume
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
