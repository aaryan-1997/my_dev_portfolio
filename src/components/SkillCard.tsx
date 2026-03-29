import React from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Flame, 
  Globe, 
  Map, 
  Zap, 
  CreditCard, 
  Layers, 
  Database, 
  Server, 
  Bluetooth, 
  Figma,
  Link,
  Navigation,
  Layout,
  Box,
  GitBranch
} from 'lucide-react';
import { Skill } from '../types';

const iconMap: Record<string, any> = {
  Smartphone,
  Flame,
  Globe,
  Map,
  Zap,
  CreditCard,
  Layers,
  Database,
  Server,
  Bluetooth,
  Figma,
  Link,
  Navigation,
  Layout,
  Box,
  GitBranch
};

interface SkillCardProps {
  skill: Skill;
  index: number;
  key?: React.Key;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = iconMap[skill.icon] || Smartphone;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, backgroundColor: 'rgba(37, 99, 235, 0.05)' }}
      className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center group transition-all"
    >
      <div className="w-12 h-12 bg-slate-50 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all mb-4">
        <Icon size={24} />
      </div>
      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{skill.name}</h4>
      <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
        {skill.category}
      </span>
    </motion.div>
  );
}
