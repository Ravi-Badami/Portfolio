import React from 'react';
import SkillCard from './SkillCard';
import { skillsData } from '../../utils/content';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 font-display tracking-tight">
            My Tech Stack
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl">
            The tools and technologies I use to build robust digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-zinc-400 uppercase tracking-wider pl-1">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <SkillCard key={sIdx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
