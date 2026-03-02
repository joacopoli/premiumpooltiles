
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none font-light text-slate-500 space-y-6">
          <p>
            Welcome to Premium Pool Tiles. By accessing this website or purchasing our artisan materials, you agree to be bound by the following terms and conditions.
          </p>
          <h2 className="text-slate-900 font-bold uppercase tracking-widest text-sm">1. Product Integrity</h2>
          <p>
            Our glass mosaics are artisanal products. Minor variations in tone and texture are inherent to the hand-pouring process and are considered a hallmark of luxury quality rather than a defect.
          </p>
          <h2 className="text-slate-900 font-bold uppercase tracking-widest text-sm">2. Professional Installation</h2>
          <p>
            Premium materials require master-grade installation. Premium Pool Tiles is not liable for structural failures resulting from improper installation techniques or the use of non-recommended adhesives.
          </p>
          <h2 className="text-slate-900 font-bold uppercase tracking-widest text-sm">3. Quotations & Pricing</h2>
          <p>
            Project quotes are valid for 30 calendar days. Due to the nature of luxury logistics and mineral oxide pricing, quotes are subject to revision after this period.
          </p>
          <h2 className="text-slate-900 font-bold uppercase tracking-widest text-sm">4. Limitation of Liability</h2>
          <p>
            Our liability is limited strictly to the replacement of defective materials before installation. We are not liable for labor costs, project delays, or indirect damages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
