import { useState, useEffect } from 'react';
import Body from './components/Body';

// Enhanced Loading Component
const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState('');
  const fullText = 'Ravikumar Badami';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setLoadingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="text-center relative z-10">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black mx-auto mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              RB
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 blur-xl mx-auto animate-pulse"></div>
          </div>
        </div>
        
        {/* Animated Name */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 min-h-[3rem] flex items-center justify-center">
            <span className="gradient-text">{loadingText}</span>
            <span className="animate-pulse ml-1 text-blue-600">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-semibold">Senior Full Stack Developer</p>
        </div>
        
        {/* Enhanced Loading Animation */}
        <div className="relative mb-6">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-pulse transform origin-left animate-expand"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-600 text-lg font-medium animate-pulse">
          Crafting Digital Excellence...
        </p>
        
        {/* Tech Stack Icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <div className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float">
            <span className="text-lg">⚛️</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
            <span className="text-lg">🟢</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
            <span className="text-lg">☁️</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '1.5s'}}>
            <span className="text-lg">🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Enhanced loading time for better experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
