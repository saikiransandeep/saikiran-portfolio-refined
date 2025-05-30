
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PortfolioSection = () => {
  const projects = [
    {
      title: "SAMS Website",
      description: "A comprehensive Student Attendance Management System built with modern web technologies. Features include real-time attendance tracking, student dashboard, and administrative controls.",
      techStack: ["HTML", "CSS", "JavaScript", "Python", "Database"],
      role: "Full Stack Developer",
      features: [
        "Real-time attendance tracking",
        "Student and admin dashboards",
        "Data visualization and reporting",
        "Responsive design for all devices"
      ],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my passion for creating innovative solutions through code
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group bg-white border-2 border-gray-200 animate-scale-in">
              <CardContent className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl text-gray-900 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Role:</span> {project.role}
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg">
                    <Github size={16} />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-6">
            More exciting projects coming soon! I'm constantly working on new ideas and innovations.
          </p>
          <Button 
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg mx-auto"
          >
            <Code size={18} />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
