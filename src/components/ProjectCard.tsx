import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="bg-black rounded-lg border border-green-500/30 overflow-hidden hover:border-green-500 transition-all group"
    >
      <div className="relative">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>
      
      <div className="p-6 relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-green-500 font-mono">{project.title}</h3>
          <p className="text-gray-400 mb-4 font-mono">{project.description}</p>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gray-900 rounded-full text-sm text-green-400 font-mono border border-green-500/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <div className="space-y-2">
              <h4 className="text-green-400 font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                    className="flex items-center text-gray-400"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-500 hover:text-green-400 font-mono mt-6"
          >
            View Project <ExternalLink className="w-4 h-4 ml-1" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;