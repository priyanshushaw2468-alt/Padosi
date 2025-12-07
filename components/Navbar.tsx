import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_NAME, NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-display text-3xl font-extrabold text-padosi-green tracking-tight">
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-padosi-charcoal/80 hover:text-padosi-green font-medium transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-padosi-orange hover:bg-[#D36A4F] text-white px-7 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm tracking-wide">
              Sell With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-padosi-charcoal hover:text-padosi-green p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-padosi-cream/95 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-2xl h-screen">
          <div className="px-6 pt-8 pb-8 space-y-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-2xl font-display font-bold text-padosi-charcoal hover:text-padosi-green py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8">
              <button className="w-full bg-padosi-orange text-white py-4 rounded-xl font-bold text-lg shadow-lg">
                Sell With Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;