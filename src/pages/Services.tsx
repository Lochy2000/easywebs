import React,{useEffect} from 'react';
import MainLayout from '../layouts/MainLayout';
import ServicesSection from '../components/ServicesSection';

const ServicesPage = () => {

    // Reset scroll position when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <MainLayout>
      <div className="pt-16">
        <ServicesSection />
      </div>
    </MainLayout>
  );
};

export default ServicesPage;