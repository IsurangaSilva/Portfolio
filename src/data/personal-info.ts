import { PersonalInfo, Achievement, Testimonial } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Isuranga",
  role: "Professional Web Developer",
  bio: "A passionate web developer specializing in creating modern, responsive websites and web applications. I focus on building seamless user experiences with the latest technologies and frameworks like React, Next.js, and MERN stack.",
  email: "isurangasulakshana@gmail.com",
  phone: "078 577 5691",
  location: "Negombo, Sri Lanka",
  resumeUrl: "/documents/Isuranga 3.pdf",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/IsurangaSilva",
      icon: "FaGithub"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/isuranga-silva/",
      icon: "FaLinkedin"
    },
    {
      platform: "Email",
      url: "mailto:isurangasulakshana@gmail.com",
      icon: "FaEnvelope"
    },
    {
      platform: "Research",
      url: "https://research-website-henna.vercel.app/",
      icon: "FaFlask"
    }
  ],
  experiences: [
    {
      title: "Web Developer",
      company: "Ewis Company",
      period: "25/04/2023 - 25/10/2023",
      description: "Improved problem-solving skills and developed software solutions using ReactJS, NodeJS, MongoDB, ExpressJS, and Azure DevOps. Built and fixed the Add Delivery Page for both frontend and backend components.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Azure DevOps"]
    }
  ],
  education: [
    {
      degree: "Bachelor's in Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      period: "2021 - Present",
      description: "Focusing on Web Development and Software Engineering"
    },
    {
      degree: "Web Design Certificate",
      institution: "University of Moratuwa",
      period: "2020",
      description: "Web design and development fundamentals"
    }
  ]
};

export const achievements: Achievement[] = [
  {
    title: "Professional Experience",
    value: 1,
    suffix: "+",
    description: "Year of professional experience in web development"
  },
  {
    title: "Projects Completed",
    value: 15,
    suffix: "+",
    description: "Successfully completed academic and research projects"
  },
  {
    title: "Technologies Mastered",
    value: 10,
    suffix: "+",
    description: "Web and mobile development technologies"
  },
  {
    title: "Research Publications",
    value: 1,
    description: "Published research in web technology"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sandun Perera",
    role: "Project Manager",
    company: "Ewis Company",
    quote: "Isuranga demonstrated excellent problem-solving skills during his time with us. His work on our web delivery system was thorough and well-implemented."
  },
  {
    id: 2,
    name: "Dr. Thilina Ranbaduge",
    role: "Senior Lecturer",
    company: "Sri Lanka Institute of Information Technology",
    quote: "Isuranga has shown exceptional ability in web development research and projects. His attention to detail and innovative approaches set him apart."
  },
  {
    id: 3,
    name: "Amali Fernando",
    role: "Design Lead",
    company: "Creative Digital Studios",
    quote: "Working with Isuranga on collaborative projects has been a pleasure. His technical skills combined with an eye for design make him a versatile developer."
  }
];
