import React, { useState } from 'react';
import { contactData } from '../../utils/content';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-4 pb-4 md:pt-6 md:pb-6 px-4 md:px-8 lg:px-12">
      <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-6">Available to Hire</h2>
      
      <div className="md:max-w-md">
        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">Status: Open to Opportunities</span>
          </div>
          
          {/* Platform Links */}
          <div className="grid grid-cols-2 gap-3">
            <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors text-sm">
              GitHub
            </a>
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors text-sm">
              LinkedIn
            </a>
            <a href={contactData.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors text-sm">
              Twitter
            </a>
            <a href={contactData.hashnode} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors text-sm">
              Blog
            </a>
            <div className="col-span-2 flex items-center gap-2">
              <span className="text-zinc-300 text-sm truncate">{contactData.email}</span>
              <button 
                onClick={handleCopyEmail}
                className="text-zinc-400 hover:text-white transition-colors flex-shrink-0"
                aria-label="Copy Email"
              >
                {copied ? (
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                )}
              </button>
            </div>
            <a href={contactData.resume} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors text-sm">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
