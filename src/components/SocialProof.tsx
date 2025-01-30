import React from 'react';
import { Star, ArrowRight, Trophy, Users, Briefcase, Clock } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    { icon: Trophy, value: '10+', label: 'Websites Launched' },
    { icon: Users, value: '98%', label: 'Client Satisfaction' },
    { icon: Briefcase, value: '2+', label: 'Years Experience' },
    { icon: Clock, value: '4-6', label: 'Weeks Average Delivery' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: '/api/placeholder/64/64',
      content: 'EasyWeb transformed our online presence. The team delivered beyond our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      image: '/api/placeholder/64/64',
      content: 'Professional, creative, and incredibly responsive. They made the process seamless.',
      rating: 5
    }
  ];

  return (
    <section className="min-h-screen sticky top-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 flex justify-center">
                <stat.icon className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:border-purple-300 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-purple-500 text-purple-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="/testimonials" 
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold group"
          >
            View More Success Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;