import React from "react";
import { motion } from "framer-motion";
import { AboutSection as AboutSectionType } from "../types";

interface AboutSectionProps {
  section: AboutSectionType;
  index: number;
}

const AboutSection: React.FC<AboutSectionProps> = ({ section, index }) => {
  const Icon = section.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-black rounded-lg border border-green-500/30 p-6 hover:border-green-500 transition-all select-none"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-green-500" />
        <h3 className="text-xl font-semibold text-green-500 ml-3">
          {section.title}
        </h3>
      </div>
      <p className="text-gray-400 leading-relaxed">{section.content}</p>
    </motion.div>
  );
};

export default AboutSection;
