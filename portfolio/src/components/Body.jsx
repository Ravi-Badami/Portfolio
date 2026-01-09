import React from 'react';
import Header from './Header/Index';
import Hero from './Hero/Index';
import Skills from './Skills/Index';
import Experience from './Experience/Index';
import Projects from './Projects/Index';
import Contact from './Contact/Index';

const Body = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Body;