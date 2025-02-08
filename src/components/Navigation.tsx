import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Globe, Menu, X } from 'lucide-react';
import ConsultationButton from './ConsultationButton';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 w-full">
      <nav className="max-w-[100%]">
        <div className="relative flex items-center justify-between px-2 sm:px-4 py-4 w-full max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            <span className="ml-1 sm:ml-2 text-lg sm:text-xl font-bold text-purple-600 whitespace-nowrap">
              easyweb
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-purple-600">Services</Link>
            <Link to="/process" className="text-gray-600 hover:text-purple-600">Process</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-purple-600">Portfolio</Link>
            <ConsultationButton showIcon={false} className="px-6 py-2" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" /> : 
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute w-full bg-white border-t">
            <div className="flex flex-col px-2 sm:px-4 py-2 space-y-2 max-w-7xl mx-auto">
              <Link 
                to="/services" 
                className="py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/process" 
                className="py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Process
              </Link>
              <Link 
                to="/portfolio" 
                className="py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <ConsultationButton showIcon={true} className="w-full px-6 py-2" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;