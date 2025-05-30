
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center">
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-1">Sai Kiran</h3>
            <p className="text-gray-300 text-xs">
              Full Stack Developer & Software Architect
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-1 text-gray-300 text-xs">
            <span>Made with</span>
            <Heart className="text-red-500 animate-pulse" size={12} />
            <span>and</span>
            <Code className="text-blue-400" size={12} />
            <span>by Sai Kiran</span>
          </div>
          
          <div className="mt-2 pt-2 border-t border-gray-700">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Sai Kiran. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
