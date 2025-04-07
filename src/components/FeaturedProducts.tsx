
import React, { useRef, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ArrowRight, Star } from 'lucide-react';

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  const featuredProducts = [
    {
      title: "POF Shrink Film",
      description: "Premium quality POF shrink film with excellent clarity and strength for a wide range of packaging applications.",
      imageSrc: "/lovable-uploads/49e42f6c-9f9c-40d4-bd5c-01e885545b0a.png",
      imageAlt: "POF Shrink Film rolls"
    },
    {
      title: "BOPP Adhesive Tape",
      description: "High-performance self-adhesive packaging tapes available in various colors and customizations.",
      imageSrc: "/lovable-uploads/3e12cd79-e852-4cc5-b080-929b9878c9df.png",
      imageAlt: "BOPP Adhesive Tape rolls"
    },
    {
      title: "Box Strapping Roll",
      description: "Durable polypropylene strapping rolls for secure packaging and bundling of heavy items and pallets.",
      imageSrc: "/lovable-uploads/4d32cb8b-d506-4559-9e2c-38946f066486.png",
      imageAlt: "Box Strapping Roll"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="featured-products"
      className="py-16 relative overflow-hidden"
    >
      {/* Background stylized elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-om-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-om-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-full h-px bg-gradient-to-r from-transparent via-om-green/30 to-transparent"></div>
      </div>
      
      {/* Connecting lines between sections */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-24 bg-gradient-to-b from-transparent to-om-green/30"></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1 h-24 bg-gradient-to-t from-transparent to-om-blue/30"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-om-green"></div>
            <span className="text-om-green font-medium text-lg mx-2 flex items-center">
              <Star size={16} className="mr-1" /> Our Speciality
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-om-green"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block">
            Featured Products
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-om-green to-om-blue opacity-70"></div>
          </h2>
          
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Explore our most sought-after packaging solutions that businesses across India trust for quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              delay={index * 150}
              featured={true}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#products" className="group inline-flex items-center text-om-green-dark hover:text-om-green font-medium transition-colors duration-300 relative">
            <span className="relative z-10">View All Products</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-om-green group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
