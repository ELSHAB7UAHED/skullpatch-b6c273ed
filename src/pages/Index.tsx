import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DownloadSection from '@/components/DownloadSection';
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
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
