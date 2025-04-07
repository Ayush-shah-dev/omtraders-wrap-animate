
import React, { useRef, useEffect } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animated', 'animate-zoom-in');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="animate-on-scroll bg-white p-6 rounded-xl shadow-md card-hover border border-gray-100"
    >
      <div className="h-14 w-14 mb-4 bg-gradient-to-br from-om-green-light to-om-blue-light rounded-lg flex items-center justify-center text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductCard;
