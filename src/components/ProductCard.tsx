
import React, { useRef, useEffect } from 'react';
import { PhoneIcon } from 'lucide-react';

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

  const handleWhatsAppClick = () => {
    const phoneNumber = "919574516060";
    const message = `Hi, I am interested in ${title}, Please give us quote`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      ref={cardRef}
      className={`animate-on-scroll relative ${featured ? 'lg:p-8' : ''} cursor-pointer`}
      onClick={handleWhatsAppClick}
    >
      {/* Futuristic glowing border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-om-green to-om-blue rounded-xl opacity-0 group-hover:opacity-50 blur transition duration-500 group-hover:duration-200"></div>
      
      {/* Card content */}
      <div className="glass-effect bg-white/90 p-6 rounded-xl shadow-md card-hover border border-gray-100 relative z-10 group">
        {imageSrc ? (
          <div className={`mb-6 overflow-hidden rounded-lg relative ${featured ? 'h-52 md:h-64' : 'h-44'}`}>
            <img 
              src={imageSrc} 
              alt={imageAlt || title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Futuristic overlay with animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-om-green/10 to-om-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-om-green/20 via-transparent to-om-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ) : (
          <div className="h-16 w-16 mb-6 bg-gradient-to-br from-om-green-light to-om-blue-light rounded-lg flex items-center justify-center text-white relative">
            {icon}
            {/* Animated pulsing ring effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-om-green-light to-om-blue-light animate-pulse-ring opacity-0 group-hover:opacity-100"></div>
          </div>
        )}
        
        <h3 className={`font-semibold mb-3 group-hover:text-gradient transition-all duration-300 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {title}
        </h3>
        
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
        
        {/* WhatsApp button indicator */}
        <div className="mt-4 flex items-center justify-end text-om-green">
          <span className="text-sm font-medium mr-2">Contact for quote</span>
          <PhoneIcon size={16} />
        </div>
        
        {/* Futuristic pseudo-element decoration */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-om-green to-om-blue group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default ProductCard;
