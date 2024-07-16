import React, { useEffect, useState } from 'react';
import './index.css'; // Create and import a CSS file for custom styling

const Interests = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay to trigger the animation
  }, []);

  return (
    <div className={`bg-white flex flex-col text-black rounded p-6 border border-gray-300 shadow-lg transition-all duration-1000 ease-in-out ${isLoaded ? 'animate-wrap-down' : 'opacity-0'}`}>
      <h1 className="text-2xl font-semibold mb-4">Interested In:</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>Software Development</li>
        <li>Problem Solving</li>
        <li>System Design</li>
        <li>DevOps</li>
      </ul>
    </div>
  );
};

export default Interests;
