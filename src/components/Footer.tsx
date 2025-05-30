
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Sai Kiran</h3>
            <p className="text-gray-300">
              Full Stack Developer & Software Architect
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="text-red-500 animate-pulse" size={16} />
            <span>and</span>
            <Code className="text-blue-400" size={16} />
            <span>by Sai Kiran</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sai Kiran. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
