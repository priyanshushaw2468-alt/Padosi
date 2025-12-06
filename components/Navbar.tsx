import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_NAME, NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-padosi-cream/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-3xl font-bold text-padosi-green tracking-tight">
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-padosi-charcoal hover:text-padosi-orange font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-padosi-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Sell With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-padosi-charcoal hover:text-padosi-green p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-padosi-cream border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-lg font-medium text-padosi-charcoal hover:text-padosi-green py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-padosi-orange text-white py-3 rounded-xl font-bold">
              Sell With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;