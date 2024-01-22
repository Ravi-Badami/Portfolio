import LeftHero from './LeftHero';
import RightHero from './RightHero';

const Hero = () => {
  return (
    <div
      id='about'
      className='md:h-[100%] py-10  md:py-0 md:mt-20  w-[90%] flex  justify-center borde border-black bg-sky-200 rounded-xl '>
      <div className=' h-[40%] md:h-[80%] borderr flex justify-center items-center borderr-black w-full'>
        <LeftHero />
        <RightHero />
      </div>
    </div>
  );
};

export default Hero;
{
  /* <div className='borderr-2 shadow-xl shadow-gray-400 borderr-black w-[95%] md:w-[80%] mt-2 rounded-3xl md:h-[80%] flex items-center justify-center'>
        <div className='left'></div>
        <div className='right'></div>
      </div> */
}
