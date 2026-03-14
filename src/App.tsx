import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoCarousel from './components/LogoCarousel';
import InteractiveCatalog from './components/InteractiveCatalog';
import ServicesSection from './components/ServicesSection';
import DreMoonSection from './components/DreMoonSection';
import Footer from './components/Footer';
import { LiquidChromeBackground } from './components/LiquidChromeBackground';
import { InquirySection } from './components/InquirySection';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black">
      <LiquidChromeBackground />
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
