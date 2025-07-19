import Message from './components/Message';
import Settings from './components/Settings';
import User from './components/User';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a 
        href="#about" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-[60]"
      >
        Skip to main content
      </a>
      
      <header className='fixed top-0 left-0 right-0 z-50'>
        <nav className='flex flex-col items-center w-full pt-4' role="navigation" aria-label="Main navigation">
          <div className='border border-gray-300 py-3 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg md:w-2/3 flex justify-between gap-1 shadow-xl rounded-md px-4'>
            <button 
              onClick={() => scrollToSection('messages')}
              className='cursor-pointer transition-transform hover:scale-110 p-2 rounded-lg hover:bg-gray-100'
              aria-label="Go to contact section"
            >
              <Message />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className='cursor-pointer transition-transform hover:scale-110 p-2 rounded-lg hover:bg-gray-100'
              aria-label="Go to about section"
            >
              <User />
            </button>
            <button 
              onClick={() => scrollToSection('project')}
              className='cursor-pointer transition-transform hover:scale-110 p-2 rounded-lg hover:bg-gray-100'
              aria-label="Go to projects section"
            >
              <Settings />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
