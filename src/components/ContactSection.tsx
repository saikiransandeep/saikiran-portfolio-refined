
import React from 'react';
import { Mail, Phone, Linkedin, Github, Code, Trophy, ExternalLink } from 'lucide-react';
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

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/saikiran",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/saikiran",
      color: "hover:text-gray-800"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/saikiran",
      color: "hover:text-orange-600"
    },
    {
      icon: Trophy,
      label: "GeeksforGeeks",
      href: "https://geeksforgeeks.org/user/saikiran",
      color: "hover:text-green-600"
    },
    {
      icon: Code,
      label: "HackerRank",
      href: "https://hackerrank.com/saikiran",
      color: "hover:text-green-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Let's Connect
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or simply connect with fellow developers and tech enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-navy mb-6">
                Get In Touch
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to say hello, I'd love to hear from you. Let's create 
                something amazing together!
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center p-4 bg-gradient-to-r from-ivory to-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <method.icon className="text-navy" size={20} />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-navy">{method.label}</p>
                    <p className="font-inter text-gray-600">{method.value}</p>
                  </div>
                  <ExternalLink className="ml-auto text-gray-400 group-hover:text-navy transition-colors duration-300" size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-navy mb-6">
                Find Me Online
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                Connect with me on various platforms to see my work, coding challenges, 
                and professional journey. I'm active across multiple communities!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-br from-ivory to-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-gray-100"
                >
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors duration-300">
                    <link.icon className={`text-navy ${link.color} transition-colors duration-300`} size={18} />
                  </div>
                  <div>
                    <p className="font-inter font-medium text-navy text-sm">{link.label}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-navy/5 to-accent/5 rounded-xl">
              <h4 className="font-playfair text-lg font-bold text-navy mb-3">
                Currently Available
              </h4>
              <p className="font-inter text-gray-600 mb-4">
                I'm actively seeking new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
              <Button 
                className="bg-navy hover:bg-navy/90 text-white font-inter font-medium transition-all duration-300 hover:scale-105"
                onClick={() => window.open('mailto:saikiran@example.com')}
              >
                Send a Message
                <Mail size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
