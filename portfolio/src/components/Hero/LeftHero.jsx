const LeftHero = () => {
  return (
    <div className='w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8'>
      <div className='flex flex-col items-center lg:items-start justify-center text-center lg:text-left opacity-0 animate-slideInLeft'>
        <div className='mb-6'>
          <span className='text-gray-600 text-sm md:text-lg font-medium mb-2 block'>👋 Hello, I&apos;m</span> 
          <h1 className='gradient-text text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2'>
            Ravikumar Badami
          </h1>
          <h2 className='text-lg md:text-2xl lg:text-3xl font-semibold text-gray-700'>
            Full Stack Developer
          </h2>
        </div>
        
        <p className='text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg mb-8'>
          A passionate web developer specializing in modern web technologies. I create engaging, 
          responsive web applications with clean code and innovative design. Let&apos;s build 
          something amazing together!
        </p>
        
        <div className='flex gap-4 flex-col sm:flex-row w-full sm:w-auto mb-8'>
          <button 
            onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })}
            className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg hover:shadow-xl'
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('messages')?.scrollIntoView({ behavior: 'smooth' })}
            className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium transform hover:scale-105'
          >
            Get In Touch
          </button>
        </div>
        
        {/* Quick Stats */}
        <div className='grid grid-cols-3 gap-6 text-center lg:text-left'>
          <div>
            <div className='text-xl md:text-2xl font-bold text-gray-900'>2+</div>
            <div className='text-xs md:text-sm text-gray-600'>Years Experience</div>
          </div>
          <div>
            <div className='text-xl md:text-2xl font-bold text-gray-900'>10+</div>
            <div className='text-xs md:text-sm text-gray-600'>Projects Completed</div>
          </div>
          <div>
            <div className='text-xl md:text-2xl font-bold text-gray-900'>5+</div>
            <div className='text-xs md:text-sm text-gray-600'>Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
