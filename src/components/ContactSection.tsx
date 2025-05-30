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
      color: "hover:text-blue-300"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/saikiran",
      color: "hover:text-blue-300"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/saikiran",
      color: "hover:text-blue-300"
    },
    {
      icon: Trophy,
      label: "GeeksforGeeks",
      href: "https://geeksforgeeks.org/user/saikiran",
      color: "hover:text-blue-300"
    },
    {
      icon: Code,
      label: "HackerRank",
      href: "https://hackerrank.com/saikiran",
      color: "hover:text-blue-300"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or simply connect with fellow developers and tech enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-blue-100 leading-relaxed mb-8">
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
                  className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors duration-300">
                    <method.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{method.label}</p>
                    <p className="text-blue-100">{method.value}</p>
                  </div>
                  <ExternalLink className="ml-auto text-blue-200 group-hover:text-white transition-colors duration-300" size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8 animate-scale-in">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Find Me Online
              </h3>
              <p className="text-blue-100 leading-relaxed mb-8">
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
                  className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors duration-300">
                    <link.icon className={`text-white ${link.color} transition-colors duration-300`} size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{link.label}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h4 className="text-lg font-bold text-white mb-3">
                Currently Available
              </h4>
              <p className="text-blue-100 mb-4">
                I'm actively seeking new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm"
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
