import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { heroData, contactData } from '../../utils/content';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-32 pb-16 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* Cell 1: Intro Text (Span 2 cols) */}
        <div className="col-span-2 bg-white rounded-3xl p-6 md:p-12 border border-zinc-200 flex flex-col justify-center shadow-sm">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 mb-6 font-display tracking-tight">
            {heroData.intro}
          </h1>
          <p className="text-lg md:text-2xl text-zinc-500 max-w-lg leading-relaxed">
            {heroData.description}
          </p>
        </div>

        {/* Cell 2: Profile Photo */}
        <div className="relative group overflow-hidden rounded-3xl border border-zinc-200 aspect-square md:aspect-auto">
          {/* Placeholder for image - using a colored div if image missing */}
          <img 
            src="/image/profile.png" 
            alt="Ravikumar Badami" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-white font-medium">Ravikumar Badami</span>
          </div>
        </div>

        {/* Cell 3: Status */}
        <div className="bg-zinc-900 rounded-3xl p-6 md:p-8 border border-zinc-800 flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-50" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-zinc-400 font-mono text-sm uppercase tracking-wider">Status</span>
            </div>
            <p className="text-white text-lg md:text-2xl font-semibold mb-2">{heroData.status}</p>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-zinc-300 text-sm">Bangalore, India</span>
            </div>
            
            <div className="flex flex-col gap-4">
               {/* Social Icons Row */}
              <div className="flex flex-wrap gap-3">
                <a href={heroData.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-colors border border-zinc-700 hover:border-zinc-600" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-colors border border-zinc-700 hover:border-zinc-600" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
                <a href={contactData.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-colors border border-zinc-700 hover:border-zinc-600" aria-label="X (Twitter)">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href={contactData.hashnode} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-colors border border-zinc-700 hover:border-zinc-600" aria-label="Hashnode">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                </a>
              </div>
              
              {/* Email Address with Copy */}
              <div className="flex items-center gap-2 group">
                <a 
                  href={`mailto:${contactData.email}`} 
                  className="flex-1 flex items-center gap-2 p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-colors border border-zinc-700 hover:border-zinc-600"
                >
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-zinc-300 text-sm font-medium tracking-wide group-hover:text-white transition-colors break-all">
                    {contactData.email}
                  </span>
                </a>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 bg-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors border border-zinc-700 hover:border-zinc-600 relative"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
        {/* Cell 4: Tech Stack */}
        <div className="col-span-2 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl p-6 md:p-10 border border-zinc-200 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 p-6 opacity-5">
             <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
          </div>
          
          <span className="text-zinc-400 font-mono text-sm uppercase tracking-wider mb-6 block relative z-10">The Stack</span>
          
          <div className="flex flex-wrap gap-3 relative z-10">
             {['JavaScript', 'React', 'Flutter', 'Node.js', 'Express.js', 'Tailwind CSS', 'MongoDB', 'Java/Quarkus', 'Supabase'].map((tech) => (
                <div key={tech} className="bg-white px-5 py-3 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 cursor-default">
                  <span className="font-semibold text-zinc-700">{tech}</span>
                </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
