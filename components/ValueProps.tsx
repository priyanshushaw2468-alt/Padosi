import React from 'react';
import { VALUE_PROPS } from '../constants';

const ValueProps: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-padosi-cream border border-transparent hover:border-padosi-green/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-padosi-green">
                <prop.icon size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-padosi-green mb-3">
                {prop.title}
              </h3>
              <p className="text-gray-600 font-medium">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;