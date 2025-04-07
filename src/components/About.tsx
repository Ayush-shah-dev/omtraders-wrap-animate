
import React, { useRef, useEffect } from 'react';

const About = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              entry.target.classList.add('animated', 'animate-slide-in-left');
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add('animated', 'animate-slide-in-right');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-om-green">OM Traders</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Founded by Mr. Bhavesh Shah in 1996, OM Traders has established itself as a leading 
              provider of premium packaging materials in India. With over 25 years of experience, 
              we pride ourselves on delivering high-quality products and exceptional service to our clients.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to quality, innovation, and customer satisfaction has made us a trusted 
              partner for businesses across various industries. We understand the importance of reliable 
              packaging solutions and work closely with our clients to meet their specific requirements.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-om-green">25+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-om-blue">500+</span>
                <span className="text-sm text-gray-600">Satisfied Clients</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-om-green">6</span>
                <span className="text-sm text-gray-600">Product Categories</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-om-blue">PAN</span>
                <span className="text-sm text-gray-600">India Delivery</span>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="animate-on-scroll">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -z-10 -right-10 -bottom-10 w-4/5 h-4/5 bg-gradient-to-tr from-om-green/20 to-om-blue/20 rounded-xl"></div>
              
              {/* Main image */}
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img 
                  src="/lovable-uploads/4a8d71b5-2c50-4bba-baf7-1c5fd9415a10.png" 
                  alt="Ayush Shah - OM Traders" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                
                {/* Image overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-semibold text-lg">Leadership</span>
                  <p className="text-white/90">
                    The next generation of OM Traders, continuing our legacy of excellence.
                  </p>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -left-10 -top-10 bg-white p-4 rounded-lg shadow-lg rotate-[-5deg] z-10">
                <p className="text-om-green-dark font-semibold">
                  Family-owned business since 1996
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
