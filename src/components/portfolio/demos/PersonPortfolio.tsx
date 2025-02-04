import React from "react";
import { Camera, User, LineChart, HeartPulse, ArrowRight } from "lucide-react";


const PersonPortfolio = () => {

return (
    <div className="min-h-screen bg-gray-900 text-white p-12">
      <h1 className="text-5xl font-bold mb-6">Capture the Moment</h1>
      <p className="text-lg mb-6 text-gray-300">Showcasing stunning photography portfolios with interactive galleries and high-resolution image previews.</p>
      <button className="bg-purple-600 px-6 py-3 rounded-lg text-white flex items-center gap-2">
        View Gallery <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PersonPortfolio;