import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import ResumeCTA from './sections/ResumeCTA';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
