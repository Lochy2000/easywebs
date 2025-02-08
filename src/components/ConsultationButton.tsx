import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface ConsultationButtonProps {
  className?: string;
  showIcon?: boolean;
  variant?: 'primary' | 'secondary';
}

const ConsultationButton: React.FC<ConsultationButtonProps> = ({ 
  className = '', 
  showIcon = true,
  variant = 'primary'
}) => {
  const [isMobile, setIsMobile] = useState(false);
  
  //  email and WhatsApp number
  const emailAddress = 'lochlann_oht@hotmail.com';
  const whatsappNumber = '+44 07469707973'; 
  
  // Check device width on mount and window resize
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768); // 768px mobile breakpoint
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  const handleClick = () => {
    if (isMobile) {
      // Open WhatsApp
      window.location.href = `https://wa.me/${whatsappNumber}`;
    } else {
      // Open email client
      window.location.href = `mailto:${emailAddress}?subject=Website Consultation Request`;
    }
  };

  const baseStyles = "rounded-full font-semibold flex items-center justify-center transition-colors";
  const primaryStyles = "bg-purple-600 text-white hover:bg-purple-700";
  const secondaryStyles = "border-2 border-white/20 text-white hover:bg-white/10";
  
  const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;
  
  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {isMobile ? 'WhatsApp Us' : 'Book a Consultation'}
      {showIcon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default ConsultationButton;