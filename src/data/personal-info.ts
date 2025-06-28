import { PersonalInfo, Achievement, Testimonial } from "@/types/portfolio";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const personalInfo: PersonalInfo = {
  name: "Isuranga",
  role: "Professional Web Developer",
  bio: "A passionate web developer with over 5 years of experience in creating modern, responsive websites and web applications. I specialize in building seamless user experiences with the latest technologies and frameworks.",
  email: "contact@isuranga.com",
  phone: "+1 (234) 567-890",
  location: "Colombo, Sri Lanka",
  resumeUrl: "/resume.pdf",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/isuranga",
      icon: "FaGithub"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/isuranga",
      icon: "FaLinkedin"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/isuranga",
      icon: "FaTwitter"
    },
    {
      platform: "Email",
      url: "mailto:contact@isuranga.com",
      icon: "FaEnvelope"
    }
  ],
  experiences: [
    {
      title: "Senior Web Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Lead development of modern web applications using React, Next.js, and TypeScript. Improved site performance by 40% through optimization techniques and implemented CI/CD pipelines for streamlined deployment.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description: "Developed responsive web interfaces and implemented state management solutions. Collaborated with designers to create intuitive user experiences and integrated RESTful APIs.",
      technologies: ["JavaScript", "Vue.js", "CSS/SCSS", "REST APIs"]
    },
    {
      title: "Web Developer Intern",
      company: "StartUp Hub",
      period: "2017 - 2018",
      description: "Assisted in developing website features and components. Gained hands-on experience with modern frontend frameworks and version control systems.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2014 - 2018",
      description: "Focused on Software Engineering and Web Development"
    },
    {
      degree: "Full Stack Web Development Certification",
      institution: "Code Academy",
      period: "2017",
      description: "Intensive 6-month program covering modern web development"
    }
  ]
};

export const achievements: Achievement[] = [
  {
    title: "Years of Experience",
    value: 5,
    suffix: "+",
    description: "Years of professional experience in web development"
  },
  {
    title: "Projects Completed",
    value: 50,
    suffix: "+",
    description: "Successfully delivered projects for clients"
  },
  {
    title: "Client Satisfaction",
    value: 100,
    suffix: "%",
    description: "Commitment to client satisfaction"
  },
  {
    title: "Code Quality",
    value: "A+",
    description: "Consistent high-quality code standards"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Smith",
    role: "CEO",
    company: "Tech Innovations",
    quote: "Working with Isuranga was a pleasure. The attention to detail and commitment to quality was evident throughout our project."
  },
  {
    id: 2,
    name: "John Doe",
    role: "Marketing Director",
    company: "Digital Solutions",
    quote: "Isuranga delivered our website ahead of schedule and exceeded our expectations. The site is not only beautiful but also performs exceptionally well."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Creative Studios",
    quote: "The web application Isuranga developed for us has significantly improved our workflow and user experience. Highly recommended!"
  }
];
