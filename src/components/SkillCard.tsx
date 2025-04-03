import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../types";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-black rounded-lg border border-green-500/30 p-6 hover:border-green-500 transition-all"
    >
      <div className="flex items-center">
        <Icon className="w-6 h-6 mr-2 text-green-500" />
        <h3 className="text-xl font-semibold text-green-500 font-mono">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;