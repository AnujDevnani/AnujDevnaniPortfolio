export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'ml' | 'other';
  liveUrl?: string;
  technologies: string[];
  challenges: string;
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}