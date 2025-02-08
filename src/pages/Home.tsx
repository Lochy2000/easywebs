import React, {useEffect} from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero'
import BriefSections from '../components/BriefSections'
import SocialProof from '../components/SocialProof'
import PortfolioPreview from '../components/portfolio/PortfolioPreview'
import AnimatedBackground from '../components/AnimatedBackground'
import { ArrowRight, Globe, Heart, Sun } from 'lucide-react';

const HomePage = () => {

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  
  return (
    <MainLayout>
      <div className="relative pt-16">
      {/* Animated BG */}
        <AnimatedBackground/>
      {/* Hero Section */}
        <Hero/>

      {/* Services and Process */}
        <BriefSections/>

      {/* Soical Proof */}
        <SocialProof/>

      {/* Portfolio Showcase */}
        <PortfolioPreview/>

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