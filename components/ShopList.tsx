import React, { useRef } from 'react';
import { NEARBY_SHOPS } from '../constants';
import { Star, MapPin, ArrowRight, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';

const ShopList: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350; // approximate card width + gap
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={14} 
            className={`${star <= Math.round(rating) ? "text-padosi-gold fill-padosi-gold" : "text-gray-400/50 fill-gray-400/50"}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-white border-t border-gray-50" id="local-sellers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="text-left max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-padosi-green mb-6 leading-[1.1] tracking-tight">
              Meet Your <br/> Neighbors
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Take a digital walk down your street. These verified local shops are less than 2km away, ensuring your money stays within the community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4 w-full md:w-auto">
            <button className="hidden md:flex items-center text-padosi-green font-bold text-sm tracking-widest uppercase hover:text-padosi-orange transition-colors group">
              View All Shops <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform"/>
            </button>
            
            {/* Slider Controls */}
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-padosi-charcoal hover:bg-padosi-green hover:text-white hover:border-transparent transition-all shadow-sm active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-padosi-charcoal hover:bg-padosi-green hover:text-white hover:border-transparent transition-all shadow-sm active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-12 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar snap-x scroll-smooth"
        >
          {NEARBY_SHOPS.map((shop) => (
            <div 
              key={shop.id}
              className="min-w-[300px] md:min-w-[380px] group relative h-[420px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500 snap-center border border-gray-100"
            >
              {/* Background Image */}
              <img 
                src={shop.image} 
                alt={shop.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Trust Badge - New Element */}
              <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm py-2 px-4 rounded-full flex items-center shadow-md z-10">
                 <BadgeCheck size={16} className="text-padosi-green mr-1.5" />
                 <span className="text-[10px] font-bold text-padosi-green tracking-widest uppercase">Verified</span>
              </div>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-padosi-green via-padosi-green/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-start mb-3">
                   <h3 className="text-3xl font-serif font-bold leading-none tracking-tight">{shop.name}</h3>
                </div>
                
                <div className="flex items-center space-x-4 mb-5">
                   {/* Star Rating Display */}
                   <div className="flex items-center bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                     <span className="text-sm font-bold text-padosi-gold mr-2">{shop.rating}</span>
                     {renderStars(shop.rating)}
                   </div>
                   
                   <div className="flex items-center text-gray-200 text-sm font-medium tracking-wide">
                    <MapPin size={16} className="mr-1.5 text-padosi-orange" />
                    {shop.distance}
                  </div>
                </div>

                <div className="w-full h-px bg-white/20 mb-5"></div>

                <div className="flex justify-between items-center">
                  <p className="text-padosi-orange font-bold text-xs uppercase tracking-widest">
                    {shop.category}
                  </p>
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <div className="w-10 h-10 rounded-full bg-white text-padosi-green flex items-center justify-center">
                      <ArrowRight size={20} />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile "View All" Button (Only visible on small screens) */}
        <div className="mt-2 md:hidden text-center">
            <button className="inline-flex items-center text-padosi-green font-bold text-sm tracking-widest uppercase">
              View All Shops <ArrowRight size={18} className="ml-2"/>
            </button>
        </div>

      </div>
    </section>
  );
};

export default ShopList;