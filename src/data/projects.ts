export interface ProjectStat {
  label: string;
  value: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  github?: string;
  demoUrl?: string;
  imageUrl: string;
  stats?: ProjectStat[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Home Land Management System',
    description: 'A comprehensive system developed during my first year of studies for managing home property listings and transactions.',
    category: 'academic',
    technologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
    github: 'https://github.com/IsurangaSilva/homeland-management',
    imageUrl: '/images/projects/ecommerce.svg',
    stats: [
      { label: 'User Experience', value: 85 },
      { label: 'Database Design', value: 80 },
      { label: 'Implementation', value: 88 },
      { label: 'Documentation', value: 90 }
    ]
  },
  {
    id: 2,
    title: 'Online Shopping System',
    description: 'A feature-rich e-commerce platform developed during my second year, implementing MVC architecture principles using Java.',
    category: 'academic',
    technologies: ['Java', 'MVC Architecture', 'MySQL', 'JSP', 'Servlets'],
    github: 'https://github.com/IsurangaSilva/online-shopping',
    imageUrl: '/images/projects/task-management.svg',
    stats: [
      { label: 'Architecture', value: 92 },
      { label: 'UI/UX', value: 85 },
      { label: 'Code Quality', value: 88 },
      { label: 'Performance', value: 86 }
    ]
  },
  {
    id: 3,
    title: 'Garbage Management System',
    description: 'A third-year project focused on optimizing waste collection and management using the MERN stack.',
    category: 'academic',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
    github: 'https://github.com/IsurangaSilva/garbage-management',
    imageUrl: '/images/projects/fitness-tracker.svg',
    stats: [
      { label: 'Innovation', value: 90 },
      { label: 'Scalability', value: 85 },
      { label: 'Implementation', value: 92 },
      { label: 'User Adoption', value: 88 }
    ]
  },
  {
    id: 4,
    title: 'Online Travel Planning System',
    description: 'A comprehensive travel planning platform built with the MERN stack for my 4th year project, allowing users to plan trips, book accommodations, and discover destinations.',
    category: 'academic',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
    github: 'https://github.com/IsurangaSilva/travel-planner',
    imageUrl: '/images/projects/smart-home.svg',
    stats: [
      { label: 'Feature Completeness', value: 94 },
      { label: 'User Experience', value: 90 },
      { label: 'Code Architecture', value: 88 },
      { label: 'Performance', value: 92 }
    ]
  },
  {
    id: 5,
    title: 'Advancements in Digital Healthcare Technologies',
    description: 'An ongoing research project (2024-Present) focused on investigating and developing cutting-edge digital healthcare solutions, including a voice companion using large language models.',
    category: 'research',
    technologies: ['AI/ML', 'Large Language Models', 'Healthcare Analytics', 'Voice Technology'],
    imageUrl: '/images/projects/ecommerce.svg',
    stats: [
      { label: 'Research Impact', value: 89 },
      { label: 'Innovation', value: 95 },
      { label: 'Technical Implementation', value: 87 },
      { label: 'Practical Applications', value: 92 }
    ]
  },
  {
    id: 6,
    title: 'Job Management Mobile Application',
    description: 'A mobile application for managing job listings, applications, and recruitment processes, built with native Android technologies.',
    category: 'mobile',
    technologies: ['Kotlin', 'Firebase', 'Android Studio', 'Material Design'],
    github: 'https://github.com/IsurangaSilva/job-manager-app',
    imageUrl: '/images/projects/task-management.svg',
    stats: [
      { label: 'App Performance', value: 93 },
      { label: 'User Interface', value: 90 },
      { label: 'Backend Integration', value: 88 },
      { label: 'Mobile Responsiveness', value: 95 }
    ]
  },
  {
    id: 7,
    title: 'E-commerce Delivery System',
    description: 'A professional project developed during my time at Ewis Company to streamline the delivery process for online orders.',
    category: 'professional',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Azure DevOps'],
    imageUrl: '/images/projects/ecommerce.svg',
    stats: [
      { label: 'Production Code Quality', value: 90 },
      { label: 'Performance', value: 88 },
      { label: 'API Integration', value: 92 },
      { label: 'Team Collaboration', value: 85 }
    ]
  },
];
