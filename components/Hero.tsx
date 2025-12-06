import React from 'react';
import { MapPin, Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden bg-padosi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8 z-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-padosi-green leading-[1.1] tracking-tight">
              From Their Farm to Your Door within <span className="text-padosi-orange italic relative inline-block">60 Mins.<span className="absolute bottom-2 left-0 w-full h-1 bg-padosi-orange/20 -z-10 transform -rotate-1"></span></span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light tracking-wide">
              Support local neighbors. Fresh, handmade, and ethical goods without the warehouse wait.
            </p>

            {/* Interactive Search Bar */}
            <div className="w-full max-w-lg mx-auto lg:mx-0 bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center border border-gray-100 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="pl-4 pr-3 text-padosi-orange">
                <MapPin size={24} fill="#E07A5F" fillOpacity={0.2} />
              </div>
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="flex-grow py-3 text-padosi-charcoal placeholder-gray-400 outline-none bg-transparent text-base sm:text-lg font-medium"
              />
              <button className="bg-padosi-green hover:bg-green-900 text-white p-3 md:px-8 md:py-3 rounded-xl font-bold flex items-center justify-center transition-all active:scale-95">
                <span className="hidden md:inline tracking-wide">Search</span>
                <span className="md:hidden"><Search size={20}/></span>
              </button>
            </div>
            
            <div className="pt-2 flex items-center justify-center lg:justify-start space-x-6 text-sm font-medium text-gray-500">
               <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-padosi-green mr-2"></span>Free Delivery</span>
               <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-padosi-green mr-2"></span>No Minimum Order</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
             <img 
               src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200" 
               alt="Smiling Indian shopkeeper handing bag to customer" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-padosi-green/40 to-transparent mix-blend-multiply"></div>
             
             {/* Floating Badge */}
             <div className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/95 backdrop-blur-md px-8 py-5 rounded-2xl shadow-xl border border-white/20">
               <p className="text-padosi-green font-bold font-serif text-2xl tracking-tight">100% Local</p>
               <p className="text-gray-500 text-sm font-medium tracking-wide uppercase mt-1">Verified Neighborhood Sellers</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;