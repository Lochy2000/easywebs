import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen sticky top-16 overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-500/90">
          <div 
            className="sticky top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#FF6B6B]/50 to-[#4ECDC4]/50 rounded-full blur-3xl" 
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-[#FFD93D]/50 to-[#FF8FA3]/50 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: '2s' }} 
          />
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative h-full flex flex-col lg:flex-row items-center justify-between p-8 py-24 max-w-7xl mx-auto">
        {/* Text content */}
        <div className="w-full lg:w-1/2 space-y-8 z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            <span className="mr-2">✨</span>
            Transforming ideas into reality
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Crafting Digital
            <br />
            Experiences That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Convert
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-xl">
            We guide ambitious brands through their website journey, 
            from concept to launch. Let's create something amazing together.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-purple-600 rounded-full font-semibold flex items-center gap-2 hover:bg-white/90 transition-colors">
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
        
        {/* Visual element */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center z-10">
          <div className="relative w-[600px] h-[600px]">
            {/* Main hero image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="../assets/images/hero/mainimage.png"
                alt="Hero illustration"
                className="w-full h-full object-cover rounded-3xl mix-blend-screen animate-float"
              />
            </div>
            
            {/* Decorative floating elements */}
            {/* <img 
              src="/clog.gif"
              alt="Decorative shape 1"
              className="absolute -top-8 -right-8 w-32 h-32 object-cover rounded-full mix-blend-screen animate-float"
            />
            <img 
              src="/spinningglobe.gif" 
              alt="Decorative shape 2"
              className="absolute -bottom-8 -left-8 w-24 h-24 object-cover rounded-full mix-blend-screen animate-float-delay"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;