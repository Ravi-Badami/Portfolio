import Contact from './Contact/Index';
import Header from './Header/Index';
import Hero from './Hero/Index';
import Project from './Projectt/Index';
import Skills from './Skills/Index';

const Body = () => {
  return (
    <div className='p-4 flex flex-col items-center overflow-x-hidden '>
      <Header />
      <Hero />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default Body;
