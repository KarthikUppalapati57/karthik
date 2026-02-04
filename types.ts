
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Skill {
  name: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export interface Certification {
  name: string;
  issuer: string;
  description: string;
  url?: string;
  category: 'Generative AI' | 'McKinsey' | 'Coursera' | 'Software Development & Management';
}
