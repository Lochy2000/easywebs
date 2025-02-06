// src/pages/Portfolio.tsx

import React,{useEffect} from 'react';
import MainLayout from '../layouts/MainLayout';
import PortfolioShowcase from '../components/portfolio/PortfolioShowcase';

const PortfolioPage = () => {

    // Reset scroll position when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <MainLayout>
      <div className="pt-16">
        <PortfolioShowcase />
      </div>
    </MainLayout>
  );
};

export default PortfolioPage;