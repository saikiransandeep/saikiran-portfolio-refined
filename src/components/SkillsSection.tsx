import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Brain } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "SQL", level: 80 },
        { name: "API Development", level: 70 },
        { name: "Database Design", level: 75 }
      ]
    }
  ];

  const ProgressBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-sm text-blue-200">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-400 to-blue-300 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <ProgressBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Brain, title: "Problem Solving", desc: "Algorithmic thinking & optimization" },
            { icon: Server, title: "Full Stack", desc: "End-to-end development" },
            { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first approach" },
            { icon: Database, title: "Data Management", desc: "Efficient data structures" }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <item.icon className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-blue-100 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
