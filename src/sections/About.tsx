import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Smartphone, Link, Navigation, Zap } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Apps Delivered', value: '25+' },
  { label: 'Happy Clients', value: '15+' },
  { label: 'Success Rate', value: '100%' },
];

const expertise = [
  {
    icon: Smartphone,
    title: 'Mobile App Expertise',
    desc: 'Deep understanding of Flutter framework, Dart language, and native platform integrations.'
  },
  {
    icon: Link,
    title: 'API Integrations',
    desc: 'Expertise in REST, GraphQL, and WebSockets for seamless data communication.'
  },
  {
    icon: Navigation,
    title: 'Real-time Systems',
    desc: 'Advanced implementation of Google Maps, Geofencing, and live tracking solutions.'
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Focus on 60fps animations, memory management, and optimized app bundles.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Building the Future of Mobile"
              subtitle="I am a passionate developer dedicated to creating high-quality mobile applications that solve real-world problems."
              centered={false}
            />
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              <p>
                With over 5 years of experience in the mobile development landscape, I have helped startups and established companies turn their ideas into successful products. My focus is on writing clean, maintainable code that scales.
              </p>
              <p>
                I specialize in Flutter, which allows me to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. My expertise extends to backend integration with Firebase, MongoDB, and ASP.NET Core.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <item.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
