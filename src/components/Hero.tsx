import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16">
      {/* Background gradient with better mobile handling */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-500/90">
          {/* Decorative blobs with adjusted positioning for mobile */}
          <div 
            className="absolute top-1/4 right-1/4 w-48 md:w-96 aspect-square bg-gradient-to-r from-[#FF6B6B]/50 to-[#4ECDC4]/50 rounded-full blur-3xl" 
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-48 md:w-96 aspect-square bg-gradient-to-l from-[#FFD93D]/50 to-[#FF8FA3]/50 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: '2s' }} 
          />
        </div>
      </div>
      
      {/* Content container with improved spacing */}
      <div className="relative h-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 py-12 md:py-24 max-w-7xl mx-auto">
        {/* Text content with better mobile spacing */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 z-10 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            <span className="mr-2">✨</span>
            Transforming ideas into reality
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
            Crafting Digital
            <br />
            Experiences That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Convert
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
            We guide ambitious brands through their website journey, 
            from concept to launch. Let's create something amazing together.
          </p>

          {/* Buttons with improved mobile layout */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
        
        {/* Visual element with responsive sizing */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center z-10">
          <div className="relative w-full max-w-[400px] lg:max-w-[600px] aspect-square">
            {/* Main hero image with responsive sizing */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/hero/mainimage.png`}
                alt="Hero illustration"
                className="w-full h-full object-contain rounded-3xl mix-blend-screen animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;