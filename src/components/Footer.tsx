import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const footer = document.getElementById('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          setMousePosition({ 
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer id="footer" className="relative bg-purple-900/95 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        {/* Static blob */}
        <div 
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-l from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-blob"
          style={{ animationDelay: '2s' }}
        />
        {/* Mouse following blob */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 transition-all duration-300 ease-out"
          style={{ 
            left: `${mousePosition.x - 128}px`,
            top: `${mousePosition.y - 128}px`,
          }}
        />
      </div>

      {/* Content remains the same */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:pr-12">
            <h2 className="text-2xl font-bold mb-4">easyweb</h2>
            <p className="text-purple-200">
              Crafting digital experiences that convert and inspire.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase()}`} 
                    className="text-purple-200 hover:text-white transition-colors relative group"
                  >
                    <span className="relative z-10">{link}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
            <div className="flex gap-6">
              {[
                { Icon: Github, href: 'https://github.com/Lochy2000/easywebs' },
                { Icon: Instagram, href: 'https://instagram.com' },
                { Icon: Linkedin, href: 'https://linkedin.com' }
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-purple-800">
          <p className="text-center text-purple-200">
            © {new Date().getFullYear()} easyweb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;