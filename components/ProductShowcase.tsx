import React, { useRef } from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; 
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
    <section className="py-24 bg-padosi-cream" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
             <h2 className="text-3xl md:text-5xl font-display font-bold text-padosi-green mb-4 tracking-tight">
              Fresh on the Market
            </h2>
            <p className="text-gray-500 text-lg font-light">Hand-picked daily essentials from your block.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center text-padosi-orange font-bold text-sm tracking-widest uppercase hover:text-orange-700 transition-colors">
              View All <Plus size={16} className="ml-2" />
            </button>
            
            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-gray-200/50 bg-white flex items-center justify-center text-padosi-charcoal hover:bg-padosi-green hover:text-white hover:border-transparent transition-all shadow-soft hover:shadow-lg"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-gray-200/50 bg-white flex items-center justify-center text-padosi-charcoal hover:bg-padosi-green hover:text-white hover:border-transparent transition-all shadow-soft hover:shadow-lg"
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
          className="flex gap-6 overflow-x-auto pb-12 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar snap-x scroll-smooth"
        >
          {FEATURED_PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[280px] w-[280px] bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 snap-center group flex-shrink-0"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-sm font-bold text-padosi-green shadow-sm">
                  {product.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-padosi-charcoal mb-4 line-clamp-1 tracking-tight">
                  {product.name}
                </h3>
                
                {/* Seller Chip */}
                <div className="flex items-center pt-4 border-t border-gray-50">
                  <img 
                    src={product.sellerAvatar} 
                    alt={product.sellerName} 
                    className="w-8 h-8 rounded-full object-cover mr-3 ring-2 ring-white shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Sold by</span>
                    <span className="text-sm font-semibold text-padosi-green leading-none mt-0.5">{product.sellerName}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="md:hidden mt-2 text-center">
            <button className="inline-flex items-center text-padosi-orange font-bold text-sm tracking-widest uppercase">
              View All <Plus size={16} className="ml-2"/>
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;