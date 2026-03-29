import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

import { SOCIAL_LINKS } from '../constants';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? Feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Me</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">aryan9499@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Name</label>
                  <input
                    {...register('name')}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-xs font-bold ml-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                  <input
                    {...register('email')}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-xs font-bold ml-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs font-bold ml-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-blue-600/25"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
