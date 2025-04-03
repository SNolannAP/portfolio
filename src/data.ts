import { FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaNpm, FaReact } from 'react-icons/fa';
import { Project, AboutSection } from './types';
import { Coffee, Rocket, Heart, Globe, Github as GithubIcon } from 'lucide-react';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiTypescript, SiVitest, SiXampp } from 'react-icons/si';
import { TbBrandSocketIo } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io';

export const skills = {
  frontend: [
    {
      name: 'HTML5',
      level: 92,
      color: '#E34F26',
      icon: FaHtml5
    },
    {
      name: 'CSS3',
      level: 92,
      color: '#E34F26',
      icon: FaCss3
    },
    {
      name: 'JavaScript',
      level: 90,
      color: '#F7DF1E',
      icon: IoLogoJavascript
    },
    {
      name: 'TypeScript',
      level: 82,
      color: '#3178C6',
      icon: SiTypescript
    },
    {
      name: 'React',
      level: 88,
      color: '#61DAFB',
      icon: FaReact
    },
    {
      name: 'TailwindCSS',
      level: 75,
      color: '#38B2AC',
      icon: RiTailwindCssFill
    },
    {
      name: 'Bootstrap',
      level: 80,
      color: '#7952B3',
      icon: FaBootstrap
    }
  ],
  backend: [
    {
      name: 'Node.js',
      level: 82,
      color: '#339933',
      icon: FaNodeJs
    },
    {
      name: 'Express',
      level: 75,
      color: '#000000',
      icon: SiExpress
    },
    {
      name: 'Socket.io',
      level: 69,
      color: '#010101',
      icon: TbBrandSocketIo
    }
  ],
  tools: [
    {
      name: 'Visual Studio Code',
      color: '#007ACC',
      level: 0,
      icon: VscVscode
    },
    {
      name: 'GitHub',
      color: '#181717',
      level: 0,
      icon: GithubIcon
    },
    {
      name: 'NPM',
      color: '#CB3837',
      level: 0,
      icon: FaNpm
    },
    {
      name: 'XAMPP',
      color: '#CB3837',
      level: 0,
      icon: SiXampp
    },
    {
      name: 'Vite',
      color: '#646CFF',
      level: 0,
      icon: SiVitest
    }
  ]
};

export const projects: Project[] = [
  {
    title: 'SPARK - Real-time Chat Platform',
    description: 'A modern chat application built with Socket.io and React, featuring real-time messaging and user presence indicators.',
    technologies: ['React', 'Socket.io', 'Express', 'TailwindCSS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=2000',
    link: 'https://github.com/yourusername/chat-platform',
    features: ['Real-time Messaging', 'User Presence', 'Message History', 'Responsive Design']
  },
  {
    title: 'Task Management System',
    description: 'A comprehensive project management tool with drag-and-drop task organization and team collaboration features.',
    technologies: ['TypeScript', 'React', 'Express', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=2000',
    link: 'https://github.com/yourusername/task-manager',
    features: ['Drag-and-drop interface', 'Team collaboration', 'Task tracking', 'Progress analytics']
  }
];

export const aboutSections: AboutSection[] = [
  {
    title: 'Background',
    content: 'I am a Web Developer with a strong foundation in JavaScript, React, and Node.js. I have a passion for creating user-friendly and visually appealing web applications.',
    icon: Coffee
  },
  {
    title: 'Mission',
    content: 'To expand my skills and contribute to meaningful projects that make a positive impact on the world.',
    icon: Rocket
  },
  {
    title: 'Interests',
    content: 'Aside from coding, I enjoy playing video games, watching movies, and learning about new technologies. I also make music.',
    icon: Heart
  },
  {
    title: 'Location',
    content: 'Based in Marikina City, from the Philippines in National Capital Region, Metro Manila.',
    icon: Globe
  }
];