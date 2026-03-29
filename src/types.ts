export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  problemSolved: string;
  impact: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
