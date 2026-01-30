import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../utils/content';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Fullstack', 'Frontend', 'Backend', 'Application'];

  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  return (
    <section id="project" className="py-12 md:py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-zinc-200/50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-zinc-200/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold uppercase tracking-wider border border-zinc-200">
              <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
              Selected Implementations
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
              Projects.
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
              A curated showcase of applications solving real-world challenges.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl border border-zinc-200 shadow-sm w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-zinc-900 text-white shadow-md' 
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          ) : (
             <div className="col-span-full py-20 text-center">
                <div className="inline-block p-4 rounded-full bg-zinc-100 mb-4">
                  <svg className="w-8 h-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-zinc-900">No projects found</h3>
                <p className="text-zinc-500">No projects listed in this category yet.</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
