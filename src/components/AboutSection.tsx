import React from 'react';
import { GraduationCap, Target, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            About Me
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            A passionate developer with a strong foundation in algorithms and software architecture, 
            currently pursuing my journey in the world of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                My Journey
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                I'm a dedicated software developer with a passion for creating innovative solutions 
                that make a difference. My expertise spans across multiple programming languages and 
                technologies, with a particular focus on full-stack development and algorithmic problem-solving.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Currently seeking opportunities to contribute to exciting projects where I can apply 
                my technical skills and creative problem-solving abilities to build impactful software solutions.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Education</h4>
                  <p className="text-blue-200">B.Tech (2022–2026)</p>
                </div>
              </div>
              <p className="text-blue-100">
                Avanthi Institute of Engineering & Technology
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Career Goals</h4>
                  <p className="text-blue-200">Actively Job Searching</p>
                </div>
              </div>
              <p className="text-blue-100">
                Seeking opportunities in software development and architecture
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Specialization</h4>
                  <p className="text-blue-200">Full Stack Development</p>
                </div>
              </div>
              <p className="text-blue-100">
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
