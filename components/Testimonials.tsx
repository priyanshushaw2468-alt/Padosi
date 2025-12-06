import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F5F0]" id="support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-padosi-dark">
            Voices from the Neighborhood
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative">
              <div className="absolute top-8 left-8 text-padosi-green opacity-20">
                <Quote size={48} />
              </div>
              <p className="text-xl text-gray-700 italic mb-8 relative z-10 pt-4 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-auto flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                   <img src={`https://placehold.co/100x100?text=${t.author.charAt(0)}`} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-padosi-dark">{t.author}</h4>
                  <span className={`text-sm font-semibold uppercase tracking-wider ${t.role === 'Seller' ? 'text-padosi-orange' : 'text-padosi-green'}`}>
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;