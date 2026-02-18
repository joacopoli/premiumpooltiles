
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Direct notification via WhatsApp containing only the email data for the business owner
    const waMessage = encodeURIComponent(`Newsletter Subscription Request: ${email}`);
    const waLink = `https://wa.me/5491155867074?text=${waMessage}`;
    
    window.open(waLink, '_blank');
    setEmail('');
  };

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            {/* Brand Logo Section */}
            <a href="/" className="flex items-center space-x-3 mb-6 group">
              <img 
                src="https://i.ibb.co/rXrY4fh/unnamed.jpg" 
                alt="Premium Pool Tiles Logo" 
                className="w-10 h-10 object-cover rounded-full border border-white/10 group-hover:border-cyan-500/50 transition-all"
              />
              <span className="text-lg font-bold tracking-tight uppercase">Premium <span className="text-cyan-400">Pool Tiles</span></span>
            </a>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Leading the standard for luxury glass mosaic surfaces in North America. Elevating aquatic design through innovation and artisan craftsmanship.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-cyan-400">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-light">
              <li><a href="#collections" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Request Sample</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Data</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-cyan-400">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-cyan-400">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Subscribe to News</p>
              <form onSubmit={handleSubscribe} className="flex">
                <input 
                  type="email" 
                  placeholder="Email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-900 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 w-full" 
                />
                <button type="submit" className="bg-cyan-500 px-4 py-2 hover:bg-cyan-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest gap-4">
          <p>&copy; 2025 Premium Pool Tiles LLC. All rights reserved.</p>
          <p>Handcrafted Design for Luxury Environments</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
