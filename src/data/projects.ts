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
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, and secure checkout process.',
    category: 'web',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/isuranga/ecommerce-platform',
    demoUrl: 'https://ecommerce-demo.isuranga.com',
    imageUrl: '/images/projects/ecommerce.svg',
    stats: [
      { label: 'Performance', value: 95 },
      { label: 'Accessibility', value: 92 },
      { label: 'SEO', value: 98 },
      { label: 'Best Practices', value: 94 }
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with drag and drop functionality and real-time updates.',
    category: 'web',
    technologies: ['React', 'Node.js', 'Express', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com/isuranga/task-manager',
    demoUrl: 'https://task-app.isuranga.com',
    imageUrl: '/images/projects/task-management.svg',
    stats: [
      { label: 'Performance', value: 90 },
      { label: 'Accessibility', value: 85 },
      { label: 'SEO', value: 88 },
      { label: 'Best Practices', value: 92 }
    ]
  },
  {
    id: 3,
    title: 'Health & Fitness Tracker',
    description: 'A mobile application for tracking workouts, nutrition, and health metrics with data visualization.',
    category: 'mobile',
    technologies: ['React Native', 'Redux', 'Firebase', 'Chart.js'],
    github: 'https://github.com/isuranga/fitness-tracker',
    imageUrl: '/images/projects/fitness-tracker.svg',
    stats: [
      { label: 'Performance', value: 88 },
      { label: 'User Satisfaction', value: 94 },
      { label: 'App Store Rating', value: 4.7 },
      { label: 'Daily Active Users', value: 2500 }
    ]
  },
  {
    id: 4,
    title: 'Smart Home Dashboard',
    description: 'An IoT dashboard for monitoring and controlling smart home devices with real-time status updates.',
    category: 'iot',
    technologies: ['Vue.js', 'Node.js', 'MQTT', 'WebSockets', 'Docker'],
    github: 'https://github.com/isuranga/smart-home',
    demoUrl: 'https://smarthome.isuranga.com',
    imageUrl: '/images/projects/smart-home.svg',
    stats: [
      { label: 'Response Time', value: 120 },
      { label: 'Reliability', value: 99.9 },
      { label: 'Device Support', value: 50 },
      { label: 'User Satisfaction', value: 92 }
    ]
  },
  {
    id: 5,
    title: 'AI Content Generator',
    description: 'A web application that leverages AI to generate custom content for marketing and social media.',
    category: 'ai',
    technologies: ['Python', 'Flask', 'TensorFlow', 'React', 'AWS'],
    github: 'https://github.com/isuranga/ai-content-gen',
    demoUrl: 'https://ai-content.isuranga.com',
    imageUrl: '/images/projects/ecommerce.svg',
    stats: [
      { label: 'Accuracy', value: 89 },
      { label: 'Generation Speed', value: 3.2 },
      { label: 'User Retention', value: 78 },
      { label: 'Cost Efficiency', value: 85 }
    ]
  },
  {
    id: 6,
    title: 'Personal Finance Manager',
    description: 'A comprehensive finance management tool with budget planning, expense tracking, and financial insights.',
    category: 'web',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'D3.js'],
    github: 'https://github.com/isuranga/finance-manager',
    imageUrl: '/images/projects/task-management.svg',
    stats: [
      { label: 'Data Accuracy', value: 99.9 },
      { label: 'Feature Satisfaction', value: 88 },
      { label: 'Performance', value: 92 },
      { label: 'Security Rating', value: 95 }
    ]
  },
];
