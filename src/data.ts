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
      icon: FaHtml5
    },
    {
      name: 'CSS3',
      icon: FaCss3
    },
    {
      name: 'JavaScript',
      icon: IoLogoJavascript
    },
    {
      name: 'TypeScript',
      icon: SiTypescript
    },
    {
      name: 'React',
      icon: FaReact
    },
    {
      name: 'TailwindCSS',
      icon: RiTailwindCssFill
    },
    {
      name: 'Bootstrap',
      icon: FaBootstrap
    }
  ],
  backend: [
    {
      name: 'Node.js',
      icon: FaNodeJs
    },
    {
      name: 'Express',
      icon: SiExpress
    },
    {
      name: 'Socket.io',
      icon: TbBrandSocketIo
    }
  ],
  tools: [
    {
      name: 'Visual Studio Code',
      icon: VscVscode
    },
    {
      name: 'GitHub',
      icon: GithubIcon
    },
    {
      name: 'NPM',
      icon: FaNpm
    },
    {
      name: 'XAMPP',
      icon: SiXampp
    },
    {
      name: 'Vite',
      icon: SiVitest
    }
  ]
};

export const projects: Project[] = [
  {
    title: 'SPARK - Real-time Chat Platform',
    description: 'A modern chat application built with Socket.io and React, featuring real-time messaging and user presence indicators.',
    technologies: ['React', 'Socket.io', 'Express', 'TailwindCSS', 'Node.js'],
    image: 'https://img001.prntscr.com/file/img001/uX2OwSPyQWinfUIUwGTJmQ.png',
    link: 'https://github.com/snolannap/spark-chatapp',
    features: ['Real-time Messaging', 'User Presence', 'Message History', 'Responsive Design']
  }
  // ,{
  //   title: 'Task Management System',
  //   description: 'A comprehensive project management tool with drag-and-drop task organization and team collaboration features.',
  //   technologies: ['TypeScript', 'React', 'Express', 'TailwindCSS'],
  //   image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=2000',
  //   link: 'https://github.com/yourusername/task-manager',
  //   features: ['Drag-and-drop interface', 'Team collaboration', 'Task tracking', 'Progress analytics']
  // }
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