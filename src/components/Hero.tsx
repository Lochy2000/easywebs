import React from 'react';
import ConsultationButton from './ConsultationButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          {/* Decorative blobs */}
          <div 
            className="absolute top-1/4 right-1/4 w-48 md:w-96 aspect-square bg-gradient-to-r from-purple-500/30 to-blue-400/30 rounded-full blur-3xl animate-blob" 
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-48 md:w-96 aspect-square bg-gradient-to-l from-purple-400/30 to-blue-500/30 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: '2s' }} 
          />
        </div>
      </div>
      
      {/* Main content container */}
      <div className="relative min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-12">
          {/* Text content */}
          <div className="w-full lg:w-1/2 z-10 text-center lg:text-left pt-8 lg:pt-0">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
              <span className="mr-2">✨</span>
              Transforming ideas into reality
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
              Crafting Digital
              <br />
              Experiences That
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Convert
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8">
              We guide ambitious brands through their website journey, 
              from concept to launch. Let's create something amazing together.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ConsultationButton className="px-6 py-3" />
              <button className="px-6 py-3 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
                View Our Work
              </button>
            </div>
          </div>
          
          {/* Image container */}
          <div className="hidden lg:flex w-1/2 justify-center items-center z-10">
            <div className="relative w-[500px] aspect-square">
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
      </div>
    </section>
  );
};

export default Hero;