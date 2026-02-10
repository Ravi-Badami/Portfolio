import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GithubContributions = () => {
  return (
    <section className="py-8 pb-12 px-4 md:px-8 lg:px-12 bg-white flex flex-col items-center border-t border-zinc-100">
      <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-8 self-start w-full">Days I Code</h2>
      <div className="w-full flex justify-center overflow-x-auto">
        <GitHubCalendar 
          username="Ravi-Badami" 
          year="last"
          colorScheme="light"
          blockMargin={4}
          blockSize={14}
          fontSize={14}
          style={{
            color: '#18181b',
          }}
        />
      </div>
    </section>
  );
};

export default GithubContributions;
