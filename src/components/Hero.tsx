
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Add animation class after component mounts
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      el.classList.add('animated', 'animate-fade-in');
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-om-green-dark/20 to-om-blue-dark/20 z-0"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOGg2djZoLTZjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTIgMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmg2di02aC02Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02aDZ2NmMwIDkuOTQgOC4wNiAxOCAxOCAxOGgtNnYtNmg2YzYuNjI3IDAgMTItNS4zNzMgMTItMTIgMC02LjYyNy01LjM3My0xMi0xMi0xMmgtNnY2aDZjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDZoLTZ2LTZ6IiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgZmlsbD0icmdiYSgwLDAsMCwwLjAzKSIgY3g9IjE4IiBjeT0iNDIiIHI9IjMiLz48Y2lyY2xlIGZpbGw9InJnYmEoMCwwLDAsMC4wMykiIGN4PSI0MiIgY3k9IjE4IiByPSIzIi8+PC9nPjwvc3ZnPg==')] opacity-30 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Premium Packaging</span>
              <span className="block text-om-green">Material Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              OM Traders provides high-quality B2B packaging materials including POF shrink film, 
              BOPP adhesive tapes, box strapping rolls, and more for businesses across India.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#products" className="btn-primary inline-flex items-center">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center">
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="animate-on-scroll flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Founder's image with elegant framing */}
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-om-green-light/30 to-om-blue-light/30 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
                
                {/* Founder's image */}
                <div className="relative bg-white p-2 rounded-xl shadow-xl overflow-hidden card-hover">
                  <img 
                    src="/lovable-uploads/7f44aecc-6e7d-4efb-bd1b-ca5af9753aed.png" 
                    alt="Bhavesh Shah - Founder of OM Traders"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex flex-col justify-end p-4">
                    <span className="text-white text-sm font-medium">Founder</span>
                    <h3 className="text-white text-xl font-bold">Bhavesh Shah</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-600 mb-2">Scroll Down</span>
        <div className="w-6 h-9 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
