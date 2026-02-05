
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm shadow-lg w-full">
      <div className="container mx-auto px-4 py-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          Alfa Edit
        </h1>
        <p className="text-gray-400 mt-2 text-lg">AI-Powered Text-to-Image Generator</p>
      </div>
    </header>
  );
};

export default Header;
