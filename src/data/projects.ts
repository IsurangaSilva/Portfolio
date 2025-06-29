export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  github?: string;
  demoUrl?: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Garbage Management System',
    description: 'A comprehensive project focused on optimizing waste collection and management using the MERN stack with real-time tracking and scheduling capabilities.',
    category: 'academic',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
    github: 'https://github.com/IT3040-ITPM-2024-Feb/IT3040-EcoLite-Garbage-Collection-System',
    imageUrl: '/images/projects/fitness-tracker.svg'
  },
  {
    id: 2,
    title: 'Advancements in Digital Healthcare Technologies',
    description: 'An ongoing research project (2024-Present) focused on investigating and developing cutting-edge digital healthcare solutions, including a voice companion using large language models.',
    category: 'research',
    technologies: ['AI/ML', 'Large Language Models', 'Healthcare Analytics', 'Voice Technology'],
    github: 'https://github.com/IsurangaSilva/Advancements-in-Digital-Healthcare-Technologies',
    imageUrl: '/images/projects/ecommerce.svg'
  },
  {
    id: 3,
    title: 'Job Management Mobile Application',
    description: 'A mobile application for managing job listings, applications, and recruitment processes, built with native Android technologies for an intuitive user experience.',
    category: 'mobile',
    technologies: ['Kotlin', 'Firebase', 'Android Studio', 'Material Design'],
    github: 'https://github.com/IsurangaSilva/Job-Application',
    imageUrl: '/images/projects/task-management.svg'
  }
];
