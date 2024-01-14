import Card from './Card/Card';
import js from '../../../public/image/JavaScript-Symbol.png';
import html from '../../../public/image/html5-logo-31813.png';
import css from '../../../public/image/css.png';
import react from '../../../public/image/react.png';
import redux from '../../../public/image/redux.png';
import tailwind from '../../../public/image/tailwind.png';
const Skills = () => {
  return (
    <div className=' border-black w-[100%] md:w-[50%]'>
      <div className='w-[100%] flex justify-center p-10'>
        <p className='text-6xl font-extrabold'>Skills</p>
      </div>
      <div className='flex gap-5  md:gap-10 h-auto justify-center  flex-wrap '>
        <div className='md:w-[40%] h-[50%] w-[100%]'>
          <Card js={js} />
        </div>
        <div className='md:w-[40%]  w-[100%]'>
          <Card js={html} />
        </div>
        <div className='md:w-[40%]  w-[100%]'>
          <Card js={css} />
        </div>
        <div className='md:w-[40%]  w-[100%]'>
          <Card js={react} />
        </div>
        <div className='md:w-[40%]  w-[100%]'>
          <Card js={redux} />
        </div>
        <div className='md:w-[40%]  w-[100%]'>
          <Card js={tailwind} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
