import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="w-full flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-purple-600">
              easyweb
            </span>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#services" className="text-gray-600 hover:text-purple-600 px-3 py-2">
              Services
            </a>
            <a href="#process" className="text-gray-600 hover:text-purple-600 px-3 py-2">
              Our Process
            </a>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-purple-600 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="w-full md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#services" 
                className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded"
              >
                Services
              </a>
              <a 
                href="#process" 
                className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded"
              >
                Our Process
              </a>
              <button className="w-full mt-2 px-3 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                Free Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;