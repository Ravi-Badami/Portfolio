import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../utils/content';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background Decor - clean usage of existing global styles */}
      <div className="absolute inset-0 bg-grid-zinc-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 font-display tracking-tight">
            Work Experience
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl">
            My professional journey in building scalable production software.
          </p>
        </div>

        <div className="relative">
           {/* Timeline Container - Left Aligned */}
          <div className="flex flex-col space-y-0"> 
            {experienceData.map((exp, index) => (
              <ExperienceCard 
                key={index} 
                experience={exp} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
