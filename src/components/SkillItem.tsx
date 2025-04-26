import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../types';

interface SkillItemProps {
  skill: Skill;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
  // Map the icon string to the corresponding Lucide icon component
  const IconComponent = (LucideIcons as any)[
    skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)
  ] || LucideIcons.Code;

  return (
    <motion.div
      className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center gap-4 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)" 
      }}
    >
      <div className="p-3 rounded-full bg-purple-900/40 text-purple-400">
        <IconComponent size={24} />
      </div>
      
      <div>
        <h3 className="font-medium text-white">{skill.name}</h3>
        <div className="mt-1 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i < skill.level 
                  ? 'bg-gradient-to-r from-purple-500 to-teal-400' 
                  : 'bg-gray-600'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillItem;