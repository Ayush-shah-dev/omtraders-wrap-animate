import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Zap, Globe, Shield } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse movement parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const heroEl = heroRef.current;
      const layers = heroEl.querySelectorAll('.parallax-layer');
      
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      
      layers.forEach(layer => {
        const speedX = (layer as HTMLElement).dataset.speedX || "0.05";
        const speedY = (layer as HTMLElement).dataset.speedY || "0.05";
        
        const moveX = x * parseFloat(speedX);
        const moveY = y * parseFloat(speedY);
        
        (layer as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add animation class after component mounts
    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animated', 'animate-fade-in');
      }, 200 * index);
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Futuristic geometric background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-om-green/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-om-blue/5 to-transparent"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOGg2djZoLTZjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTIgMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmg2di02aC02Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02aDZ2NmMwIDkuOTQgOC4wNiAxOCAxOCAxOGgtNnYtNmg2YzYuNjI3IDAgMTItNS4zNzMgMTItMTIgMC02LjYyNy01LjM3My0xMi0xMi0xMmgtNnY2aDZjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDZoLTZ2LTZ6IiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgZmlsbD0icmdiYSgwLDAsMCwwLjAzKSIgY3g9IjE4IiBjeT0iNDIiIHI9IjMiLz48Y2lyY2xlIGZpbGw9InJnYmEoMCwwLDAsMC4wMykiIGN4PSI0MiIgY3k9IjE4IiByPSIzIi8+PC9nPjwvc3ZnPg==')] opacity-20 z-0"></div>
      </div>
      
      {/* Animated circles/particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="parallax-layer absolute h-40 w-40 rounded-full bg-gradient-to-r from-om-green/10 to-transparent top-1/4 -left-20 blur-3xl animate-float" data-speed-x="0.02" data-speed-y="0.03"></div>
        <div className="parallax-layer absolute h-72 w-72 rounded-full bg-gradient-to-b from-om-blue/10 to-transparent -bottom-20 right-1/4 blur-3xl animate-float" style={{animationDelay: '1s'}} data-speed-x="0.05" data-speed-y="0.02"></div>
        <div className="parallax-layer absolute h-56 w-56 rounded-full bg-gradient-to-tr from-om-green/5 to-om-blue/5 top-1/3 right-1/3 blur-3xl animate-float" style={{animationDelay: '2s'}} data-speed-x="0.03" data-speed-y="0.04"></div>
      </div>
      
      <div className="section-container relative z-10">
         
          <div className="hero-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="block">Premium Packaging</span>
              <span className="block text-gradient">Material Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-full">
              OM Traders provides high-quality B2B packaging materials including POF shrink film, 
              BOPP adhesive tapes, box strapping rolls, and more for businesses across India.
            </p>
            
            {/* Feature highlights with icons */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-om-green/10 flex items-center justify-center text-om-green">
                  <Sparkles size={20} />
                </div>
                <p className="text-sm font-medium text-gray-700">Premium Quality</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-om-blue/10 flex items-center justify-center text-om-blue">
                  <Zap size={20} />
                </div>
                <p className="text-sm font-medium text-gray-700">Fast Delivery</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-om-green/10 flex items-center justify-center text-om-green">
                  <Globe size={20} />
                </div>
                <p className="text-sm font-medium text-gray-700">Pan India Service</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-om-blue/10 flex items-center justify-center text-om-blue">
                  <Shield size={20} />
                </div>
                <p className="text-sm font-medium text-gray-700">25+ Years Experience</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#products" className="btn-primary group inline-flex items-center">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-outline group inline-flex items-center">
                Contact Us
              </a>
            </div>
          </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="text-sm text-gray-600 mb-2 font-medium">Scroll Down</span>
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center relative">
          <div className="w-2 h-2 bg-om-green rounded-full mt-2 animate-float" style={{animationDuration: '1.5s'}}></div>
          <div className="absolute w-2 h-2 bg-om-green rounded-full mt-2 blur-sm animate-pulse-ring opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
