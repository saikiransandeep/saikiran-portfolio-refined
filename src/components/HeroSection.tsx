
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-teal/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-navy to-primary rounded-full flex items-center justify-center animate-scale-in">
            <span className="text-4xl font-bold text-white font-playfair">SK</span>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-navy mb-6 animate-slide-up">
            Sai Kiran
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-charcoal mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & Software Architect
          </p>
          
          <p className="font-inter text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Passionate about algorithms, innovative problem-solving, and creating exceptional digital experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-16" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToPortfolio}
              className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-lg font-inter font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              Explore My Work
              <ArrowRight size={18} />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border-orange text-orange hover:bg-orange hover:text-white px-8 py-3 rounded-lg font-inter font-medium transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-charcoal font-inter mb-4 font-semibold">Core Skills & Technologies</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'Full Stack'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white border-2 border-teal rounded-full text-sm font-inter text-navy hover:bg-teal hover:text-white transition-all duration-300 hover:scale-105 cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
