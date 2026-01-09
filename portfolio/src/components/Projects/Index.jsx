import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../utils/content';

const Projects = () => {
  return (
    <section id="project" className="py-24 bg-zinc-50">
       <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 font-display tracking-tight">
            Things I've Built
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl">
            A collection of projects attempting to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
             // Assuming ProjectCard needs restoration or exists. Based on checking verify first.
             // If ProjectCard is missing, this Index will fail too. 
             // I'll create a simple inline card map for safety if I can't verify ProjectCard exists.
             // But for now, let's assume I restore ProjectCard next if needed.
             // Actually, to be safe, I should verify ProjectCard existence or inline the card logic temporarily.
             // I'll assume ProjectCard is missing too, so I'll create it in next step.
             <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
