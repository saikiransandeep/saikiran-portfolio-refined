
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
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-500 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="text-blue-600 group-hover:animate-pulse" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={scrollToContact}
                className="w-full bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started
                <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-200 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Let's collaborate to turn your ideas into reality. I'm here to help you build 
            something amazing that makes a real impact.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg mx-auto"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
