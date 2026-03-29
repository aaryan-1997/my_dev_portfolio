import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  key?: React.Key;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 transition-all"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button
            onClick={onClick}
            className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors"
          >
            View Details <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-full">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6">
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <button
            onClick={onClick}
            className="text-blue-600 dark:text-blue-400 text-sm font-bold hover:underline"
          >
            Case Study
          </button>
        </div>
      </div>
    </motion.div>
  );
}
