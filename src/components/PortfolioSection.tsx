
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
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-ivory to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Portfolio
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my passion for creating innovative solutions through code
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="font-playfair text-3xl text-navy mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="font-inter text-lg text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <div className="mb-6">
                    <h4 className="font-inter font-semibold text-navy mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="font-inter text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-inter font-semibold text-navy mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm font-inter hover:bg-accent/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-inter text-gray-600">
                      <span className="font-semibold text-navy">Role:</span> {project.role}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-navy hover:bg-navy/90 text-white flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white flex items-center gap-2">
                      <Github size={16} />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-inter text-gray-600 mb-6">
            More exciting projects coming soon! I'm constantly working on new ideas and innovations.
          </p>
          <Button 
            variant="outline" 
            className="border-accent text-navy hover:bg-accent hover:text-navy/90 px-8 py-3"
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
