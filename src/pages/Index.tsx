
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
