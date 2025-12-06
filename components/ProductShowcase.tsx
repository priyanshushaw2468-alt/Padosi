import React, { useRef } from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // approximate card width + gap
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-padosi-cream" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-padosi-green mb-2">
              Fresh on the Market
            </h2>
            <p className="text-gray-500">Curated goods from your block.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center text-padosi-orange font-bold hover:text-orange-700 transition-colors">
              View All <Plus size={18} className="ml-1" />
            </button>
            
            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-padosi-charcoal hover:bg-padosi-green hover:text-white hover:border-transparent transition-all shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-padosi-charcoal hover:bg-padosi-green hover:text-white hover:border-transparent transition-all shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar snap-x scroll-smooth"
        >
          {FEATURED_PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[280px] w-[280px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 snap-center border border-gray-100 group flex-shrink-0"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-padosi-green shadow-sm">
                  {product.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-padosi-charcoal mb-4 line-clamp-1">
                  {product.name}
                </h3>
                
                {/* Seller Chip */}
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <img 
                    src={product.sellerAvatar} 
                    alt={product.sellerName} 
                    className="w-8 h-8 rounded-full object-cover mr-3 border border-gray-200"
                  />
                  <span className="text-sm text-gray-500">
                    Sold by <span className="font-semibold text-padosi-green">{product.sellerName}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="md:hidden mt-4 text-center">
            <button className="inline-flex items-center text-padosi-orange font-bold">
              View All <Plus size={18} className="ml-1"/>
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;