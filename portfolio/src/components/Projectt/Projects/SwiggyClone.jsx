import Github from '../Buttons/Github';
import Ridirect from '../Buttons/Ridirect';
const SwiggyClone = ({ Project, name }) => {
  return (
    <div className='lg:w-2/3 flex  p-20 bg-gray-200 rounded-xl flex-col sm:flex-row sm:items-center items-start mx-auto'>
      <h1 className='flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900'>
        <div className='swiggy cline text-start flex-col flex gap-5'>
          <p className='text-3xl font-extrabold'>{name}</p>
          <img src={Project} alt='' className='rounded-3xl' />
        </div>
      </h1>
      <div className='flex flex-col gap-4'>
        <button className='flex-shrink-0 text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg mt-10 sm:mt-0'>
          <Github />
        </button>
        <button className='flex-shrink-0 text-white bg-gray-600 border-0 py-4 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg mt-10 sm:mt-0'>
          <Ridirect />
        </button>
      </div>
    </div>
  );
};

export default SwiggyClone;
