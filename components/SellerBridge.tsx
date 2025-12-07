import React from 'react';
import { Camera, Receipt, CheckCircle } from 'lucide-react';

const SellerBridge: React.FC = () => {
  return (
    <section className="py-24 bg-[#E07A5F]/10" id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-padosi-green mb-6 tracking-tight">
            Own a Shop? Trouble with Phones? <br/>
            <span className="text-padosi-orange">We've Got You.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We built Padosi so you don't have to change a thing.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-padosi-orange/20 -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-sm border border-orange-100">
            <div className="w-20 h-20 bg-padosi-orange text-white rounded-2xl rotate-3 flex items-center justify-center mb-6 text-2xl font-bold shadow-lg shadow-orange-200">
              1
            </div>
            <h3 className="text-xl font-display font-bold text-padosi-charcoal mb-3">We Visit You</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our local Padosi agent visits your shop to understand your inventory.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-sm border border-orange-100">
            <div className="w-20 h-20 bg-padosi-orange text-white rounded-2xl -rotate-2 flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
              <Camera size={32} />
            </div>
            <h3 className="text-xl font-display font-bold text-padosi-charcoal mb-3">We Click Photos</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We take professional photos and list your products online for you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-sm border border-orange-100">
            <div className="w-20 h-20 bg-padosi-orange text-white rounded-2xl rotate-2 flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
              <Receipt size={32} />
            </div>
            <h3 className="text-xl font-display font-bold text-padosi-charcoal mb-3">You Get Orders</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Orders print automatically on a simple receipt printer. No app needed.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-padosi-green hover:bg-green-800 text-white text-lg font-bold px-10 py-4 rounded-xl shadow-xl transition-transform hover:-translate-y-1">
            Request a Visit
          </button>
        </div>

      </div>
    </section>
  );
};

export default SellerBridge;