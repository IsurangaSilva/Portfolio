export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
  experiences: Experience[];
  education: Education[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

export interface Achievement {
  title: string;
  value: string | number;
  suffix?: string;
  description?: string;
  icon?: string;
}
