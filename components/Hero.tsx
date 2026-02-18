
import React from 'react';

const Hero: React.FC = () => {
  const waMessage = encodeURIComponent("Hi! I want to transform my backyard with Premium Pool Tiles. Could you please help me with a personalized quote? My project is located in [Location]. Best regards");
  const waLink = `https://wa.me/5491155867074?text=${waMessage}`;

  return (
    <section className="relative h-[100svh] w-full flex items-center overflow-hidden">
      {/* Background Image with High Quality Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Pool Background" 
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-950/95 via-slate-950/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full text-white pt-20 md:pt-0">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-[1.1] mb-6 tracking-tighter">
            Transforming Backyards <br/><span className="text-cyan-400 italic font-medium">into Paradise</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-lg">
            Elevating aquatic design with premium finishes that capture the essence of light and water.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#collections" 
              className="bg-white text-slate-950 px-8 py-5 text-center font-bold uppercase tracking-widest transition-all rounded-sm shadow-2xl min-h-[60px] flex items-center justify-center hover:bg-cyan-500 hover:text-white"
            >
              Collections
            </a>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-8 py-5 text-center font-bold uppercase tracking-widest transition-all rounded-sm bg-white/5 backdrop-blur-sm min-h-[60px] flex items-center justify-center hover:border-white"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40">
        <span className="text-[8px] uppercase tracking-[0.4em] font-bold">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
