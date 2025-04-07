
import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      name: "Rajesh Mehta",
      position: "Procurement Manager",
      company: "Global Foods Ltd.",
      text: "We've been using OM Traders' POF shrink films for our food packaging needs for over 5 years. The quality is consistently excellent, and their customer service is outstanding."
    },
    {
      name: "Priya Sharma",
      position: "Operations Director",
      company: "PackRight Solutions",
      text: "The BOPP tapes from OM Traders have superior adhesion compared to other suppliers we've worked with. Deliveries are always on time, and they've been a reliable partner for our business."
    },
    {
      name: "Aditya Patel",
      position: "Supply Chain Head",
      company: "Horizon Electronics",
      text: "OM Traders understands our specific packaging requirements for delicate electronic components. Their custom packaging solutions have significantly reduced our product damage rates during shipping."
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated', 'animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div ref={sectionRef} className="section-container animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="text-om-green">Clients</span> Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We take pride in our customer relationships and the positive feedback we receive from businesses across India.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8"
            style={{ minHeight: '320px' }}
          >
            <div className="relative">
              <svg className="h-16 w-16 text-gray-200 absolute -top-8 -left-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.34 15.02c.39.39 1.02.39 1.41 0l6.36-6.36c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L12 12.79 6.3 7.1c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l6.45 6.51z"></path>
              </svg>
            
              <div className="flex flex-col items-center">
                <p className="text-gray-700 text-lg md:text-xl italic mb-8 text-center">
                  "{testimonials[activeIndex].text}"
                </p>
              
                <div className="pt-6 border-t border-gray-200 w-24 mb-4"></div>
              
                <div className="text-center">
                  <h5 className="font-semibold text-lg">{testimonials[activeIndex].name}</h5>
                  <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                  <p className="text-om-green font-medium">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 bg-om-blue text-white rounded-full hover:bg-om-blue-dark transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-om-green w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 bg-om-blue text-white rounded-full hover:bg-om-blue-dark transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
