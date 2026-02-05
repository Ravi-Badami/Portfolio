import React from 'react';
import { Link } from 'react-scroll';
import { heroData, contactData, skillsData } from '../../utils/content';

const Hero = () => {
  return (
    <section id="home" className="pt-4 pb-4 md:pt-6 md:pb-6 px-4 md:px-8 lg:px-12">
      {/* Profile Picture + Name */}
      <div className="flex items-center gap-4">
        <img 
          src="/image/profile.png" 
          alt="Ravikumar Badami" 
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-zinc-200"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">Ravikumar Badami</h1>
      </div>
    </section>
  );
};

export default Hero;
