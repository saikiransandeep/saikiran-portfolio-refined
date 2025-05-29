
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="font-playfair text-2xl font-bold mb-2">Sai Kiran</h3>
            <p className="font-inter text-gray-300">
              Full Stack Developer & Software Architect
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-300 font-inter">
            <span>Made with</span>
            <Heart className="text-accent animate-pulse" size={16} />
            <span>and</span>
            <Code className="text-accent" size={16} />
            <span>by Sai Kiran</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="font-inter text-gray-400 text-sm">
              © {new Date().getFullYear()} Sai Kiran. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
