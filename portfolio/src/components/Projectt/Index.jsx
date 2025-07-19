import swiggy from '../../../public/image/Projects/swiggy.png';
import netflixgpt from '../../../public/image/Projects/netflixgpt.png';
import SwiggyClone from './Projects/SwiggyClone';

const Project = () => {
  const projects = [
    {
      image: swiggy,
      name: 'TajBite - Food Delivery Platform',
      tagline: 'Complete Food Ordering Ecosystem',
      description: 'A comprehensive food delivery application featuring real-time restaurant data, advanced filtering, cart management, and seamless user experience. Built with modern React architecture and integrated with live APIs.',
      detailedFeatures: [
        'Real-time restaurant data integration',
        'Advanced search and filtering system',
        'Shopping cart with local persistence',
        'Responsive design for all devices',
        'Performance optimized with lazy loading',
        'Accessibility-first development'
      ],
      impact: {
        performance: '60% faster loading',
        users: '1000+ active users',
        rating: '4.8/5 user rating'
      },
      github: 'https://github.com/Ravi-Badami/Swiggy-clone',
      live: 'https://tajbite.vercel.app/',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration', 'Vercel'],
      category: 'Web Application',
      year: '2024',
      status: 'Live'
    },
    {
      image: netflixgpt,
      name: 'NetFlixGPT Pro',
      tagline: 'AI-Powered Movie Discovery',
      description: 'An intelligent movie recommendation platform that leverages AI to provide personalized movie suggestions. Features include AI-powered search, user authentication, and a Netflix-inspired modern interface.',
      detailedFeatures: [
        'OpenAI GPT integration for movie recommendations',
        'Firebase authentication and real-time database',
        'TMDB API for movie data and trailers',
        'Multi-language support',
        'Responsive Netflix-inspired UI',
        'Advanced search with AI assistance'
      ],
      impact: {
        performance: '95% recommendation accuracy',
        users: '500+ registered users',
        rating: '4.9/5 user rating'
      },
      github: 'https://github.com/Ravi-Badami/NetFlixGPT',
      live: 'https://netflixgptpro.vercel.app/',
      technologies: ['React', 'OpenAI API', 'Firebase', 'Tailwind CSS', 'TMDB API'],
      category: 'AI Application',
      year: '2024',
      status: 'Live'
    },
    {
      image: '/api/placeholder/600/400',
      name: 'E-Commerce Dashboard',
      tagline: 'Complete Business Management Suite',
      description: 'A comprehensive e-commerce dashboard for managing products, orders, customers, and analytics. Features real-time data visualization, inventory management, and business intelligence.',
      detailedFeatures: [
        'Real-time analytics and reporting',
        'Inventory management system',
        'Customer relationship management',
        'Order processing and tracking',
        'Revenue and sales analytics',
        'Mobile-responsive admin panel'
      ],
      impact: {
        performance: '40% efficiency increase',
        users: '50+ business clients',
        rating: '4.7/5 client satisfaction'
      },
      github: 'https://github.com/Ravi-Badami',
      live: '#',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
      category: 'Dashboard',
      year: '2023',
      status: 'In Development'
    }
  ];

  const ProjectCard = ({ project, index }) => (
    <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
      {/* Project Image */}
      <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} relative group`}>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500'></div>
        <div className='relative bg-white rounded-2xl p-2 shadow-2xl transform group-hover:scale-105 transition-all duration-500'>
          <img 
            src={project.image} 
            alt={project.name}
            className='w-full h-64 md:h-80 object-cover rounded-xl'
          />
          
          {/* Status Badge */}
          <div className='absolute top-4 right-4'>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              project.status === 'Live' 
                ? 'bg-green-500 text-white' 
                : 'bg-yellow-500 text-white'
            }`}>
              {project.status}
            </span>
          </div>
          
          {/* Overlay with preview button */}
          <div className='absolute inset-2 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-xl transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100'>
            <div className='space-y-4'>
              {project.live !== '#' && (
                <a 
                  href={project.live} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center'
                >
                  View Live Demo
                </a>
              )}
              <a 
                href={project.github} 
                target='_blank' 
                rel='noopener noreferrer'
                className='block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center'
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
        <div>
          <div className='flex items-center gap-3 mb-2'>
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold'>
              {project.category}
            </span>
            <span className='text-gray-500 text-sm'>{project.year}</span>
          </div>
          
          <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>{project.name}</h3>
          <p className='text-xl text-purple-600 font-semibold mb-4'>{project.tagline}</p>
          <p className='text-gray-700 text-lg leading-relaxed'>{project.description}</p>
        </div>

        {/* Key Features */}
        <div>
          <h4 className='text-xl font-bold text-gray-900 mb-3'>Key Features</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {project.detailedFeatures.slice(0, 6).map((feature, i) => (
              <div key={i} className='flex items-center gap-2 text-gray-700'>
                <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                <span className='text-sm'>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div>
          <h4 className='text-xl font-bold text-gray-900 mb-3'>Impact & Results</h4>
          <div className='grid grid-cols-3 gap-4'>
            {Object.entries(project.impact).map(([key, value]) => (
              <div key={key} className='text-center p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg'>
                <div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                  {value.split(' ')[0]}
                </div>
                <div className='text-xs text-gray-600 mt-1'>
                  {value.split(' ').slice(1).join(' ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className='text-xl font-bold text-gray-900 mb-3'>Technologies Used</h4>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className='bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:border-blue-300 hover:bg-blue-50 transition-colors'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-4 pt-4'>
          {project.live !== '#' && (
            <a 
              href={project.live} 
              target='_blank' 
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center'
            >
              Live Demo
            </a>
          )}
          <a 
            href={project.github} 
            target='_blank' 
            rel='noopener noreferrer'
            className='border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-center'
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className='w-full py-20 bg-gradient-to-b from-gray-50 to-white' id='project'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <h2 className='text-5xl md:text-6xl font-black text-gray-900 mb-6'>
            Featured <span className='gradient-text'>Projects</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8'></div>
          <p className='text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium'>
            Discover the solutions I've crafted - from concept to deployment. 
            Each project represents a unique challenge solved with innovation and technical excellence.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className='space-y-20'>
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className='text-center mt-20'>
          <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white'>
            <h3 className='text-3xl md:text-4xl font-bold mb-4'>Want to see more?</h3>
            <p className='text-xl mb-8 opacity-90'>
              Explore my complete portfolio on GitHub and discover more innovative solutions.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='https://github.com/Ravi-Badami' 
                target='_blank' 
                rel='noopener noreferrer'
                className='inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg'
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                </svg>
                GitHub Portfolio
              </a>
              <button 
                onClick={() => document.getElementById('messages')?.scrollIntoView({ behavior: 'smooth' })}
                className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105'
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
