import React, { useState } from 'react';
import { Star, ArrowRight, Trophy, Users, Briefcase, Clock } from 'lucide-react';

const SocialProof = () => {
  // Expanded testimonials array
  const allTestimonials = [
    {
      id: 1,
      name: 'Global Dignity',
      role: 'https://globaldignity.org/',
      image: '/api/placeholder/64/64',
      content: 'EasyWeb transformed our online presence. The team delivered beyond our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'HerEdge',
      role: 'heredge.club',
      image: '/api/placeholder/64/64',
      content: 'Professional, creative, and incredibly responsive. They made the process seamless.',
      rating: 5
    },
    {
      id: 3,
      name: 'quistenglishprogram',
      role: 'https://quistenglishprogram.com/',
      image: '/api/placeholder/64/64',
      content: 'The website they built has doubled our class bookings. Outstanding service and results!',
      rating: 5
    },
    {
      id: 4,
      name: 'Predictable Parenting',
      role: 'https://mettetheilmann.com/',
      image: '/api/placeholder/64/64',
      content: 'Our online reservations increased by 150% after launching our new website. Incredible ROI.',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Creative Director, Design Co',
      image: '/api/placeholder/64/64',
      content: 'As a designer myself, I have high standards. EasyWeb exceeded all expectations.',
      rating: 5
    },
    {
      id: 6,
      name: 'David Martinez',
      role: 'E-commerce Manager',
      image: '/api/placeholder/64/64',
      content: 'Our conversion rate improved by 75% with the new website. Best investment we made.',
      rating: 5
    }
  ];

  const stats = [
    { icon: Trophy, value: '10+', label: 'Websites Launched' },
    { icon: Users, value: '98%', label: 'Client Satisfaction' },
    { icon: Briefcase, value: '2+', label: 'Years Experience' },
    { icon: Clock, value: '4-6', label: 'Weeks Average Delivery' },
  ];

  // State to track current testimonial pair index
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Get current pair of testimonials
  const getCurrentTestimonials = () => {
    const startIndex = (currentPairIndex * 2) % allTestimonials.length;
    return [
      allTestimonials[startIndex],
      allTestimonials[(startIndex + 1) % allTestimonials.length]
    ];
  };

  // Handle rotating to next testimonials
  const handleViewMore = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentPairIndex((prev) => (prev + 1) % (allTestimonials.length / 2));
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group p-4">
              <div className="mb-3 md:mb-4 flex justify-center">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Don't just take our word for it - hear from our clients
          </p>
        </div>

        {/* Testimonials Grid with Animation */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {getCurrentTestimonials().map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`p-4 md:p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white 
                border border-purple-100 hover:border-purple-300 transition-all duration-500
                ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">{testimonial.name}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}</p>
                  {/* <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-purple-500 text-purple-500" />
                    ))}
                  </div> */}
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center pb-4 md:pb-8">
          <button 
            onClick={handleViewMore}
            disabled={isAnimating}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 
              font-semibold text-sm md:text-base group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            View More Success Stories
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 
              ${isAnimating ? '' : 'group-hover:translate-x-1'}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;