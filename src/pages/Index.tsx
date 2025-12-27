import React from 'react';
import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DownloadSection from '@/components/DownloadSection';
import DeveloperSection from '@/components/DeveloperSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <DownloadSection />
          <DeveloperSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
