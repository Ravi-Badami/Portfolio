import LeftHero from './LeftHero';
import RightHero from './RightHero';

const Hero = () => {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-10 md:py-0 w-full mt-16 md:mt-20'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <div className='bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-6 md:p-12'>
          <div className='flex flex-col lg:flex-row items-center justify-between min-h-[60vh] lg:min-h-[70vh]'>
            <LeftHero />
            <RightHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
