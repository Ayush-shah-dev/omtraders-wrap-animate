
import React, { useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === mapRef.current) {
              entry.target.classList.add('animated', 'animate-slide-in-left');
            } else if (entry.target === formRef.current) {
              entry.target.classList.add('animated', 'animate-slide-in-right');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-om-green">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? Reach out to us and our team will be happy to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={mapRef} className="animate-on-scroll">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64 bg-gray-200">
                {/* Embed map iframe here */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="text-center px-4">
                    <MapPin className="h-10 w-10 text-om-green mx-auto mb-2" />
                    <p className="font-medium">City Centre, F-35, Idgah Circle</p>
                    <p>Near Idgah Police Chowky, Prem Darwaza</p>
                    <p>Saraspur, Ahmedabad, Gujarat 380016</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-om-green mr-3" />
                    <a href="tel:+919574516060" className="text-gray-700 hover:text-om-green">
                      +91 9574516060
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-om-green mr-3" />
                    <a href="mailto:omtraders2012@gmail.com" className="text-gray-700 hover:text-om-green">
                      omtraders2012@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 uppercase mb-3">
                    Follow Us
                  </h4>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/omtraders_shrinkfilms/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-om-green hover:text-white transition-all"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/company/om-traders1996" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-om-blue hover:text-white transition-all"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={formRef} className="animate-on-scroll">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-om-green focus:border-transparent" 
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-om-green focus:border-transparent" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-om-green focus:border-transparent" 
                    placeholder="Your Company Ltd."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-om-green focus:border-transparent" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
