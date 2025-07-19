import swiggy from '../../../public/image/Projects/swiggy.png';
import netflixgpt from '../../../public/image/Projects/netflixgpt.png';
import SwiggyClone from './Projects/SwiggyClone';

const Project = () => {
  const projects = [
    {
      image: swiggy,
      name: 'TajBite - Food Delivery App',
      description: 'A modern food delivery application built with React, featuring real-time menu updates, cart management, and responsive design.',
      github: 'https://github.com/Ravi-Badami/Swiggy-clone',
      live: 'https://tajbite.vercel.app/',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration']
    },
    {
      image: netflixgpt,
      name: 'NetFlixGPT Pro',
      description: 'An intelligent movie recommendation platform powered by AI, featuring personalized suggestions and modern UI design.',
      github: 'https://github.com/Ravi-Badami/NetFlixGPT',
      live: 'https://netflixgptpro.vercel.app/',
      technologies: ['React', 'OpenAI API', 'Firebase', 'Tailwind CSS']
    }
  ];

  return (
    <section className='w-full py-20' id='project'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-extrabold text-gray-900 mb-4'>
            Projects
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full'></div>
          <p className='text-xl text-gray-600 mt-6 max-w-2xl mx-auto'>
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </div>
        
        <div className='space-y-12'>
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className='transform hover:scale-[1.02] transition-all duration-300'
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0
              }}
            >
              <SwiggyClone
                Project={project.image}
                name={project.name}
                description={project.description}
                github={project.github}
                link={project.live}
                technologies={project.technologies}
              />
            </div>
          ))}
        </div>
        
        <div className='text-center mt-16'>
          <p className='text-lg text-gray-600 mb-6'>
            Want to see more of my work?
          </p>
          <a 
            href='https://github.com/Ravi-Badami' 
            target='_blank' 
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
