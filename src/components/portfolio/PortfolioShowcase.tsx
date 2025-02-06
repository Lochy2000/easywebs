import React, { useState } from 'react';
import { Sparkles, MousePointer } from 'lucide-react';
import {
  RestaurantDemo,
  FitnessDemo,
  RealEstateDemo,
  CreativeAgencyDemo,
  ELearningDemo,
  PersonalPortfolioDemo,
  TradeDemo,
  PhotographyDemo,
  StreetWearDemo
} from './demos';

interface PortfolioItem {
  id: string;
  title: string;
  industry: string;
  description: string;
  component: React.ComponentType;
  features: string[];
  color: string;
  previewImage: string;
}

const PortfolioShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'personal-portfolio',
      title: "Modern Portfolio",
      industry: "Personal Branding",
      description: "Dynamic personal portfolio with interactive elements and smooth animations",
      component: PersonalPortfolioDemo,
      features: ["Dynamic Hero Section", "Project Showcase", "Skill Visualization", "Contact Form"],
      color: "from-blue-500 to-purple-500",
      previewImage: `${process.env.PUBLIC_URL}/assets/images/demo/democards/portfolio.avif`
    },
    {
      id: 'trade',
      title: "Trade Services",
      industry: "Professional Services",
      description: "Professional trade services website with service booking and emergency contact",
      component: TradeDemo,
      features: ["Service Booking", "Emergency Contact", "Portfolio Gallery", "Review System"],
      color: "from-blue-500 to-indigo-600",
      previewImage: `${process.env.PUBLIC_URL}/assets/images/demo/democards/trade.avif`
    },
    {
      id: 'photography',
      title: "Photography Studio",
      industry: "Creative Services",
      description: "Elegant photography portfolio with immersive gallery and booking system",
      component: PhotographyDemo,
      features: ["Image Gallery", "Service Packages", "Booking System", "Client Portal"],
      color: "from-gray-800 to-gray-900",
      previewImage: `${process.env.PUBLIC_URL}/assets/images/demo/democards/photography.avif`
    },
    {
      id: 'streetwear',
      title: "Urban Fashion",
      industry: "E-commerce",
      description: "Bold streetwear fashion store with dynamic product displays",
      component: StreetWearDemo,
      features: ["Product Catalog", "Shopping Cart", "Collection Showcase", "Newsletter"],
      color: "from-red-600 to-red-800",
      previewImage: `${process.env.PUBLIC_URL}/assets/images/demo/democards/streetwear.avif`
    },
    {
      id: 'restaurant',
      title: "Modern Restaurant",
      industry: "Food & Dining",
      description: "An elegant restaurant website with online reservations and menu showcase",
      component: RestaurantDemo,
      features: ["Online Booking", "Dynamic Menu", "Chef's Blog", "Virtual Tour"],
      color: "from-orange-500 to-red-600",
      previewImage: `${process.env.PUBLIC_URL}/assets/images/demo/democards/restaurant.avif`
    },
    {
      id: 'fitness',
      title: "Fitness Studio",
      industry: "Health & Wellness",
      description: "Dynamic fitness platform with class scheduling and progress tracking",
      component: FitnessDemo,
      features: ["Class Booking", "Progress Dashboard", "Trainer Profiles", "Workout Videos"],
      color: "from-green-500 to-teal-600",
      previewImage: `${process.env.PUBLIC_URL}/assets/images/demo/democards/fitness.avif`
    },
    {
      id: 'realestate',
      title: "Real Estate Agency",
      industry: "Real Estate",
      description: "Property listing platform with virtual tours and interactive maps",
      component: RealEstateDemo,
      features: ["Property Search", "Virtual Tours", "Agent Portal", "Mortgage Calculator"],
      color: "from-blue-500 to-indigo-600",
      previewImage: `${process.env.PUBLIC_URL}/assets/images/demo/democards/realestate.avif`
    },
    {
      id: 'agency',
      title: "Creative Agency",
      industry: "Creative Services",
      description: "Portfolio-focused site with interactive case studies",
      component: CreativeAgencyDemo,
      features: ["Case Studies", "Team Showcase", "Service Calculator", "Project Timeline"],
      color: "from-purple-500 to-pink-600",
      previewImage: `${process.env.PUBLIC_URL}/assets/images/demo/democards/creativeagency.avif`
    },
    {
      id: 'elearning',
      title: "E-Learning Platform",
      industry: "Education",
      description: "Modern learning management system with course tracking",
      component: ELearningDemo,
      features: ["Course Catalog", "Progress Tracking", "Live Sessions", "Resource Library"],
      color: "from-yellow-500 to-orange-600",
      previewImage: `${process.env.PUBLIC_URL}/assets/images/demo/democards/e-learning.avif`
    }
  ];

  // Function to render active demo
  const renderActiveDemo = () => {
    if (!activeDemo) return null;
    const demo = portfolioItems.find(item => item.id === activeDemo);
    if (!demo) return null;
    const DemoComponent = demo.component;

    return (
      <div className="fixed inset-0 z-50 overflow-auto bg-white">
        <div className="sticky top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">{demo.title}</h2>
          <button 
            onClick={() => setActiveDemo(null)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ✕
          </button>
        </div>
        <DemoComponent />
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header Section */}
        <div className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Interactive Website Examples
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our Demo Websites
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Discover our collection of interactive website demos showcasing different industries 
              and modern design approaches. Click any demo to explore the full experience.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/10"
              >
                {/* Preview Image */}
                <div className="relative aspect-video overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <img
                    src={item.previewImage}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => setActiveDemo(item.id)}
                      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2"
                    >
                      <MousePointer className="w-4 h-4" />
                      Try Interactive Demo
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <span className="text-sm text-purple-200">
                        {item.industry}
                      </span>
                    </div>
                  </div>

                  <p className="text-purple-100 mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-purple-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render active demo */}
      {renderActiveDemo()}
    </div>
  );
};

export default PortfolioShowcase;