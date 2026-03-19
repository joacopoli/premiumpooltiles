
import React, { useState } from 'react';

const RequestSample: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    collection: 'Aqua Glaze'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = encodeURIComponent(`Luxury Sample Request:
Name: ${formData.name}
Email: ${formData.email}
Shipping Address: ${formData.address}
Collection of Interest: ${formData.collection}`);
    window.open(`https://wa.me/5491155867074?text=${waMessage}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-rose-700 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">White Glove Service</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-6">Request a Sample</h1>
          <p className="text-slate-500 font-light text-lg leading-relaxed max-w-2xl mx-auto italic">
            "Experience the texture and brilliance of our glass mosaic in your own space."
          </p>
        </div>

        <div className="bg-slate-50 p-8 sm:p-12 rounded-sm shadow-xl border border-slate-100">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                <input 
                  type="text" required
                  className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-rose-700 transition-colors"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                <input 
                  type="email" required
                  className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-rose-700 transition-colors"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div className="group">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">USA Shipping Address</label>
              <input 
                type="text" required
                placeholder="Street, City, State, ZIP"
                className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-rose-700 transition-colors"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              />
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Collection of Interest</label>
              <select 
                className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-rose-700 transition-colors"
                value={formData.collection}
                onChange={e => setFormData({...formData, collection: e.target.value})}
              >
                <option>Aqua Glaze</option>
                <option>Cloud Mist</option>
                <option>Deep Ocean</option>
                <option>Emerald Bay</option>
                <option>Azure Breeze</option>
                <option>Steel Grey</option>
              </select>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-slate-900 text-white py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-rose-800 transition-all rounded-sm shadow-lg"
              >
                Dispatch Sample Kit
              </button>
            </div>
          </form>
          <p className="mt-8 text-center text-[10px] text-slate-400 uppercase tracking-widest">
            Complimentary samples for trade professionals and estate owners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestSample;
