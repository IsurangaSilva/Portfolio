'use client';

import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', selector: 'section:first-of-type' },
        { id: 'about', selector: '#about' },
        { id: 'projects', selector: '#projects' },
        { id: 'skills', selector: '#skills' },
        { id: 'contact', selector: '#contact' }
      ];
      
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly earlier
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i].selector);
        if (!section) continue;
        
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        
        if (scrollPosition >= sectionTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set the active section on page load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return activeSection;
}
