import type { LucideIcon } from 'lucide-react';

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  summaryPoints?: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
}

export interface ProfileData {
  name: string;
  headline: string;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}
