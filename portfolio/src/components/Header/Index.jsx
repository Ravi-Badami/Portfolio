import HomeIcon from './components/HomeIcon';
import Message from './components/Message';
import Settings from './components/Settings';
import User from './components/User';

const Header = () => {
  return (
    <div className='text-red-500'>
      <div className='flex flex-col items-center  w-screen'>
        <div className='border border-gray-300 py-3  md:w-2/3 flex justify-between gap-1 shadow-xl rounded-md'>
          <HomeIcon />
          <Message />
          <User />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Header;
