import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my professional work, ranging from e-commerce to real-time tracking systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full z-10 backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>

              <div className="h-64 sm:h-96 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Overview</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                          <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl">
                      <h5 className="font-bold text-slate-900 dark:text-white mb-2">The Problem</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{selectedProject.problemSolved}</p>
                    </div>
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-3xl">
                      <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-2">The Impact</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{selectedProject.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-700">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Project Links</h4>
                    <div className="space-y-4">
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
                        >
                          Live Demo <ExternalLink size={18} />
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          className="w-full py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                        >
                          View Source <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
