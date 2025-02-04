import React, { useState } from 'react';
import { Compass, Paintbrush, Code, Rocket } from 'lucide-react';

const ProcessTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  const timelineData = [
    {
      phase: 'Discovery & Planning',
      duration: '1-2 weeks',
      icon: Compass,
      description: 'Understanding your goals, target audience, and project requirements',
      steps: [
        'Initial consultation',
        'Requirements gathering',
        'Site architecture planning',
        'Project timeline creation'
      ]
    },
    {
      phase: 'Design',
      duration: '2-3 weeks',
      icon: Paintbrush,
      description: 'Creating the visual identity and user experience of your website',
      steps: [
        'Wireframe development',
        'UI/UX design',
        'Brand integration',
        'Design review & refinement'
      ]
    },
    {
      phase: 'Development',
      duration: '3-4 weeks',
      icon: Code,
      description: 'Building your website with clean, efficient code',
      steps: [
        'Frontend development',
        'CMS integration',
        'Responsive implementation',
        'Performance optimization'
      ]
    },
    {
      phase: 'Launch',
      duration: '1 week',
      icon: Rocket,
      description: 'Deploying your website and ensuring everything runs smoothly',
      steps: [
        'Quality assurance',
        'Content migration',
        'SEO implementation',
        'Site launch'
      ]
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black">
      {/* Solid background with gradient */}
      <div>
        {/* Animated blobs */}
        <div 
          className="absolute w-1/3 aspect-square max-w-md top-1/4 right-1/4 bg-gradient-to-r from-purple-500/30 to-blue-400/30 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute w-1/3 aspect-square max-w-md bottom-1/4 left-1/4 bg-gradient-to-l from-purple-400/30 to-blue-500/30 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-4">
            <span className="mr-2">🚀</span>
            Website Development Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Your Website Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-purple-500/20 transform -translate-x-1/2" />
          
          {/* Timeline items */}
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isActive = activePhase === index;
            
            return (
              <div
                key={item.phase}
                className={`relative mb-16 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
                onMouseEnter={() => setActivePhase(index)}
              >
                <div className={`flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline node */}
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full ${
                      isActive ? 'bg-white' : 'bg-white/20'
                    } flex items-center justify-center transition-colors duration-300`}>
                      <Icon className={`w-4 h-4 ${
                        isActive ? 'text-purple-600' : 'text-white'
                      }`} />
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`flex-1 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 group ${
                    isActive 
                      ? 'bg-white/10 border border-white/20 transform -translate-y-1'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {item.phase}
                      </h3>
                      <span className="text-sm text-purple-200 px-3 py-1 rounded-full bg-purple-500/20">
                        {item.duration}
                      </span>
                    </div>
                    
                    <p className="text-purple-100 mb-4">
                      {item.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {item.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-center text-purple-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" />
                          {step}
                        </li>
                      ))}
                    </ul>

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;