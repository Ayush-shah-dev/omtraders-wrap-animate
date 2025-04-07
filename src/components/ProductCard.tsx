
import React, { useRef, useEffect } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  delay?: number;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  icon, 
  imageSrc, 
  imageAlt, 
  delay = 0,
  featured = false
}) => {
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
      className={`animate-on-scroll bg-white p-6 rounded-xl shadow-md card-hover border border-gray-100 ${featured ? 'lg:p-8' : ''}`}
    >
      {imageSrc ? (
        <div className={`mb-6 overflow-hidden rounded-lg ${featured ? 'h-48 md:h-64' : 'h-40'}`}>
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ) : (
        <div className="h-14 w-14 mb-4 bg-gradient-to-br from-om-green-light to-om-blue-light rounded-lg flex items-center justify-center text-white">
          {icon}
        </div>
      )}
      <h3 className={`font-semibold mb-2 ${featured ? 'text-2xl' : 'text-xl'}`}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductCard;
