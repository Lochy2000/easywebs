import React,{useEffect} from 'react';
import MainLayout from '../layouts/MainLayout';
import ProcessTimeline from '../components/ProcessTimeline';

const ProcessPage = () => {

    // Reset scroll position when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <MainLayout>
      <div className="pt-16">
        <ProcessTimeline />
      </div>
    </MainLayout>
  );
};

export default ProcessPage;