
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
        <span className="font-inter text-gray-700 font-medium">{skill.name}</span>
        <span className="font-inter text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-navy to-accent h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Skills & Expertise
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-ivory to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="text-navy" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy">
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
              className="text-center p-6 rounded-xl bg-gradient-to-br from-navy/5 to-accent/5 hover:from-navy/10 hover:to-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <item.icon className="text-navy group-hover:text-navy/80" size={28} />
              </div>
              <h4 className="font-playfair text-lg font-bold text-navy mb-2">
                {item.title}
              </h4>
              <p className="font-inter text-gray-600 text-sm">
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
