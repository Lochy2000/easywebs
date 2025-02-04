import React from 'react';
import { Globe, Store, Search, ShieldCheck, Settings, Paintbrush, LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites built from scratch with modern frameworks and responsive design",
      features: ["UI/UX Design", "Mobile Responsive", "Performance Optimization"]
    },
    {
      icon: Store,
      title: "E-commerce Solutions",
      description: "Full-featured online stores with secure payment integration and inventory management",
      features: ["Payment Gateway", "Inventory System", "Shopping Cart"]
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Data-driven strategies to improve visibility and drive organic traffic",
      features: ["Keyword Research", "Analytics", "Content Strategy"]
    },
    {
      icon: ShieldCheck,
      title: "Security & Maintenance",
      description: "Ongoing support with regular updates and security monitoring",
      features: ["SSL Certificates", "Backup Solutions", "Security Audits"]
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "24/7 expert assistance and regular maintenance to keep your site running smoothly",
      features: ["Performance Monitoring", "Bug Fixes", "Regular Updates"]
    },
    {
      icon: Paintbrush,
      title: "Design Services",
      description: "Professional branding and design solutions for digital presence",
      features: ["Logo Design", "Brand Identity", "Visual Assets"]
    }
  ];

  return (
    <div className="relative bg-white z-30">
      {/* Services Title Section */}
      <section className="min-h-screen sticky top-16 bg-white/80 backdrop-blur-sm z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl w-full px-4">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive web solutions tailored to your needs. From concept to deployment,
                we handle every aspect of your digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section 
          key={index}
          className="min-h-screen sticky top-16 bg-white/10 z-20"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-2xl w-full mx-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-purple-100 hover:border-purple-300 transition-all duration-300">
                <div className="mb-6 transform transition-transform duration-300 hover:scale-110">
                  <service.icon className="w-16 h-16 text-purple-600" />
                </div>
                
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-600 group">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesSection;