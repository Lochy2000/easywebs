// src/pages/Portfolio.tsx

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PortfolioShowcase from '../components/portfolio/PortfolioShowcase';

const PortfolioPage = () => {
  return (
    <MainLayout>
      <div className="pt-16">
        <PortfolioShowcase />
      </div>
    </MainLayout>
  );
};

export default PortfolioPage;