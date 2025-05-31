
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">
              Sai Kiran
            </h1>
            
            <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-blue-100 mb-2 font-semibold">
                Full Stack Developer
              </p>
              <p className="text-lg text-blue-200">
                & Software Architect
              </p>
            </div>
            
            <p className="text-lg text-blue-100 mb-8 max-w-2xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
              Passionate about algorithms, innovative problem-solving, and creating exceptional digital experiences. 
              Currently pursuing B.Tech at Avanthi Institute and actively seeking opportunities 
              to contribute to meaningful projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View My Work
                <ArrowRight size={20} />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get In Touch
              </Button>
            </div>

            {/* Core Skills */}
            <div className="mt-10 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-blue-200 font-semibold mb-4">Core Technologies</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 cursor-default"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div
            className="flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: '0.3s', position: 'relative', left: '-20%' }}
          >
            <div className="relative">
              {/* Replace with your actual image */}
              <img
                src="./sandeep.jpg" // <-- REPLACE THIS WITH YOUR PHOTO URL
                alt="Sai Kiran - Full Stack Developer"
                className="w-80 h-[23.4rem] object-cover rounded-2xl border border-white/30 shadow-2xl hover:scale-105 transition-all duration-300"
              />
              {/* Floating Elements */}
              {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
