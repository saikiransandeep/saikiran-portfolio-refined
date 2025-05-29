
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Navigation />
      <HeroSection />
      <div className="bg-gradient-to-br from-gray-50 to-purple-50">
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
