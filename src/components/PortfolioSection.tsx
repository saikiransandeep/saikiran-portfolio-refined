
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Showcasing my passion for creating innovative solutions through code
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group bg-white/10 backdrop-blur-sm border-2 border-white/20 animate-scale-in">
              <CardContent className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl text-white mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-blue-100">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-blue-100 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/20 text-white rounded-full text-sm hover:bg-white/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-blue-100">
                    <span className="font-semibold text-white">Role:</span> {project.role}
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 flex items-center gap-2 backdrop-blur-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 flex items-center gap-2 backdrop-blur-sm">
                    <Github size={16} />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-blue-100 mb-6">
            More exciting projects coming soon! I'm constantly working on new ideas and innovations.
          </p>
          <Button 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/20 px-8 py-3 backdrop-blur-sm"
          >
            <Code size={18} className="mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
