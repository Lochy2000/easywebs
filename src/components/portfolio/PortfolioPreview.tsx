import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PortfolioPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Our Work Speaks for Itself</h2>
        <p className="text-lg text-gray-300 mb-8">
          Explore our collection of beautifully designed and fully functional websites.
          From restaurants to creative agencies, we bring ideas to life.
        </p>
        
        <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-700">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/demo/democards/COMINGSOON.gif`} 
            alt="Portfolio preview" 
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="mt-8">
          <Link 
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700 transition rounded-lg shadow-md"
          >
            View Full Portfolio <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
