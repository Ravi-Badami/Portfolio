import LeftHero from './LeftHero';
import RightHero from './RightHero';

const Hero = () => {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-20 md:py-0 w-full mt-16 md:mt-20'>
      <div className='w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16'>
        <div className='bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20'>
          <div className='flex flex-col lg:flex-row items-center justify-between min-h-[60vh] lg:min-h-[70vh] gap-8 lg:gap-12 xl:gap-16'>
            <LeftHero />
            <RightHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
