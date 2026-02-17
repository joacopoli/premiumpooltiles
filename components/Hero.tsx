
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100svh] w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Pool Background" 
          className="w-full h-full object-cover"
          // Corrected fetchPriority casing to match React standard for img attributes
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full text-white mt-10 md:mt-0">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6 rounded-sm">
            Excellence in Glass Mosaics
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Transforming Backyards into <span className="text-cyan-400 italic font-medium">Paradise</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 font-light leading-relaxed max-w-lg">
            Premium Glass Mosaic for Luxury Pools. 
            Experience the perfect fusion where durability meets uncompromising elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-center font-bold uppercase tracking-widest transition-all rounded-sm shadow-xl min-h-[56px] flex items-center justify-center"
            >
              View Collection
            </a>
            <a 
              href="#projects" 
              className="border border-white/30 hover:border-white text-white px-8 py-4 text-center font-bold uppercase tracking-widest transition-all rounded-sm bg-white/5 backdrop-blur-sm min-h-[56px] flex items-center justify-center"
            >
              Our Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce md:bottom-10">
        <div className="w-0.5 h-10 bg-gradient-to-b from-cyan-400 to-transparent rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;
