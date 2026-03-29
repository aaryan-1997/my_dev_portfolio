import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700" />

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center ${
              i % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 z-10" />

            {/* Content */}
            <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium mb-4">
                  <Briefcase size={14} />
                  <span>{exp.company}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                      <span className="text-blue-600 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
