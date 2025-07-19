import Contact from './Contact/Index';
import Header from './Header/Index';
import Hero from './Hero/Index';
import Project from './Projectt/Index';
import Skills from './Skills/Index';
import About from './About/Index';

const Body = () => {
  return (
    <div className='flex flex-col items-center overflow-x-hidden min-h-screen bg-gradient-to-b from-gray-50 to-white w-full'>
      <Header />
      <main className='w-full'>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <footer className='w-full bg-gray-900 text-white text-center py-8 mt-20'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <p>&copy; 2024 Ravikumar Badami. All rights reserved.</p>
          <p className='text-sm text-gray-400 mt-2'>Built with React, Vite & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Body;
