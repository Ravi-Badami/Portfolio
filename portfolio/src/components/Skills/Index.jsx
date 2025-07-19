import Card from './Card/Card';
import js from '../../../public/image/JavaScript-Symbol.png';
import html from '../../../public/image/html5-logo-31813.png';
import css from '../../../public/image/css.png';
import react from '../../../public/image/react.png';
import redux from '../../../public/image/redux.png';
import tailwind from '../../../public/image/tailwind.png';

const Skills = () => {
  const skillsData = [
    { icon: js, name: 'JavaScript' },
    { icon: html, name: 'HTML5' },
    { icon: css, name: 'CSS3' },
    { icon: react, name: 'React' },
    { icon: redux, name: 'Redux' },
    { icon: tailwind, name: 'Tailwind CSS' },
  ];

  return (
    <section className='py-20 w-full' id='skills'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-extrabold text-gray-900 mb-4'>
            Skills
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full'></div>
          <p className='text-xl text-gray-600 mt-6 max-w-2xl mx-auto'>
            Technologies and tools I work with to create amazing web experiences
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className='transform hover:scale-105 transition-transform duration-300'
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              <Card js={skill.icon} skill={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
