import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Link, Navigation, Zap, Shield, Layout, Server, Rocket, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const services = [
  {
    icon: Smartphone,
    title: 'Flutter App Development',
    desc: 'High-performance native apps for iOS and Android from a single codebase.',
    color: 'bg-blue-500'
  },
  {
    icon: Layout,
    title: 'UI/UX Implementation',
    desc: 'Translating complex Figma designs into pixel-perfect, interactive mobile interfaces.',
    color: 'bg-purple-500'
  },
  {
    icon: Link,
    title: 'API Integration',
    desc: 'Connecting mobile apps with RESTful services, GraphQL, and third-party SDKs.',
    color: 'bg-green-500'
  },
  {
    icon: Navigation,
    title: 'Real-time Tracking',
    desc: 'Advanced Google Maps integration with live location updates and geofencing.',
    color: 'bg-orange-500'
  },
  {
    icon: Server,
    title: 'Backend Integration',
    desc: 'Robust integration with Firebase, MongoDB, and ASP.NET Core backends.',
    color: 'bg-red-500'
  },
  {
    icon: Zap,
    title: 'App Optimization',
    desc: 'Performance auditing, memory leak fixing, and app size reduction.',
    color: 'bg-yellow-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Expert Services"
          subtitle="Specialized solutions tailored to meet your business needs and deliver exceptional user experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-blue-600/10 transition-all"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-inherit/20 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {service.desc}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-4 transition-all"
              >
                Start a Project <ArrowRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
