import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoCarousel from './components/LogoCarousel';
import InteractiveCatalog from './components/InteractiveCatalog';
import ServicesSection from './components/ServicesSection';
import ArtistPortal from './components/ArtistPortal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary selection:text-background-dark">
      <Navbar />
      <main>
        <HeroSection />
        <LogoCarousel />
        <ServicesSection />
        <InteractiveCatalog />
        <ArtistPortal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
