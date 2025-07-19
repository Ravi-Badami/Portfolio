import { useState, useEffect } from 'react';
import Message from './components/Message';
import Settings from './components/Settings';
import User from './components/User';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Settings },
    { id: 'project', label: 'Projects', icon: Settings },
    { id: 'messages', label: 'Contact', icon: Message }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a 
        href="#about" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-[70]"
      >
        Skip to main content
      </a>
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <nav className='max-w-7xl mx-auto px-4' role="navigation" aria-label="Main navigation">
          <div className='flex items-center justify-between h-16 md:h-20'>
            {/* Logo */}
            <div className='flex items-center'>
              <button 
                onClick={() => scrollToSection('about')}
                className='flex items-center gap-3 group'
              >
                <div className='w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl group-hover:scale-110 transition-transform duration-300'>
                  RB
                </div>
                <div className='hidden md:block'>
                  <div className='font-bold text-gray-900 text-lg'>Ravikumar Badami</div>
                  <div className='text-sm text-gray-600'>Full Stack Developer</div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-1'>
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    aria-label={`Go to ${item.label} section`}
                  >
                    <IconComponent />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className='hidden md:flex items-center gap-4'>
              <a
                href="mailto:ravikumar.badami@email.com"
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg'
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
              aria-label="Toggle mobile menu"
            >
              <div className='w-6 h-6 flex flex-col justify-center items-center'>
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}>
            <div className='space-y-2 pt-4 border-t border-gray-200'>
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              {/* Mobile CTA */}
              <div className='pt-4 border-t border-gray-200'>
                <a
                  href="mailto:ravikumar.badami@email.com"
                  className='w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold'
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className='fixed inset-0 bg-black/20 z-40 md:hidden'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
