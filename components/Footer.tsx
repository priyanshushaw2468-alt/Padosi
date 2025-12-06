import React from 'react';
import { APP_NAME } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-padosi-green text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-white tracking-tight">{APP_NAME}</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Reconnecting neighborhoods, one delivery at a time. Empowering local sellers with simple tech and big hearts.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-padosi-cream text-padosi-green flex items-center justify-center hover:bg-padosi-orange hover:text-white transition-all duration-300 shadow-md transform hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-padosi-cream text-padosi-green flex items-center justify-center hover:bg-padosi-orange hover:text-white transition-all duration-300 shadow-md transform hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-padosi-cream text-padosi-green flex items-center justify-center hover:bg-padosi-orange hover:text-white transition-all duration-300 shadow-md transform hover:-translate-y-1">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-padosi-cream text-padosi-green flex items-center justify-center hover:bg-padosi-orange hover:text-white transition-all duration-300 shadow-md transform hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-padosi-orange">Shop Local</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-padosi-orange rounded-full mr-2"></span>Fresh Vegetables</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-padosi-orange rounded-full mr-2"></span>Dairy & Eggs</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-padosi-orange rounded-full mr-2"></span>Homemade Pickles</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-padosi-orange rounded-full mr-2"></span>Artisan Crafts</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-padosi-orange rounded-full mr-2"></span>Bakery Items</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-padosi-orange">Support</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-3 text-padosi-orange flex-shrink-0" />
                <span>123 Market Street, <br/>Indiranagar, Bangalore</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-padosi-orange flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-padosi-orange flex-shrink-0" />
                <span>hello@padosi.local</span>
              </li>
              <li className="flex items-center">
                <HelpCircle size={16} className="mr-3 text-padosi-orange flex-shrink-0" />
                <a href="#" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
               <a href="#" className="text-sm text-gray-300 hover:text-white block mb-2">Help Center</a>
               <a href="#" className="text-sm text-gray-300 hover:text-white block">Partner with us</a>
            </div>
          </div>

          {/* Newsletter & App */}
          <div className="flex flex-col h-full">
             <div className="mb-8">
               <h4 className="text-lg font-bold mb-6 text-padosi-orange">Stay Connected</h4>
               <p className="text-gray-300 text-sm mb-4">
                 Get the latest offers from your neighbors.
               </p>
               <div className="flex flex-col space-y-3">
                 <input 
                   type="email" 
                   placeholder="Your email address" 
                   className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-padosi-orange focus:bg-white/10 transition-colors placeholder-gray-500"
                 />
                 <button className="bg-padosi-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-sm transition-colors flex items-center justify-center">
                   Subscribe <ArrowRight size={16} className="ml-2"/>
                 </button>
               </div>
             </div>

             {/* App Download */}
             <div className="mt-auto pt-6 border-t border-white/10">
               <h5 className="text-sm font-bold text-white mb-3">Get the Padosi App</h5>
               <div className="flex flex-wrap gap-3">
                 <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                   <img src="https://placehold.co/135x40/000000/ffffff?text=App+Store" alt="Download on App Store" className="h-10 rounded" />
                 </a>
                 <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                   <img src="https://placehold.co/135x40/000000/ffffff?text=Google+Play" alt="Get it on Google Play" className="h-10 rounded" />
                 </a>
               </div>
             </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Padosi Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;