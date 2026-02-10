import React from 'react';
import Hero from './Hero/Index';
import Experience from './Experience/Index';
import Projects from './Projects/Index';
import Skills from './Skills/Index';
import Contact from './Contact/Index';


const Body = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <Hero />
      <Projects />
      <Experience />
      {/* Skills and Available to Hire side by side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <Skills />
        <Contact />
      </div>

    </div>
  );
};

export default Body;