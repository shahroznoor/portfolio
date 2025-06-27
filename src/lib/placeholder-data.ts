import type { ProfileData } from './types';
import { Code, Briefcase, Mic, BarChart, PenTool, Database, GitBranch, Rocket, Users } from 'lucide-react';

export const profileData: ProfileData = {
  name: 'Alex Doe',
  headline: 'Senior Software Engineer | Full-Stack Developer | AI Enthusiast',
  about: 'As a seasoned software engineer with over 8 years of experience, I specialize in building scalable web applications and exploring the frontiers of artificial intelligence. My passion lies in creating elegant solutions to complex problems, and I am always eager to learn new technologies and methodologies. I thrive in collaborative environments and am dedicated to writing clean, efficient, and maintainable code.',
  experience: [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Innovators Inc.',
      duration: 'Jan 2020 - Present',
      description: 'Led a team of 5 engineers in developing and maintaining a high-traffic e-commerce platform. Architected and implemented a new microservices-based backend, resulting in a 40% improvement in performance and scalability. Introduced modern frontend practices using React and TypeScript, enhancing developer productivity and code quality. Mentored junior engineers and conducted code reviews to ensure adherence to best practices.',
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Digital Solutions Co.',
      duration: 'Jun 2017 - Dec 2019',
      description: 'Developed and shipped multiple user-facing features for a SaaS product using Ruby on Rails and Angular. Collaborated with product managers and designers to translate requirements into technical specifications. Wrote extensive unit and integration tests, improving code coverage by 30%. Participated in an on-call rotation to ensure application stability and uptime.',
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'Web Starters LLC',
      duration: 'May 2015 - May 2017',
      description: 'Assisted in the development of client websites using HTML, CSS, and JavaScript. Gained hands-on experience with version control systems like Git and project management tools like Jira. Contributed to building responsive and cross-browser compatible user interfaces. Learned backend development concepts with Node.js and Express.',
    },
  ],
  education: [
    {
      id: 1,
      institution: 'State University',
      degree: 'Master of Science in Computer Science',
      duration: '2013 - 2015',
    },
    {
      id: 2,
      institution: 'City College',
      degree: 'Bachelor of Science in Information Technology',
      duration: '2009 - 2013',
    },
  ],
  skills: [
    { id: 1, name: 'TypeScript', icon: Code },
    { id: 2, name: 'React', icon: Rocket },
    { id: 3, name: 'Node.js', icon: Code },
    { id: 4, name: 'GraphQL', icon: Database },
    { id: 5, name: 'Git', icon: GitBranch },
    { id: 6, name: 'Project Management', icon: Briefcase },
    { id: 7, name: 'Team Leadership', icon: Users },
    { id: 8, name: 'UI/UX Design', icon: PenTool },
  ],
  projects: [
    {
      id: 1,
      title: 'AI-Powered Chatbot',
      description: 'A customer service chatbot that uses natural language processing to understand and respond to user queries in real-time.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'chatbot interface',
      tags: ['AI', 'TypeScript', 'Node.js'],
    },
    {
      id: 2,
      title: 'Real-Time Analytics Dashboard',
      description: 'A dashboard for visualizing real-time data streams, built with React, WebSockets, and D3.js.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'analytics dashboard',
      tags: ['React', 'Data Visualization', 'WebSockets'],
    },
    {
      id: 3,
      title: 'E-commerce Platform API',
      description: 'A robust and scalable RESTful API for an e-commerce website, featuring authentication, product management, and order processing.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'code editor',
      tags: ['API', 'Node.js', 'PostgreSQL'],
    },
  ],
};
