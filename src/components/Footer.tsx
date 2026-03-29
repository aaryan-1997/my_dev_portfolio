import React from 'react';
import { Smartphone, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { DEVELOPER_NAME, SOCIAL_LINKS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <Smartphone size={24} />
            </div>
            <span>{DEVELOPER_NAME}</span>
          </div>

          <div className="flex gap-8">
            <a href="#about" className="text-sm font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 transition-colors">Projects</a>
            <a href="#experience" className="text-sm font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 transition-colors">Experience</a>
            <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
              <Github size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
              <Linkedin size={20} />
            </a>
            <a href={SOCIAL_LINKS.email} className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-50 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {currentYear} {DEVELOPER_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using Flutter & React
          </p>
        </div>
      </div>
    </footer>
  );
}
