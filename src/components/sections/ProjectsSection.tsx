'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@/data/projects';
import { TechnologyIcon } from '@/components/ui/TechnologyIcon';
import { ProjectStats } from '@/components/ui/ProjectStats';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Define custom display names for categories
  const categoryDisplayNames = {
    'all': 'All Projects',
    'academic': 'Academic Projects',
    'research': 'Research Work',
    'mobile': 'Mobile Apps',
    'web': 'Web Applications',
    'professional': 'Professional Work'
  };
  
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-2 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore my recent work and projects that showcase my skills and expertise
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-400'
              }`}
            >
              {categoryDisplayNames[category as keyof typeof categoryDisplayNames] || category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-dark-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Project Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-dark-400">
                {project.category === 'academic' && project.id <= 4 && (
                  <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 z-10">
                    {project.id === 1 ? '1st Year' : 
                     project.id === 2 ? '2nd Year' : 
                     project.id === 3 ? '3rd Year' : '4th Year'}
                  </div>
                )}
                {project.category === 'research' && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 z-10">
                    2024 - Present
                  </div>
                )}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/50 to-secondary-500/50 opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-white/90 rounded-full text-primary-600 hover:text-primary-800 transform hover:scale-110 transition-all"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-white/90 rounded-full text-primary-600 hover:text-primary-800 transform hover:scale-110 transition-all"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
                
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 dark:bg-dark-400 text-gray-700 dark:text-gray-300 rounded">
                      <TechnologyIcon name={tech} size="sm" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                {project.stats && activeProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project Metrics</h4>
                    <ProjectStats projectStats={project.stats} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
