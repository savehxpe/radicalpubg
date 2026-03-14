import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoCarousel from './components/LogoCarousel';
import InteractiveCatalog from './components/InteractiveCatalog';
import ServicesSection from './components/ServicesSection';
import DreMoonSection from './components/DreMoonSection';
import Footer from './components/Footer';
import { InquirySection } from './components/InquirySection';

const LiquidChromeBackground = React.lazy(() =>
  import('./components/LiquidChromeBackground').then(module => ({ default: module.LiquidChromeBackground }))
);

function App() {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black">
      <Suspense fallback={<div className="fixed inset-0 bg-[#000000] -z-10" />}>
        <LiquidChromeBackground />
      </Suspense>
      <Navbar />
      <main>
        <HeroSection />
        <LogoCarousel />
        <ServicesSection />
        <DreMoonSection />
        <InteractiveCatalog />
        <InquirySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
