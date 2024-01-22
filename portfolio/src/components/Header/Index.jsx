import HomeIcon from './components/HomeIcon';
import Message from './components/Message';
import Settings from './components/Settings';
import User from './components/User';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // You can adjust this based on your preference
      });
    }
  };
  return (
    <div className='text-red-500 fixed z-50'>
      <div className='flex flex-col items-center  w-screen'>
        <div className='border border-gray-300 py-3 bg-opacity-80 backdrop-filter backdrop-blur-lg md:w-2/3 flex justify-between gap-1 shadow-xl rounded-md'>
          {/* <HomeIcon /> */}
          <div onClick={() => scrollToSection('messages')}>
            <Message />
          </div>
          <div onClick={() => scrollToSection('about')}>
            <User />
          </div>
          <div onClick={() => scrollToSection('project')}>
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
