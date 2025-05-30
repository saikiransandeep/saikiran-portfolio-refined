
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Check if we're past the hero section (first page)
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(window.pageYOffset > heroHeight);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
