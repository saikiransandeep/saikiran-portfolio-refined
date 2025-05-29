
import React from 'react';
import { GraduationCap, Target, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            About Me
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate developer with a strong foundation in algorithms and software architecture, 
            currently pursuing my journey in the world of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                My Journey
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed mb-6">
                I'm a dedicated software developer with a passion for creating innovative solutions 
                that make a difference. My expertise spans across multiple programming languages and 
                technologies, with a particular focus on full-stack development and algorithmic problem-solving.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed">
                Currently seeking opportunities to contribute to exciting projects where I can apply 
                my technical skills and creative problem-solving abilities to build impactful software solutions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-ivory to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="text-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-navy">Education</h4>
                  <p className="font-inter text-gray-600">B.Tech (2022–2026)</p>
                </div>
              </div>
              <p className="font-inter text-gray-600">
                Avanthi Institute of Engineering & Technology
              </p>
            </div>

            <div className="bg-gradient-to-br from-ivory to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <Target className="text-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-navy">Career Goals</h4>
                  <p className="font-inter text-gray-600">Actively Job Searching</p>
                </div>
              </div>
              <p className="font-inter text-gray-600">
                Seeking opportunities in software development and architecture
              </p>
            </div>

            <div className="bg-gradient-to-br from-ivory to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <Code className="text-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-navy">Specialization</h4>
                  <p className="font-inter text-gray-600">Full Stack Development</p>
                </div>
              </div>
              <p className="font-inter text-gray-600">
                Algorithms, software architecture, and innovative problem-solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
