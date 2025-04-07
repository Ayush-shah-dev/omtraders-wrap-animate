
import React, { useRef, useEffect } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const products = [
    {
      title: "POF Shrink Film",
      description: "High clarity POF shrink film perfect for packaging with excellent heat shrink properties.",
      imageSrc: "/lovable-uploads/49e42f6c-9f9c-40d4-bd5c-01e885545b0a.png",
      imageAlt: "POF Shrink Film",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 3V21" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 3V21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "BOPP Adhesive Tape",
      description: "Self-adhesive packaging tapes with strong adhesion properties for secure box sealing.",
      imageSrc: "/lovable-uploads/3e12cd79-e852-4cc5-b080-929b9878c9df.png",
      imageAlt: "BOPP Adhesive Tape",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 5L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21 3L19 5L17 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Box Strapping Roll",
      description: "Durable and strong strapping solutions to secure heavy packages and pallets.",
      imageSrc: "/lovable-uploads/4d32cb8b-d506-4559-9e2c-38946f066486.png",
      imageAlt: "Box Strapping Roll",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 8V16C21 18.2091 19.2091 20 17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 8H21" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 16H21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "PVC Shrink Film",
      description: "Versatile PVC shrink film with excellent clarity and printability for product displays.",
      imageSrc: "/lovable-uploads/eddaf6fe-b903-46aa-86c4-e3d9fa73c907.png",
      imageAlt: "PVC Shrink Film",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 4V20" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "LD Stretch Film",
      description: "High-performance stretch films for pallet wrapping and load containment.",
      imageSrc: "/lovable-uploads/480d2bbf-1a81-421b-8464-1cef16484dc4.png",
      imageAlt: "LD Stretch Film",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Custom Packaging",
      description: "Tailored packaging solutions designed for your specific business requirements.",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6L12 2L21 6V18L12 22L3 18V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 10L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 10V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="animate-on-scroll text-3xl md:text-4xl font-bold">
            Our <span className="text-om-green">Premium</span> Products
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            High-quality packaging materials designed to meet the diverse needs of modern businesses, ensuring your products are safely secured and professionally presented.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              icon={product.icon}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
