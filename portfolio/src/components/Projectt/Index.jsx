import swiggy from '../../../public/image/Projects/swiggy.png';
import SwiggyClone from './Projects/SwiggyClone';
const Project = () => {
  return (
    <div className=' w-screen mt-10 text-center h-'>
      <section className='text-gray-600 body-font '>
        <div className=' px-5 py-24 mx-auto flex  flex-col gap-3'>
          <SwiggyClone Project={swiggy} name={'Tajbite'} />
          {/* <SwiggyClone Project={swiggy} name={'Ethonest'} /> */}
        </div>
      </section>
    </div>
  );
};

export default Project;
