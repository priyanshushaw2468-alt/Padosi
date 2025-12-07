import React from 'react';
import { MapPin, Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-28 lg:py-32 overflow-hidden bg-padosi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-10 z-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-padosi-green leading-[1.05] tracking-tight">
              From Their Farm to Your Door within <span className="text-padosi-orange inline-block relative whitespace-nowrap">60 Mins.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal tracking-wide">
              Support local neighbors. Fresh, handmade, and ethical goods without the warehouse wait.
            </p>

            {/* Interactive Search Bar */}
            <div className="w-full max-w-lg mx-auto lg:mx-0 bg-white p-2 rounded-2xl shadow-soft flex items-center border border-gray-100/50 transition-all hover:shadow-hover hover:border-gray-200">
              <div className="pl-4 pr-3 text-padosi-orange">
                <MapPin size={22} fill="#E07A5F" fillOpacity={0.15} strokeWidth={2.5} />
              </div>
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="flex-grow py-3 text-padosi-charcoal placeholder-gray-400 outline-none bg-transparent text-base font-medium"
              />
              <button className="bg-padosi-green hover:bg-[#0D2B20] text-white p-3 md:px-8 md:py-3 rounded-xl font-bold flex items-center justify-center transition-all active:scale-95 shadow-md">
                <span className="hidden md:inline tracking-wide text-sm">Search</span>
                <span className="md:hidden"><Search size={20}/></span>
              </button>
            </div>
            
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-2 text-sm font-medium text-gray-400">
               <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-padosi-green mr-2.5"></span>Free Delivery</span>
               <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-padosi-green mr-2.5"></span>No Minimum Order</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[450px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
             <img 
               src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200" 
               alt="Smiling Indian shopkeeper" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-padosi-green/50 to-transparent mix-blend-multiply"></div>
             
             {/* Floating Badge */}
             <div className="absolute bottom-10 left-8 md:left-12 bg-white/95 backdrop-blur-md px-8 py-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40">
               <p className="text-padosi-green font-bold font-display text-2xl tracking-tight">100% Local</p>
               <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mt-1">Verified Neighborhood Sellers</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;