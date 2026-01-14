import React from 'react';
import SkillCard from './SkillCard';
import { skillsData } from '../../utils/content';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 font-display tracking-tight">
            Skills
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl">
            The tools and technologies I use to build robust digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded-full bg-zinc-900"></span>
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
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
