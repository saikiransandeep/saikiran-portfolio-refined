
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Trophy, ExternalLink, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or simply connect with fellow developers and tech enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Have a project in mind or want to discuss opportunities? 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Send Message
                <Mail size={20} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-scale-in">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Connect with me through various platforms. I'm active across 
                multiple communities and always open to new connections!
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <method.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{method.label}</p>
                    <p className="text-gray-600">{method.value}</p>
                  </div>
                  <ExternalLink className="ml-auto text-gray-400 group-hover:text-blue-600 transition-colors duration-300" size={16} />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                    <link.icon className="text-blue-600 transition-colors duration-300" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{link.label}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
