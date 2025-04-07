
import React, { useEffect, createContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Create animation context to coordinate animations
export const AnimationContext = createContext({
  sectionInView: '',
  setSectionInView: (section: string) => {}
});

const Index = () => {
  const [sectionInView, setSectionInView] = useState('');

  useEffect(() => {
    // Improved Intersection Observer with thresholds for smoother animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Get section id for context
            const id = entry.target.id || '';
            if (id) setSectionInView(id);
            
            // More dramatic animation
            const animationType = entry.target.getAttribute('data-animation');
            if (animationType) {
              entry.target.classList.add(`animate-${animationType}`);
            }
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: [0.1, 0.3, 0.5, 0.7] }
    );

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Add parallax scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.parallax').forEach((el) => {
        const element = el as HTMLElement;
        const speed = element.dataset.speed || '0.1';
        element.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimationContext.Provider value={{ sectionInView, setSectionInView }}>
      <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Futuristic background elements */}
        <div className="fixed inset-0 z-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-om-blue/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-om-green/20 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating particles */}
        <div className="fixed inset-0 z-0 opacity-20">
          <div className="absolute h-20 w-20 rounded-full bg-om-green/30 top-1/4 left-1/3 animate-float"></div>
          <div className="absolute h-12 w-12 rounded-full bg-om-blue/30 top-1/2 right-1/4 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute h-16 w-16 rounded-full bg-om-green/30 bottom-1/4 left-1/4 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <div className="relative z-10">
            <FeaturedProducts />
            <Products />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;
