import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="relative">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;