import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'project', label: 'Work' },
    { id: 'messages', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <nav className='container mx-auto'>
          <div className='flex items-center justify-between h-20'>
            
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('about')}
              className='group flex items-center gap-3'
            >
              <div className='w-10 h-10 accent-bg text-white rounded-lg flex items-center justify-center font-mono font-bold text-lg group-hover:scale-105 transition-transform'>
                RB
              </div>
              <div className='hidden sm:block'>
                <div className='font-bold text-gray-900 text-lg'>Ravikumar Badami</div>
                <div className='text-sm text-gray-600'>Full Stack Developer</div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-1'>
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'accent-bg text-white'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className='hidden md:block'>
              <a
                href="mailto:ravikumar.badami@email.com"
                className='btn-primary'
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
            >
              <div className='w-6 h-6 flex flex-col justify-center items-center space-y-1'>
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className='md:hidden border-t border-gray-200 bg-white'>
              <div className='py-4 space-y-2'>
                {navigationItems.map((item) => {
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? 'accent-bg text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                
                <div className='pt-4 border-t border-gray-200'>
                  <a
                    href="mailto:ravikumar.badami@email.com"
                    className='btn-primary w-full justify-center'
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          )}
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
