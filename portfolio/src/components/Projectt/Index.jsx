import swiggy from '../../../public/image/Projects/swiggy.png';
import netflixgpt from '../../../public/image/Projects/netflixgpt.png';
import SwiggyClone from './Projects/SwiggyClone';
const Project = () => {
  // if (!swiggy || !netflixgpt) return;
  console.log(swiggy);
  return (
    <div className=' w-screen mt-10 text-center h-' id='project'>
      <section className='text-gray-600 body-font '>
        <div className=' px-5 py-24 mx-auto flex  flex-col gap-3'>
          <div className='text-7xl font-extrabold text-black'>Projects</div>
          <SwiggyClone
            Project={swiggy}
            name={'Tajbite'}
            github={'https://github.com/Ravi-Badami/Swiggy-clone'}
            link={'https://tajbite.vercel.app/'}
          />
          <SwiggyClone
            Project={netflixgpt}
            name={'NetFlixGPTpro'}
            github={'https://github.com/Ravi-Badami/NetFlixGPT'}
            link={'https://netflixgptpro.vercel.app/'}
          />
        </div>
      </section>
    </div>
  );
};

export default Project;
