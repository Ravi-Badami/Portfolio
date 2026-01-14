import React from 'react';
import HomeIcon from './components/HomeIcon';
import ExperienceIcon from './components/ExperienceIcon';
import User from './components/User';
import Settings from './components/Settings';
import Message from './components/Message';

const Header = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-full px-2 md:px-6 py-3 md:py-4 flex items-center gap-1 md:gap-8 z-50 ring-1 ring-zinc-900/5 transition-transform duration-300 hover:translate-y-1 w-[95%] max-w-fit justify-between md:justify-center">
      <a href="#about" className="text-zinc-500 hover:text-red-600 p-1.5 md:p-2 hover:bg-zinc-100 rounded-2xl transition-transform duration-300 hover:scale-110" aria-label="Home">
        <HomeIcon />
      </a>
      <a href="#skills" className="text-zinc-500 hover:text-red-600 p-1.5 md:p-2 hover:bg-zinc-100 rounded-2xl transition-transform duration-300 hover:scale-110" aria-label="Skills">
        <User />
      </a>
      <a href="#experience" className="text-zinc-500 hover:text-red-600 p-1.5 md:p-2 hover:bg-zinc-100 rounded-2xl transition-transform duration-300 hover:scale-110" aria-label="Experience">
        <ExperienceIcon />
      </a>
      <a href="#project" className="text-zinc-500 hover:text-red-600 p-1.5 md:p-2 hover:bg-zinc-100 rounded-2xl transition-transform duration-300 hover:scale-110" aria-label="Projects">
        <Settings />
      </a>
      <a href="#contact" className="text-zinc-500 hover:text-red-600 p-1.5 md:p-2 hover:bg-zinc-100 rounded-2xl transition-transform duration-300 hover:scale-110" aria-label="Contact">
        <Message />
      </a>
    </nav>
  );
};

export default Header;
