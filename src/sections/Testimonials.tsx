import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Client Feedback"
          subtitle="Don't just take my word for it. Here's what my clients and partners have to say about our collaboration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 relative overflow-hidden"
            >
              <Quote className="absolute top-8 right-8 text-blue-600/10" size={80} />
              <p className="text-lg text-slate-600 dark:text-slate-400 italic mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
