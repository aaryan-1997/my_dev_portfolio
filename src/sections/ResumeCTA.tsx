import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail, ArrowRight } from 'lucide-react';

import { SOCIAL_LINKS } from '../constants';

export default function ResumeCTA() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/30"
      >
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Looking for a reliable <br /> Flutter Developer?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            I'm currently available for new projects and full-time opportunities. 
            Let's build something amazing together.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={SOCIAL_LINKS.resume}
              className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all shadow-lg"
            >
              Download Resume <Download size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-700 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-800 transition-all border border-blue-500"
            >
              Contact Me <Mail size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all border border-white/30"
            >
              Hire Me <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
