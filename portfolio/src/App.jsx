import { useState, useEffect } from 'react';
import Body from './components/Body';

// Loading Component
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-purple-600 rounded-full animate-ping mx-auto"></div>
        </div>
        <h2 className="text-2xl font-bold gradient-text mb-2">Ravikumar Badami</h2>
        <p className="text-gray-600">Loading Portfolio...</p>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
