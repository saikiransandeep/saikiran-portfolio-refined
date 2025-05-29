
import React from 'react';
import { Palette, Code, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that provide exceptional user experiences across all devices and platforms.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Responsive Design",
        "Prototyping & Wireframing"
      ]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building robust, scalable web applications using modern technologies and best practices for optimal performance and maintainability.",
      features: [
        "Frontend Development",
        "Backend Development",
        "Database Design",
        "API Integration"
      ]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Developing cross-platform mobile applications that deliver native-like performance and seamless user experiences.",
      features: [
        "Cross-platform Solutions",
        "Native Performance",
        "Responsive Mobile Design",
        "App Store Optimization"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="text-white group-hover:animate-pulse" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="w-full border-white/30 text-white hover:bg-white/20 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm"
              >
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center text-white border border-white/20 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's collaborate to turn your ideas into reality. I'm here to help you build 
            something amazing that makes a real impact.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Start a Conversation
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
