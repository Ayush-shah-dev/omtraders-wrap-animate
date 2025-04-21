
import React, { useRef, useEffect } from 'react';
import { PhoneIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  delay?: number;
  featured?: boolean;
}

const productSlugs: Record<string, string> = {
  "POF Shrink Film": "pof",
  "BOPP Adhesive Tape": "bopp",
  "Box Strapping Roll": "box-strapping",
  "PVC Shrink Film": "pvc",
  "LD Stretch Film": "ld-stretch",
};

const getProductSlug = (title: string) => productSlugs[title] || title.toLowerCase().replace(/\s+/g, "-");

const getWhatsAppMessage = (title: string) => {
  // Custom product names for WhatsApp message if needed
  if (title === "POF Shrink Film") return "POF shrink film";
  if (title === "BOPP Adhesive Tape") return "BOPP self adhesive tape";
  if (title === "Box Strapping Roll") return "Box Strapping Roll";
  if (title === "PVC Shrink Film") return "PVC Shrink";
  if (title === "LD Stretch Film") return "LD Stretch Film";
  return title;
};

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
  const navigate = useNavigate();

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

  const handleCardClick = (e: React.MouseEvent) => {
    // Only navigate if the click is NOT on the button/link
    if ((e.target as HTMLElement).closest('.quote-btn')) return;
    // Route to product details page
    navigate(`/products/${getProductSlug(title)}`);
  };

  const handleCardKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      navigate(`/products/${getProductSlug(title)}`);
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const phoneNumber = "919574516060";
    const message = `Hi, I am interested in ${getWhatsAppMessage(title)}, Please give us quote`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      ref={cardRef}
      className={`animate-on-scroll relative ${featured ? 'lg:p-8' : ''} cursor-pointer group`}
      onClick={handleCardClick}
      tabIndex={0}
      onKeyPress={handleCardKeyPress}
      role="button"
      aria-label={`More about ${title}`}
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
            {/* Futuristic overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-om-green/10 to-om-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-om-green/20 via-transparent to-om-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ) : (
          <div className="h-16 w-16 mb-6 bg-gradient-to-br from-om-green-light to-om-blue-light rounded-lg flex items-center justify-center text-white relative">
            {icon}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-om-green-light to-om-blue-light animate-pulse-ring opacity-0 group-hover:opacity-100"></div>
          </div>
        )}
        <h3 className={`font-semibold mb-3 group-hover:text-gradient transition-all duration-300 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
        <div className="mt-4 flex items-center justify-end text-om-green">
          <button
            className="quote-btn bg-om-green hover:bg-om-blue/90 text-white text-sm font-semibold px-4 py-2 rounded shadow transition-transform duration-150 hover:scale-105 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-om-green/50"
            onClick={handleWhatsAppClick}
            tabIndex={0}
            aria-label={`Contact for quote on ${title}`}
            type="button"
          >
            <PhoneIcon className="w-4 h-4 inline-block" />
            Contact for quote
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-om-green to-om-blue group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default ProductCard;

