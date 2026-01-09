import React from 'react';
// import profileImg from '../../assets/profile.jpg'; // Image missing, using fallback

// Tech Stack Icons (using text/emoji if icons missing, or generic placeholders)
import { heroData } from '../../utils/content';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* Cell 1: Intro Text (Span 2 cols) */}
        <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 border border-zinc-200 flex flex-col justify-center shadow-sm">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 mb-6 font-display tracking-tight">
            {heroData.intro}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-lg leading-relaxed">
            {heroData.description}
          </p>
        </div>

        {/* Cell 2: Profile Photo */}
        <div className="relative group overflow-hidden rounded-3xl border border-zinc-200 aspect-square md:aspect-auto">
          {/* Placeholder for image - using a colored div if image missing */}
          <div className="absolute inset-0 bg-zinc-200 flex items-center justify-center text-zinc-400">
             <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-300 flex items-center justify-center">
                <span className="text-9xl font-bold text-zinc-400 opacity-20">{heroData.profileInitials}</span>
             </div> 
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-white font-medium">Ravikumar Badami</span>
          </div>
        </div>

        {/* Cell 3: Status (Available for hire) */}
        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-50" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-zinc-400 font-mono text-sm uppercase tracking-wider">Status</span>
            </div>
            <p className="text-white text-2xl font-semibold">{heroData.status}</p>

          </div>
          <button className="mt-8 self-start px-6 py-2 bg-white text-zinc-900 rounded-full font-medium hover:scale-105 transition-transform w-full md:w-auto">
            Contact Me
          </button>
        </div>

        {/* Cell 4: Tech Stack */}
        <div className="md:col-span-2 bg-zinc-50 rounded-3xl p-8 md:p-10 border border-zinc-200 flex flex-col justify-between">
          <span className="text-zinc-400 font-mono text-sm uppercase tracking-wider mb-6 block">The Stack</span>
          <div className="flex flex-wrap gap-4 md:gap-8 items-center opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text placeholders for icons to be safe */}
             <span className="text-2xl font-bold text-zinc-800">React</span>
             <span className="text-2xl font-bold text-zinc-800">Flutter</span>
             <span className="text-2xl font-bold text-zinc-800">Node.js</span>
             <span className="text-2xl font-bold text-zinc-800">Tailwind</span>
             <span className="text-2xl font-bold text-zinc-800">Hono</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
