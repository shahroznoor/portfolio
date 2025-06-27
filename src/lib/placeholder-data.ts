
import type { ProfileData } from './types';
import { Code, Briefcase, Mic, BarChart, Database, GitBranch, Rocket } from 'lucide-react';

export const profileData: ProfileData = {
  name: 'Muhammad Shahroz',
  headline: 'Full-Stack Developer | AI Enthusiast',
  about: 'I\'m a backend-focused Full Stack Developer with 4+ years of experience in building scalable web applications using Node.js, NestJS, and React.js. I specialize in REST APIs, database management (MongoDB, MySQL), and cloud deployment with AWS, Docker, and GCP. Passionate about clean code, real-time systems, and delivering reliable backend solutions',
  experience: [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'NextAge Technologies',
      duration: '2023 - Present',
      description: 'I’m currently working as a Senior Software Engineer, leading a team of 5 in building and deploying real-time gaming platforms and web apps. I design RESTful APIs, manage databases (MongoDB, MySQL), and handle deployments on AWS, GCP, and DigitalOcean. I also develop Python web scrapers, work with Go for backend services, and use Docker and Kubernetes for scalable infrastructure.',
    },
    {
      id: 2,
      title: 'Software Engineer - Node JS',
      company: 'People Tech',
      duration: '2022 - 2023',
      description: 'At People Tech, I worked on their HRMS system, focusing on building and maintaining the backend. My responsibilities included developing APIs, debugging software issues, and implementing effective solutions to ensure system reliability. I also integrated CRM features to track employee data and activities, and used SQL to query and manage large datasets for reporting and analysis. Additionally, I wrote and optimized SQL queries to maintain database integrity and improve overall performance.',
    },
    {
      id: 3,
      title: 'MERN Stack Developer',
      company: 'Xenure.co',
      duration: '2021 - 2022',
      description: 'At Xenure.co, I was responsible for delivering high-quality work within tight deadlines. I translated UI/UX designs and wireframes into responsive, high-performance React.js code. I worked with RESTful APIs and integrated Redux-Promise to manage data flow between the frontend and backend. I also collaborated with stakeholders to gather and validate requirements, helping translate them into clear technical specifications.',
    },
  ],
  education: [
    {
      id: 1,
      institution: 'Superior University',
      degree: 'B.S. in Computer Sciences',
      duration: '2018 - 2022',
    },
    {
      id: 2,
      institution: 'Superior College',
      degree: 'Intermediate Computer Sciences',
      duration: '2016 - 2018',
    },
  ],
  skills: [
    { id: 1, name: 'Node Js', icon: Code },
    { id: 1, name: 'Express Js', icon: Code },
    { id: 1, name: 'Nest Js', icon: Code },
    { id: 1, name: 'MY SQL', icon: Database },
    { id: 1, name: 'Mongo DB', icon: Database },
    { id: 1, name: 'React Js', icon: Code },
    { id: 1, name: 'Next Js', icon: Code },
    { id: 3, name: 'Go lang', icon: Code },
    { id: 4, name: 'Cloud (AWS/GCP)', icon: Database },
    { id: 5, name: 'Docker', icon: GitBranch },
    { id: 3, name: 'Kubernetes', icon: Code },
    { id: 6, name: 'Git', icon: GitBranch },
    { id: 6, name: 'SVN', icon: GitBranch },
    { id: 3, name: 'Ubuntu/Linux', icon: Code },
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
