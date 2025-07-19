import { useState, useEffect } from 'react';
import profilePic from '../../../public/image/profile.png';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const roles = [
    'Senior Full Stack Developer',
    'React Specialist', 
    'Node.js Architect',
    'Cloud Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeRole = () => {
      const currentFullRole = roles[roleIndex];
      
      if (isDeleting) {
        setCurrentRole(currentFullRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setCurrentRole(currentFullRole.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentFullRole.length) {
        setTimeout(() => isDeleting = true, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(typeRole, isDeleting ? 50 : 100);
    };

    typeRole();

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id='about' className='min-h-screen flex items-center section-padding bg-gray-50'>
      <div className='container'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          
          {/* Left Content */}
          <div className='order-2 lg:order-1 space-y-8'>
            
            {/* Status */}
            <div className='status-available'>
              Available for new opportunities
            </div>

            {/* Main Heading */}
            <div>
              <h1 className='text-hero text-gray-900 mb-4'>
                Ravikumar
                <br />
                <span className='accent-text'>Badami</span>
              </h1>
              
              {/* Animated Role */}
              <div className='flex items-center gap-2 mb-6'>
                <span className='text-title text-gray-600 font-mono'>$</span>
                <span className='text-title text-gray-600'>
                  {currentRole}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className='text-body-large text-gray-600 max-w-lg leading-relaxed'>
              I architect and develop high-performance web applications that scale. 
              Specialized in React ecosystems, Node.js backends, and cloud-native solutions 
              that drive business growth.
            </p>

            {/* Terminal Command */}
            <div className='terminal max-w-md'>
              <div className='font-mono text-sm'>
                <div className='mb-2'>
                  <span className='text-gray-400'>ravikumar@portfolio</span>
                  <span className='text-white'>:</span>
                  <span className='text-blue-400'>~</span>
                  <span className='text-white'>$ </span>
                  <span className='text-green-400'>whoami</span>
                </div>
                <div className='text-yellow-400 mb-2'>
                  → Senior Full Stack Developer
                </div>
                <div className='text-gray-400 mb-2'>
                  → 3+ years experience
                </div>
                <div className='text-gray-400 mb-2'>
                  → 25+ projects delivered
                </div>
                <div className='flex items-center'>
                  <span className='text-white'>$ </span>
                  <span className='animate-pulse'>_</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button 
                onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })}
                className='btn-primary'
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '#';
                  link.download = 'Ravikumar_Badami_Resume.pdf';
                  link.click();
                }}
                className='btn-secondary'
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-8 pt-8 border-t border-gray-200'>
              <div>
                <div className='text-2xl font-bold text-gray-900 font-mono'>03+</div>
                <div className='text-sm text-gray-600'>Years</div>
              </div>
              <div>
                <div className='text-2xl font-bold text-gray-900 font-mono'>25+</div>
                <div className='text-sm text-gray-600'>Projects</div>
              </div>
              <div>
                <div className='text-2xl font-bold text-gray-900 font-mono'>99%</div>
                <div className='text-sm text-gray-600'>Success</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className='order-1 lg:order-2 flex justify-center lg:justify-end'>
            <div className='relative group'>
              {/* Background decoration */}
              <div className='absolute inset-0 bg-gray-900 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6'></div>
              
              {/* Main image container */}
              <div className='relative bg-white rounded-2xl p-2 border-2 border-gray-200 transform transition-transform group-hover:-rotate-1'>
                <img 
                  src={profilePic} 
                  alt='Ravikumar Badami - Senior Full Stack Developer' 
                  className='w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500'
                />
                
                {/* Code snippet overlay */}
                <div className='absolute bottom-4 left-4 right-4 code-block text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='font-mono'>
                    <span className='text-purple-400'>const</span>{' '}
                    <span className='text-blue-400'>developer</span>{' '}
                    <span className='text-white'>=</span>{' '}
                    <span className='text-green-400'>"exceptional"</span>
                  </div>
                </div>
              </div>

              {/* Floating tech labels */}
              <div className='absolute -top-4 -right-4 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-lg'>
                <span className='text-sm font-mono font-semibold text-gray-700'>React</span>
              </div>
              
              <div className='absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-lg'>
                <span className='text-sm font-mono font-semibold text-gray-700'>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
