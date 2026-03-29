import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { EXPERIENCES } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Professional Journey"
          subtitle="A timeline of my professional experience and key contributions in the mobile development industry."
        />
        <ExperienceTimeline experiences={EXPERIENCES} />
      </div>
    </section>
  );
}
