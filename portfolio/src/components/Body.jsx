import Contact from './Contact/Index';
import Header from './Header/Index';
import Hero from './Hero/Index';
import Project from './Projectt/Index';
import Skills from './Skills/Index';
import About from './About/Index';

const Body = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <footer className='bg-gray-900 text-white text-center section-padding'>
        <div className='container'>
          <div className='border-t border-gray-700 pt-8'>
            <p className='text-body text-gray-300'>
              &copy; 2024 Ravikumar Badami. All rights reserved.
            </p>
            <p className='text-sm text-gray-400 mt-2 font-mono'>
              Crafted with precision and passion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Body;
