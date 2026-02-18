import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! A luxury consultant will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', address: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="bg-slate-50 rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-slate-900 p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 uppercase tracking-tight">Request a Catalog</h2>
            <p className="text-slate-400 font-light text-sm sm:text-base mb-10 sm:mb-12">
              Discover the full collection and technical specifications of our premium glass mosaics.
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400 mt-1 shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-[10px] uppercase tracking-widest text-cyan-400">Headquarters</p>
                  <p className="text-slate-300 text-sm font-light mt-1">Luxury Design District, FL 33137, USA</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400 mt-1 shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-[10px] uppercase tracking-widest text-cyan-400">Direct Line</p>
                  <p className="text-slate-300 text-sm font-light mt-1">+1 (800) PREMIUM-TILES</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-8 sm:p-12 bg-white">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:gap-8">
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1 group-focus-within:text-cyan-500 transition-colors">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-base"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1 group-focus-within:text-cyan-500 transition-colors">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-base"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1 group-focus-within:text-cyan-500 transition-colors">Phone Number</label>
                <input 
                  type="tel" 
                  inputMode="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-base"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1 group-focus-within:text-cyan-500 transition-colors">Project Address in USA</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-base"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <div className="md:col-span-2 group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1 group-focus-within:text-cyan-500 transition-colors">Message (Optional)</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none text-base"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 font-bold uppercase tracking-widest rounded-sm shadow-lg transition-all active:scale-95 min-h-[56px]"
                >
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;