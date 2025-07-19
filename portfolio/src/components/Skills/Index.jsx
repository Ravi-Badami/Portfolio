import Card from './Card/Card';
import js from '../../../public/image/JavaScript-Symbol.png';
import html from '../../../public/image/html5-logo-31813.png';
import css from '../../../public/image/css.png';
import react from '../../../public/image/react.png';
import redux from '../../../public/image/redux.png';
import tailwind from '../../../public/image/tailwind.png';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { icon: react, name: 'React', level: 95, experience: '3+ years' },
        { icon: js, name: 'JavaScript', level: 92, experience: '3+ years' },
        { icon: tailwind, name: 'Tailwind CSS', level: 90, experience: '2+ years' },
        { icon: html, name: 'HTML5', level: 98, experience: '3+ years' },
        { icon: css, name: 'CSS3', level: 95, experience: '3+ years' },
        { icon: redux, name: 'Redux', level: 85, experience: '2+ years' }
      ]
    },
    {
      title: 'Backend & Database',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 88, experience: '2+ years', icon: '🟢' },
        { name: 'Express.js', level: 85, experience: '2+ years', icon: '🚀' },
        { name: 'MongoDB', level: 82, experience: '2+ years', icon: '🍃' },
        { name: 'PostgreSQL', level: 78, experience: '1+ years', icon: '🐘' },
        { name: 'Firebase', level: 85, experience: '2+ years', icon: '🔥' },
        { name: 'REST APIs', level: 90, experience: '2+ years', icon: '🔗' }
      ]
    },
    {
      title: 'Tools & Technologies',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 92, experience: '3+ years', icon: '📱' },
        { name: 'Docker', level: 75, experience: '1+ years', icon: '🐳' },
        { name: 'AWS', level: 70, experience: '1+ years', icon: '☁️' },
        { name: 'Webpack', level: 80, experience: '2+ years', icon: '📦' },
        { name: 'Jest', level: 78, experience: '1+ years', icon: '🧪' },
        { name: 'Figma', level: 85, experience: '2+ years', icon: '🎨' }
      ]
    }
  ];

  const achievements = [
    { number: '25+', label: 'Projects Completed', icon: '🚀' },
    { number: '3+', label: 'Years Experience', icon: '⏰' },
    { number: '15+', label: 'Technologies Mastered', icon: '💻' },
    { number: '99%', label: 'Client Satisfaction', icon: '⭐' }
  ];

  return (
    <section className='py-20 w-full bg-gradient-to-b from-white to-gray-50' id='skills'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-black text-gray-900 mb-6'>
            Technical <span className='gradient-text'>Expertise</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8'></div>
          <p className='text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium'>
            A comprehensive toolkit of modern technologies and frameworks, 
            constantly evolving to deliver cutting-edge solutions.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
          {achievements.map((achievement, index) => (
            <div key={achievement.label} className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100'>
              <div className='text-4xl mb-3'>{achievement.icon}</div>
              <div className='text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2'>
                {achievement.number}
              </div>
              <div className='text-gray-600 font-semibold'>{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className='space-y-16'>
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className='relative'>
              {/* Category Header */}
              <div className='text-center mb-12'>
                <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>{category.title}</h3>
                <div className={`w-20 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
              </div>

              {/* Skills Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group'
                    style={{
                      animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`,
                      animation: 'fadeInUp 0.6s ease-out forwards',
                      opacity: 0
                    }}
                  >
                    {/* Skill Header */}
                    <div className='flex items-center gap-4 mb-4'>
                      {typeof skill.icon === 'string' ? (
                        <div className='text-3xl'>{skill.icon}</div>
                      ) : (
                        <img src={skill.icon} alt={skill.name} className='w-12 h-12 object-contain' />
                      )}
                      <div>
                        <h4 className='font-bold text-gray-900 text-lg'>{skill.name}</h4>
                        <p className='text-sm text-gray-500'>{skill.experience}</p>
                      </div>
                    </div>

                    {/* Skill Level Bar */}
                    <div className='mb-3'>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-sm font-semibold text-gray-700'>Proficiency</span>
                        <span className='text-sm font-bold text-gray-900'>{skill.level}%</span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            transform: 'translateX(-100%)',
                            animation: `slideInBar 1.5s ease-out ${(categoryIndex * 6 + skillIndex) * 0.1 + 0.5}s forwards`
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className='flex justify-between items-center'>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${category.color}`}>
                        {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                      </span>
                      <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='text-2xl'>🚀</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-20'>
          <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white'>
            <h3 className='text-3xl md:text-4xl font-bold mb-4'>Ready to Build Something Amazing?</h3>
            <p className='text-xl mb-8 opacity-90'>Let's discuss how these skills can help bring your vision to life.</p>
            <button 
              onClick={() => document.getElementById('messages')?.scrollIntoView({ behavior: 'smooth' })}
              className='bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
