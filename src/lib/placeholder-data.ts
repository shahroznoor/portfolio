
import type { ProfileData } from './types';
import { Code, Briefcase, Mic, BarChart, Database, GitBranch, Rocket } from 'lucide-react';

export const profileData: ProfileData = {
  name: 'Samantha Reyes',
  headline: 'Principal AI Engineer | Building Intelligent Systems at Scale',
  about: 'I\'m a Principal AI Engineer with a decade of experience bridging the gap between cutting-edge research and real-world applications. My expertise lies in designing, building, and deploying scalable machine learning systems, from natural language processing models to computer vision pipelines. I\'m passionate about leveraging AI to solve complex business problems and am driven by a desire to create technology that has a positive impact. I thrive in fast-paced, collaborative environments and enjoy mentoring the next generation of engineers.',
  experience: [
    {
      id: 1,
      title: 'Principal AI Engineer',
      company: 'InnovateAI Corp',
      duration: '2021 - Present',
      description: 'Lead the development of a company-wide machine learning platform, reducing model deployment time by 60%. Spearheaded the creation of a new recommendation engine using deep learning, increasing user engagement by 25%. Architected and implemented a distributed training system for large language models. Mentor a team of 10 AI/ML engineers.',
    },
    {
      id: 2,
      title: 'Senior Machine Learning Engineer',
      company: 'DataDriven Solutions',
      duration: '2018 - 2021',
      description: 'Designed and deployed fraud detection models for financial services clients, preventing millions in fraudulent transactions. Developed and maintained data pipelines for model training and evaluation using Airflow and Spark. Collaborated with cross-functional teams to integrate ML models into production applications.',
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'NextGen Apps',
      duration: '2015 - 2018',
      description: 'Worked on the backend services for a popular social media application. Built and maintained RESTful APIs using Python and Django. Gained expertise in database management with PostgreSQL and containerization with Docker.',
    },
  ],
  education: [
    {
      id: 1,
      institution: 'Stanford University',
      degree: 'Ph.D. in Artificial Intelligence',
      duration: '2011 - 2015',
    },
    {
      id: 2,
      institution: 'University of California, Berkeley',
      degree: 'B.S. in Electrical Engineering & Computer Sciences',
      duration: '2007 - 2011',
    },
  ],
  skills: [
    { id: 1, name: 'Python', icon: Code },
    { id: 2, name: 'PyTorch & TensorFlow', icon: Rocket },
    { id: 3, name: 'Kubernetes', icon: Code },
    { id: 4, name: 'Cloud (AWS/GCP)', icon: Database },
    { id: 5, name: 'MLOps', icon: GitBranch },
    { id: 6, name: 'System Design', icon: Briefcase },
    { id: 7, name: 'Natural Language Processing', icon: Mic },
    { id: 8, name: 'Computer Vision', icon: BarChart },
  ],
  projects: [
    {
      id: 1,
      title: 'Generative Art Engine',
      description: 'An application that uses generative adversarial networks (GANs) to create unique pieces of art based on textual descriptions.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'abstract art neural',
      tags: ['Generative AI', 'PyTorch', 'React'],
    },
    {
      id: 2,
      title: 'Real-time Object Detection',
      description: 'A high-performance system for detecting and tracking objects in video streams, deployed on edge devices using TensorFlow Lite.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'security camera city',
      tags: ['Computer Vision', 'Edge Computing', 'Python'],
    },
    {
      id: 3,
      title: 'Sentiment Analysis API',
      description: 'A scalable API that provides sentiment analysis for large volumes of text data, used for brand monitoring and customer feedback analysis.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'text analytics graph',
      tags: ['NLP', 'API', 'Docker'],
    },
  ],
};
