import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIImpact from './components/AIImpact';
import Services from './components/Services';
import SaaSAdvertisement from './components/SaaSAdvertisement';
import Donate from './components/Donate';
import News from './components/News';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AIImpact />
        <Services />
        <SaaSAdvertisement />
        <News />
        <About />
        <Reviews />
        <Donate />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
