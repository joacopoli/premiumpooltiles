import React from 'react';

const ProductShowcase: React.FC = () => {
  const products = [
    { 
      code: "SCM-124", 
      name: "Aqua Glaze", 
      img: "https://i.ibb.co/YSr38rx/2.jpg", 
      description: "Artisan hand-poured glass mosaic with a crystalline aqua gradient and high-gloss finish. Engineered for superior light refraction.",
      featured: true
    },
    { 
      code: "HVZ-8120", 
      name: "Cloud Mist", 
      img: "https://i.ibb.co/B2G1SbHM/17.jpg",
      description: "Ultra-light crystalline blue for bright environments and modern aquatic spaces."
    },
    { 
      code: "HVZ-8122", 
      name: "Deep Ocean", 
      img: "https://i.ibb.co/MxMwNYjW/18.jpg",
      description: "Solid cobalt pigment for a classic architectural look with deep water reflections."
    },
    { 
      code: "HVZ-8123", 
      name: "Emerald Bay", 
      img: "https://i.ibb.co/m5dq5YqS/19.jpg",
      description: "Rich dark teal with natural stone-like texture for organic pool designs."
    },
    { 
      code: "HVZ-8124", 
      name: "Azure Breeze", 
      img: "https://i.ibb.co/0VFj4hp0/20.jpg",
      description: "Vibrant sky blue tones engineered for high sunlight exposure."
    },
    { 
      code: "HVZ-82023", 
      name: "Steel Grey", 
      img: "https://i.ibb.co/sptGKyLj/21.jpg",
      description: "Modern metallic charcoal for sophisticated, minimal architectural palettes."
    }
  ];

  return (
    <section id="collections" className="py-24 bg-slate-50 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Exclusive Collection</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Artisan Venecitas</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="max-w-xl mx-auto text-slate-500 font-light text-sm sm:text-lg leading-relaxed px-4">
            Mosaics engineered for the most demanding aquatic environments. Technical precision meets aesthetic purity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {products.map((p, idx) => (
            <div key={idx} className={`group bg-white rounded-sm border ${p.featured ? 'border-cyan-200' : 'border-slate-100'} shadow-sm overflow-hidden flex flex-col transition-all duration-700 hover:shadow-2xl hover:-translate-y-2`}>
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Product Badge */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-sm shadow-sm border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">{p.code}</span>
                  </div>
                  {p.featured && (
                    <div className="bg-cyan-500 px-3 py-1.5 rounded-sm shadow-lg shadow-cyan-500/30">
                      <span className="text-[9px] font-bold text-white uppercase tracking-widest">New Arrival</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-3 group-hover:text-cyan-600 transition-colors">{p.name}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">{p.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em] mb-1">Status</span>
                    <span className="text-xs font-medium text-slate-400">Available in Stock</span>
                  </div>
                  <button className="min-h-[48px] px-8 py-3 text-slate-900 font-bold text-[10px] uppercase tracking-[0.2em] border border-slate-200 hover:bg-slate-900 hover:text-white transition-all rounded-sm active:scale-95">
                    Request Sample
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-xs font-light uppercase tracking-widest mb-6">Can't find the perfect tone?</p>
          <a href="#contact" className="inline-block text-cyan-600 font-bold text-xs uppercase tracking-[0.3em] border-b-2 border-cyan-100 pb-1 hover:border-cyan-500 transition-all">
            Consult our Color Specialist
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;