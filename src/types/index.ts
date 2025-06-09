export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  metrics?: string[];
}

export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  impact: string;
  technologies?: string[];
}