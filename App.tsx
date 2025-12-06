import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import ProductShowcase from './components/ProductShowcase';
import ShopList from './components/ShopList';
import SellerBridge from './components/SellerBridge';
import Testimonials from './components/Testimonials'; // Assuming this exists from previous context
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-padosi-charcoal bg-padosi-cream flex flex-col overflow-x-hidden selection:bg-padosi-orange/30 selection:text-padosi-green">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProps />
        <ProductShowcase />
        <ShopList />
        <SellerBridge />
        {/* Testimonials component was added in a previous step, keeping consistent */}
        <div id="mission"> {/* Anchor for "Our Mission" logic often maps here or SellerBridge */}
          {/* Content */}
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;