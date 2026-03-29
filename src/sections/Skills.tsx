import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { SKILLS } from '../constants';

export default function Skills() {
  const categories = ['Frontend', 'Backend', 'Tools', 'Other'];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="A comprehensive toolkit of technologies I use to build world-class mobile applications."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
