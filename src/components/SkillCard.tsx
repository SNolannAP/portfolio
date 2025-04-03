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
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 mr-2 text-green-500" />
        <h3 className="text-xl font-semibold text-green-500 font-mono">
          {skill.name}
        </h3>
      </div>

      {skill.level !== 0 && (
        <>
          <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-2.5 rounded-full bg-green-500"
            />
          </div>
          <p className="mt-2 text-right text-sm text-green-400 font-mono">
            {skill.level}%
          </p>
        </>
      )}
    </motion.div>
  );
};

export default SkillCard;
