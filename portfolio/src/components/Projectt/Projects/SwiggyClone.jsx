import PropTypes from 'prop-types';
import Github from '../Buttons/Github';
import Ridirect from '../Buttons/Ridirect';

const SwiggyClone = ({ Project, name, description, github, link, technologies }) => {
  return (
    <div className='w-full bg-white hover:bg-gray-50 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100'>
      <div className='flex flex-col lg:flex-row'>
        {/* Image Section */}
        <div className='lg:w-1/2 p-6 lg:p-8'>
          <div className='relative group'>
            <img 
              src={Project} 
              alt={`${name} project screenshot`} 
              className='w-full h-64 lg:h-80 object-cover rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className='lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between'>
          <div>
            <h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4'>
              {name}
            </h3>
            {description && (
              <p className='text-gray-600 text-lg leading-relaxed mb-6'>
                {description}
              </p>
            )}
            
            {technologies && (
              <div className='mb-6'>
                <h4 className='text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3'>
                  Technologies Used
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className='px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className='flex gap-4'>
            <a href={github} target="_blank" rel="noopener noreferrer" className='flex-1'>
              <button className='w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2'>
                <Github />
                <span>View Code</span>
              </button>
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer" className='flex-1'>
              <button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2'>
                <Ridirect />
                <span>Live Demo</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SwiggyClone.propTypes = {
  Project: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  github: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

SwiggyClone.defaultProps = {
  description: '',
  technologies: [],
};

export default SwiggyClone;
