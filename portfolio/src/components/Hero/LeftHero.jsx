const LeftHero = () => {
  const downloadResume = () => {
    // Create a dummy resume download - you can replace with actual resume link
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,Resume%20Download%20Coming%20Soon';
    link.download = 'Ravikumar_Badami_Resume.pdf';
    link.click();
  };

  return (
    <div className='w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8'>
      <div className='flex flex-col items-center lg:items-start justify-center text-center lg:text-left opacity-0 animate-slideInLeft'>
        <div className='mb-8'>
          <div className='flex items-center justify-center lg:justify-start mb-4'>
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3'></div>
            <span className='text-green-600 text-sm md:text-base font-medium'>Available for opportunities</span>
          </div>
          
          <h1 className='gradient-text text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight'>
            Ravikumar
            <br />
            <span className='text-gray-900'>Badami</span>
          </h1>
          
          <div className='relative mb-6'>
            <h2 className='text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2'>
              Senior Full Stack Developer
            </h2>
            <div className='text-lg md:text-xl text-blue-600 font-semibold'>
              React • Node.js • Cloud Architecture
            </div>
          </div>
        </div>
        
        <p className='text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mb-10 font-medium'>
          Transforming ideas into scalable digital solutions. I architect and develop 
          high-performance web applications that deliver exceptional user experiences 
          and drive business growth. Specialized in modern React ecosystems and 
          cloud-native architectures.
        </p>
        
        <div className='flex gap-4 flex-col sm:flex-row w-full sm:w-auto mb-12'>
          <button 
            onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })}
            className='bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white px-10 py-4 rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 transition-all duration-300 font-semibold transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 text-lg relative overflow-hidden group'
          >
            <span className='relative z-10'>Explore My Work</span>
            <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
          </button>
          
          <button 
            onClick={downloadResume}
            className='border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl text-lg'
          >
            Download Resume
          </button>
        </div>
        
        {/* Enhanced Stats */}
        <div className='grid grid-cols-3 gap-8 text-center lg:text-left w-full max-w-lg'>
          <div className='group'>
            <div className='text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110 transition-transform duration-300'>
              3+
            </div>
            <div className='text-sm md:text-base text-gray-600 font-medium'>Years Experience</div>
          </div>
          <div className='group'>
            <div className='text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-300'>
              25+
            </div>
            <div className='text-sm md:text-base text-gray-600 font-medium'>Projects Delivered</div>
          </div>
          <div className='group'>
            <div className='text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 group-hover:scale-110 transition-transform duration-300'>
              99%
            </div>
            <div className='text-sm md:text-base text-gray-600 font-medium'>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
