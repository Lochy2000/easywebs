import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ServicesSection from '../components/ServicesSection';
import Hero from '../components/Hero'
import ProcessTimeline from '../components/ProcessTimeline'
import SocialProof from '../components/SocialProof'
import PortfolioShowcase from '../components/portfolio/PortfolioShowcase'
import { ArrowRight, Globe, Heart, Sun } from 'lucide-react';

const HomePage = () => {
  
  return (
    <MainLayout>
      <div className="relative pt-16">
        {/* Hero Section */}

        <Hero/>


       {/* Services Section */}

       <ServicesSection />


        {/* Process Section */}
        
        <ProcessTimeline/>

        <SocialProof/>

        <PortfolioShowcase/>

        {/* CTA Section */}
        <section className="min-h-screen sticky top-16 bg-gradient-to-br from-blue-500 to-purple-600">
          <div className="h-full flex items-center p-8 py-24">
            <div className="w-full max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Start?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Let's transform your digital presence together.
              </p>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-purple-600 rounded-full font-semibold">
                Get Started Today
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;