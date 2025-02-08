import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Rocket, ArrowRight, Code, ShieldCheck } from 'lucide-react';

const BriefSections = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern frameworks"
    },
    {
      icon: Code,
      title: "E-commerce",
      description: "Secure online stores with payment integration"
    },
    {
      icon: ShieldCheck,
      title: "Maintenance",
      description: "Ongoing support and security updates"
    }
  ];

  const processSteps = [
    {
      icon: "💭",
      title: "Plan",
      description: "Define goals and requirements"
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Create engaging user experience"
    },
    {
      icon: "🚀",
      title: "Launch",
      description: "Deploy and optimize"
    }
  ];

  return (
    <>
      {/* Services Overview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob"/>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob" 
               style={{ animationDelay: '2s' }}/>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:border-purple-300 transition-all duration-300">
                  <Icon className="w-12 h-12 text-purple-600 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/services" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              A streamlined approach to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="text-4xl mb-6">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-purple-200">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-purple-500">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/process" className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BriefSections;