import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Github, Linkedin, Mail, ArrowRight, Download, Zap } from 'lucide-react';
import { DEVELOPER_NAME, DEVELOPER_TITLE, SOCIAL_LINKS } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Hire
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Crafting <span className="text-blue-600">Premium</span> <br />
            Mobile Experiences
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            Hi, I'm <span className="font-bold text-slate-900 dark:text-white">{DEVELOPER_NAME}</span>. 
            A {DEVELOPER_TITLE} specializing in high-performance, 
            scalable mobile solutions with Flutter.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/25"
            >
              Hire Me <ArrowRight size={20} />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
            >
              View Projects
            </a>
            <a
              href={SOCIAL_LINKS.resume}
              className="px-8 py-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
            >
              Resume <Download size={20} />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={SOCIAL_LINKS.email} className="text-slate-400 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] rotate-3 overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/ram/800/800"
              alt={DEVELOPER_NAME}
              className="w-full h-full object-cover -rotate-3 scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative floating cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100 dark:border-slate-700"
          >
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600">
              <Smartphone size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expertise</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Flutter & Dart</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100 dark:border-slate-700"
          >
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center text-green-600">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Experience</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">5+ Years</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
