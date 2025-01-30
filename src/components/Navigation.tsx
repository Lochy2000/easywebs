import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-purple-600">
              easyweb
            </span>
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#services" 
                className="block px-3 py-2 text-gray-600 hover:bg-purple-50 rounded"
              >
                Services
              </a>
              <a 
                href="#process" 
                className="block px-3 py-2 text-gray-600 hover:bg-purple-50 rounded"
              >
                Our Process
              </a>
              <button className="w-full text-left px-3 py-2 text-purple-600 hover:bg-purple-50 rounded">
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