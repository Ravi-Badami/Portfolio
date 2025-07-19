import profilePic from '../../../public/image/profile.png';

const RightHero = () => {
  const techStack = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-indigo-600' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-orange-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-emerald-600' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-600' }
  ];

  return (
    <div className='w-full lg:w-1/2 flex justify-center items-center relative'>
      <div className='relative opacity-0 animate-slideInRight'>
        {/* Animated background grid */}
        <div className='absolute inset-0 w-96 h-96 opacity-10'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl transform rotate-6 animate-pulse'></div>
          <div className='absolute inset-4 bg-gradient-to-l from-cyan-400 via-blue-500 to-purple-600 rounded-3xl transform -rotate-6 animate-pulse' style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Central profile area */}
        <div className='relative z-10 group'>
          {/* Glowing backdrop */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse group-hover:opacity-50 transition-all duration-700'></div>
          
          {/* Profile image with enhanced styling */}
          <div className='relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-full'>
            <img 
              src={profilePic} 
              alt='Ravikumar Badami - Senior Full Stack Developer' 
              className='rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover bg-white transition-all duration-700 group-hover:scale-105 group-hover:rotate-2'
            />
          </div>
          
          {/* Professional badges */}
          <div className='absolute -top-6 -right-6 bg-white rounded-2xl px-4 py-2 shadow-2xl animate-float border border-gray-100'>
            <div className='text-2xl mb-1'>🚀</div>
            <div className='text-xs font-bold text-gray-800'>Senior Dev</div>
          </div>
          
          <div className='absolute -bottom-6 -left-6 bg-white rounded-2xl px-4 py-2 shadow-2xl animate-float border border-gray-100' style={{animationDelay: '1s'}}>
            <div className='text-2xl mb-1'>💼</div>
            <div className='text-xs font-bold text-gray-800'>Available</div>
          </div>
        </div>
        
        {/* Floating tech stack indicators */}
        {techStack.map((tech, index) => {
          const positions = [
            { top: '10%', right: '15%' },
            { top: '25%', left: '10%' },
            { bottom: '35%', right: '5%' },
            { bottom: '15%', left: '15%' },
            { top: '50%', right: '-10%' },
            { top: '35%', left: '-5%' }
          ];
          
          return (
            <div
              key={tech.name}
              className={`absolute z-20 bg-white rounded-xl p-3 shadow-xl border border-gray-100 transform hover:scale-110 transition-all duration-300 animate-float group`}
              style={{
                ...positions[index],
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center text-white text-xl mb-2 group-hover:rotate-12 transition-transform duration-300`}>
                {tech.icon}
              </div>
              <div className='text-xs font-bold text-gray-800 text-center'>{tech.name}</div>
            </div>
          );
        })}
        
        {/* Achievement indicators */}
        <div className='absolute top-1/2 -right-20 transform -translate-y-1/2 space-y-4'>
          <div className='bg-gradient-to-r from-green-400 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce'>
            ✅ Available
          </div>
          <div className='bg-gradient-to-r from-blue-400 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce' style={{animationDelay: '0.5s'}}>
            🎯 Remote Ready
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightHero;
