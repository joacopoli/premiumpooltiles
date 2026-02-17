
import React from 'react';

const ProductShowcase: React.FC = () => {
  const features = [
    { title: "Non-porous", desc: "Highest water resistance" },
    { title: "Chemical resistant", desc: "Unaltered by pool treatments" },
    { title: "UV protection", desc: "Vibrant colors for decades" }
  ];

  const products = [
    { name: "Azure Crystal", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
    { name: "Golden Sapphire", img: "https://images.unsplash.com/photo-1594913785162-e6786b42dea3?auto=format&fit=crop&q=80&w=800" },
    { name: "Midnight Pearl", img: "https://images.unsplash.com/photo-1591110034509-c167576a086b?auto=format&fit=crop&q=80&w=800" },
    { name: "Caribbean Mist", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 uppercase tracking-tight">Luxury Pool Finishes</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-600 font-light text-sm sm:text-base leading-relaxed">
            Our glass mosaics are engineered to withstand the elements while providing a stunning optical depth that transforms your water's reflection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {products.map((p, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-sm shadow-lg aspect-[4/5] sm:aspect-square">
              <img 
                src={p.img} 
                alt={p.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6">
                <div className="text-white">
                  <p className="text-[10px] uppercase tracking-widest text-cyan-400 mb-1">Premium Collection</p>
                  <h3 className="text-lg sm:text-xl font-bold">{p.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-slate-200 pt-12 sm:pt-16">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4 sm:mb-6 transition-colors group-hover:bg-cyan-500">
                <div className="w-6 h-6 sm:w-8 h-8 text-cyan-500 group-hover:text-white transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">{f.title}</h4>
              <p className="text-slate-500 font-light text-sm sm:text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
