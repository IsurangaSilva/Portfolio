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
    imageUrl: '/images/projects/s2.png'
  },
  {
    id: 2,
    title: 'Advancements in Digital Healthcare Technologies',
    description: 'An ongoing research project (2024-Present) focused on investigating and developing cutting-edge digital healthcare solutions, including a voice companion using large language models.',
    category: 'research',
    technologies: ['AI/ML', 'Large Language Models', 'Healthcare Analytics', 'Voice Technology'],
    github: 'https://github.com/IsurangaSilva/Advancements-in-Digital-Healthcare-Technologies',
    imageUrl: '/images/projects/s7.png'
  },
  {
    id: 3,
    title: 'Job Management Mobile Application',
    description: 'A mobile application for managing job listings, applications, and recruitment processes, built with native Android technologies for an intuitive user experience.',
    category: 'mobile',
    technologies: ['Kotlin', 'Firebase', 'Android Studio', 'Material Design'],
    github: 'https://github.com/IsurangaSilva/Job-Application',
    imageUrl: '/images/projects/s5.jpeg'
  },
  {
    id: 4,
    title: 'Fitness App',
    description: 'A modern fitness application featuring workout tracking, nutrition planning, and progress analytics with a responsive design and secure user authentication.',
    category: 'web',
    technologies: ['React', 'Spring Boot', 'MySQL', 'RESTful APIs', 'JWT', 'Bootstrap'],
    github: 'https://github.com/PAF-IT3030/paf-assignment-2024-jun_we_90_team',
    imageUrl: '/images/projects/s3.png'
  },
  {
    id: 5,
    title: 'CAD Center System',
    description: 'A comprehensive Computer-Aided Design center management system that streamlines project workflows, resource allocation, and client management using the MERN stack.',
    category: 'web',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Material UI', 'RESTful APIs'],
    github: 'https://github.com/EWIS-ECTC-KANDY/CADD-NEW-SYSTEM',
    imageUrl: '/images/projects/s4.jpg'
  },
  {
    id: 6,
    title: 'Academic Research Website',
    description: 'A modern research website built with Next.js that showcases academic publications, ongoing research projects, and facilitates collaboration between researchers with interactive data visualizations.',
    category: 'research',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/dananjayahbi/research-website',
    demoUrl: 'https://research-website-henna.vercel.app/',
    imageUrl: '/images/projects/s1.png'
  },
  {
    id: 7,
    title: 'Travel Planning System',
    description: 'A feature-rich travel planning platform that allows users to discover destinations, plan itineraries, book accommodations, and share travel experiences with an interactive map integration.',
    category: 'web',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'Google Maps API', 'JWT'],
    github: 'https://github.com/IsurangaSilva/Travel-Planning-System',
    imageUrl: '/images/projects/s6.jpg'
  }
];
