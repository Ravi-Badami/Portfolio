import React from 'react';
import { skillsData } from '../../utils/content';

const Skills = () => {
  return (
    <section id="skills" className="pt-4 pb-4 md:pt-6 md:pb-6 px-4 md:px-8 lg:px-12">
      <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-1">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-zinc-200">
            <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-3">
              <span className="w-2 h-6 rounded-full bg-zinc-900"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-lg text-sm">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

