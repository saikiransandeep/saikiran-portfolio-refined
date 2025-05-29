
import React from 'react';
import { ArrowRight, User, Briefcase, Code, Settings, Mail, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationBoxes = [
    { icon: Home, label: 'Home', section: 'home', color: 'from-purple-500 to-pink-500' },
    { icon: User, label: 'About', section: 'about', color: 'from-blue-500 to-cyan-500' },
    { icon: Briefcase, label: 'Portfolio', section: 'portfolio', color: 'from-green-500 to-teal-500' },
    { icon: Code, label: 'Skills', section: 'skills', color: 'from-orange-500 to-red-500' },
    { icon: Settings, label: 'Services', section: 'services', color: 'from-indigo-500 to-purple-500' },
    { icon: Mail, label: 'Contact', section: 'contact', color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced Profile Section */}
          <div className="relative mb-8">
            <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-full flex items-center justify-center animate-scale-in shadow-2xl border-4 border-white/20">
              <div className="w-32 h-32 bg-gradient-to-br from-white/90 to-white/70 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-playfair">SK</span>
              </div>
            </div>
            {/* Floating particles around photo */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            </div>
            <div className="absolute top-10 right-1/4">
              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <div className="absolute bottom-10 left-1/4">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Enhanced Name and Title */}
          <div className="mb-8">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4 animate-slide-up tracking-wide">
              SAI KIRAN
            </h1>
            
            <div className="relative inline-block">
              <p className="font-inter text-2xl md:text-3xl font-semibold text-purple-200 mb-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Full Stack Developer
              </p>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
            </div>
            
            <p className="font-inter text-xl text-purple-100/80 mt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              & Software Architect
            </p>
          </div>
          
          <p className="font-inter text-lg text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
            🚀 Passionate about <span className="text-purple-300 font-semibold">algorithms</span>, <span className="text-cyan-300 font-semibold">innovative problem-solving</span>, and creating <span className="text-pink-300 font-semibold">exceptional digital experiences</span> that make a difference
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-12" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full font-inter font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl text-lg"
            >
              Explore My Work
              <ArrowRight size={20} />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white px-10 py-4 rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105 shadow-xl text-lg backdrop-blur-sm bg-white/10"
            >
              Let's Connect
            </Button>
          </div>

          {/* Core Skills */}
          <div className="animate-slide-up mb-12" style={{ animationDelay: '0.8s' }}>
            <p className="text-lg text-purple-200 font-inter mb-6 font-semibold">Core Skills & Technologies</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'Full Stack'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm font-inter text-white hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-110 cursor-default shadow-lg"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Animated Navigation Boxes */}
          <div className="animate-slide-up" style={{ animationDelay: '1s' }}>
            <p className="text-lg text-purple-200 font-inter mb-6 font-semibold">Quick Navigation</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {navigationBoxes.map((box, index) => {
                const IconComponent = box.icon;
                return (
                  <div
                    key={box.section}
                    onClick={() => scrollToSection(box.section)}
                    className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-110 animate-fade-in`}
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  >
                    <div className={`bg-gradient-to-br ${box.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20`}>
                      <div className="flex flex-col items-center space-y-3">
                        <IconComponent className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-white font-inter font-medium text-sm">{box.label}</span>
                      </div>
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
