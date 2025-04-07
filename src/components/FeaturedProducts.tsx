
import React, { useRef, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

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
    <section ref={sectionRef} id="featured-products" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-om-green font-medium text-lg">Our Speciality</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Products
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
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
          <a href="#products" className="inline-flex items-center text-om-green-dark hover:text-om-green font-medium transition-colors duration-300">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
