
import React from 'react';

const ShippingReturns: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Logistics Excellence</span>
          <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-4">Shipping & Returns</h1>
          <p className="text-slate-400 font-light max-w-2xl">Ensuring your premium materials arrive in perfect condition, exactly when your project demands them.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-lg font-bold uppercase tracking-widest text-slate-900 border-b-2 border-cyan-500 pb-2 inline-block">Premium Shipping</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">🚛</div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-slate-700">North America Coverage</h3>
                  <p className="text-sm text-slate-500 font-light mt-1">We deliver to all 50 states, with specialized white-glove handling for major architectural hubs in FL, CA, and NY.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">🛡️</div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-slate-700">Transit Insurance</h3>
                  <p className="text-sm text-slate-500 font-light mt-1">Every pallet is fully insured against breakage or loss during transit, providing total peace of mind.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-lg font-bold uppercase tracking-widest text-slate-900 border-b-2 border-cyan-500 pb-2 inline-block">Return Policy</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">↩️</div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-slate-700">30-Day Window</h3>
                  <p className="text-sm text-slate-500 font-light mt-1">Unopened cartons may be returned within 30 days of delivery. Returns must be in original architectural packaging.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">📦</div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-slate-700">Restocking</h3>
                  <p className="text-sm text-slate-500 font-light mt-1">A 20% restocking fee applies to standard returns. Custom-pigmented orders are non-refundable once production begins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturns;
