
import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "saikiran@example.com",
      href: "mailto:saikiran@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or simply connect with fellow developers and tech enthusiasts.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          
          {/* Contact Information Section */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Get In Touch
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors duration-300">
                    <method.icon className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{method.label}</p>
                    <p className="text-blue-100">{method.value}</p>
                  </div>
                  <ExternalLink className="text-blue-200 group-hover:text-white transition-colors duration-300" size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center animate-fade-in">
            <div className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-4">
                Currently Available
              </h4>
              <p className="text-blue-100 mb-6 leading-relaxed">
                I'm actively seeking new opportunities and exciting projects. 
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to say hello, I'd love to hear from you. Let's create 
                something amazing together!
              </p>
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm px-8 py-3"
                onClick={() => window.open('mailto:saikiran@example.com')}
              >
                Send a Message
                <Mail size={18} className="ml-2" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
