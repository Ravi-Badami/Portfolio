import React from 'react';
import { experienceData } from '../../utils/content';

const Experience = () => {
  return (
    <section id="experience" className="pt-4 pb-4 md:pt-6 md:pb-6 px-4 md:px-8 lg:px-12">
      <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-6">Work Experience</h2>
      
      <div className="space-y-3">
        {experienceData.map((exp, index) => (
          <div key={index} className="border-b border-zinc-200 pb-3">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="text-lg font-semibold text-zinc-900">{exp.title}</h3>
              <span className="text-sm text-zinc-600">@ {exp.company}</span>
              <span className="text-sm text-zinc-500">• {exp.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

