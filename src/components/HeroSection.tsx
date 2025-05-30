
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Sai Kiran
            </h1>
            
            <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-gray-700 mb-2 font-semibold">
                Full Stack Developer
              </p>
              <p className="text-lg text-gray-600">
                & Software Architect
              </p>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
              Passionate about algorithms, innovative problem-solving, and creating exceptional digital experiences. 
              Currently pursuing B.Tech at Avanthi Institute (2022-2026) and actively seeking opportunities 
              to contribute to meaningful projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View My Work
                <ArrowRight size={20} />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Side - Photo (moved 5% to the right) */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s', marginLeft: '5%' }}>
            <div className="relative">
              <div className="w-80 h-60 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-2xl border border-blue-300 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="w-72 h-52 bg-gradient-to-br from-blue-300/50 to-purple-300/50 rounded-xl flex items-center justify-center border border-blue-200">
                  <span className="text-6xl font-bold text-gray-700">SK</span>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
