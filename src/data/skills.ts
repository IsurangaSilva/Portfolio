export interface SkillLevel {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  name: string;
  items: string[];
  advanced?: SkillLevel[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'SASS', 'TypeScript'],
    advanced: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'CSS/Tailwind', level: 90 }
    ]
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Laravel', 'GraphQL'],
    advanced: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'RESTful APIs', level: 92 }
    ]
  },
  {
    name: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    advanced: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 82 }
    ]
  },
  {
    name: 'DevOps',
    items: ['Docker', 'AWS', 'Vercel', 'CI/CD', 'Git', 'GitHub Actions'],
    advanced: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'Vercel/Netlify', level: 88 }
    ]
  },
  {
    name: 'Tools',
    items: ['VS Code', 'Figma', 'Adobe XD', 'Jira', 'Notion'],
  },
  {
    name: 'Other Skills',
    items: ['Responsive Design', 'SEO', 'Accessibility', 'Performance Optimization', 'WebSockets'],
  }
];
