import Contact from './Contact/Index';
import Header from './Header/Index';
import Hero from './Hero/Index';
import Project from './Projectt/Index';
import Skills from './Skills/Index';

const Body = () => {
  return (
    <div className='flex flex-col items-center overflow-x-hidden min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Header />
      <main className='w-full max-w-7xl mx-auto px-4'>
        <Hero />
        <Skills />
        <Project />
        <Contact />
      </main>
      <footer className='w-full bg-gray-900 text-white text-center py-8 mt-20'>
        <p>&copy; 2024 Ravikumar Badami. All rights reserved.</p>
        <p className='text-sm text-gray-400 mt-2'>Built with React, Vite & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Body;
