import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoCarousel from './components/LogoCarousel';
import InteractiveCatalog from './components/InteractiveCatalog';
import ServicesSection from './components/ServicesSection';
import DreMoonSection from './components/DreMoonSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <HeroSection />
        <LogoCarousel />
        <ServicesSection />
        <DreMoonSection />
        <InteractiveCatalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
