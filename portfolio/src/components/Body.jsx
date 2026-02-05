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
      <Skills />
      <Contact />
    </div>
  );
};

export default Body;