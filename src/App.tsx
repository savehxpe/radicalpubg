import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoCarousel from './components/LogoCarousel';
import InteractiveCatalog from './components/InteractiveCatalog';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <HeroSection />
        <LogoCarousel />
        <ServicesSection />
        <InteractiveCatalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
