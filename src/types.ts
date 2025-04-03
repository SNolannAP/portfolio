import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  color: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  features: string[];
}

export interface AboutSection {
  title: string;
  content: string;
  icon: typeof LucideIcon;
}