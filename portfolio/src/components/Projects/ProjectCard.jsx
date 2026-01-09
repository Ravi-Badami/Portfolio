import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow hover:border-teal-500/30">
      {/* Image / Placeholder */}
      <div className="h-48 overflow-hidden bg-zinc-100 relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-300 font-mono text-xl bg-zinc-50">
            {project.title.substring(0,2).toUpperCase()}
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-teal-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Link Button */}
        <a 
          href={project.link} 
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-zinc-900 text-white rounded-lg font-medium text-sm hover:bg-zinc-800 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
