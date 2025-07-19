import profilePic from '../../../public/image/profile.png';

const RightHero = () => {
  return (
    <div className='w-full lg:w-1/2 flex justify-center items-center'>
      <div className='relative opacity-0 animate-slideInRight'>
        {/* Animated background elements */}
        <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20 animate-float'></div>
        <div className='absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-xl opacity-30 animate-float' style={{animationDelay: '0.5s'}}></div>
        <div className='absolute -bottom-4 -left-4 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-30 animate-float' style={{animationDelay: '1s'}}></div>
        
        {/* Profile image */}
        <div className='relative z-10 group'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500'></div>
          <img 
            src={profilePic} 
            alt='Ravikumar Badami - Full Stack Developer' 
            className='rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105'
          />
          
          {/* Floating tech icons */}
          <div className='absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-full p-2 md:p-3 shadow-lg animate-float'>
            <svg className="w-4 h-4 md:w-6 md:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
            </svg>
          </div>
          
          <div className='absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-full p-2 md:p-3 shadow-lg animate-float' style={{animationDelay: '1s'}}>
            <svg className="w-4 h-4 md:w-6 md:h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightHero;
