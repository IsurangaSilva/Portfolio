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
    items: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
    advanced: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'CSS/Tailwind', level: 80 }
    ]
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express.js', 'Java', 'C#', '.NET', 'RESTful APIs', 'PHP'],
    advanced: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'RESTful APIs', level: 80 },
      { name: 'Java', level: 70 }
    ]
  },
  {
    name: 'Databases',
    items: ['MongoDB', 'MySQL', 'Firebase', 'SQL Server', 'NoSQL'],
    advanced: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 }
    ]
  },
  {
    name: 'Mobile Development',
    items: ['React Native', 'Flutter', 'Android Studio', 'Expo'],
    advanced: [
      { name: 'React Native', level: 70 },
      { name: 'Flutter', level: 65 }
    ]
  },
  {
    name: 'Tools',
    items: ['VS Code', 'Git', 'GitHub', 'Azure DevOps', 'Postman', 'Figma', 'Arduino IDE'],
  },
  {
    name: 'Languages',
    items: ['English', 'Sinhala', 'Tamil (Basic)'],
  }
];
