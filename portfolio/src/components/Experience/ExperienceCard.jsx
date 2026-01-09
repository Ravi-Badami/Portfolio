import React from 'react';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="relative pl-8 md:pl-12 py-6 group">
      {/* Circuit Board Connector Line */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 group-last:bottom-auto group-last:h-8"
        style={{ backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 50%)', backgroundSize: '1px 8px' }} // Dashed effect
      />
      
      {/* Node Dot */}
      <div className="absolute left-[-4px] top-8 w-2.5 h-2.5 rounded-full bg-zinc-300 border-2 border-zinc-50 group-hover:bg-teal-500 group-hover:scale-125 transition-all duration-300 z-10 box-content" />

      <div className="flex flex-col sm:flex-row gap-4 sm:items-start bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="text-xl font-bold text-zinc-900 group-hover:text-teal-600 transition-colors">
              {experience.title}
            </h3>
            <span className="text-sm font-mono text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
              {experience.date}
            </span>
          </div>
          
          <h4 className="text-base font-medium text-zinc-700 mb-4">{experience.company}</h4>
          
          <ul className="space-y-2 mb-6">
            {experience.description.map((point, index) => (
              <li key={index} className="text-zinc-600 text-sm leading-relaxed flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {experience.tech && experience.tech.map((tech, idx) => (
              <span 
                key={idx} 
                className="text-xs font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
