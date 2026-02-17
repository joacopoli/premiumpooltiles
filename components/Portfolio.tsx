
import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    "https://images.unsplash.com/photo-1572331165267-85462a40c293?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1470376619031-a6791e5c4bfb?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533033527237-1345bf7e568b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="max-w-xl">
            <span className="text-cyan-500 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-3 block">Our Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase tracking-tight">Masterpieces of Architecture</h2>
          </div>
          <div className="text-slate-500 font-light text-sm sm:text-base max-w-md">
            Browse through some of our most exclusive residential and resort projects across the USA.
          </div>
        </div>

        <div className="masonry-grid gap-4 sm:gap-6">
          {projects.map((url, idx) => (
            <div key={idx} className="masonry-item group relative overflow-hidden rounded-sm shadow-md">
              <img 
                src={url} 
                alt={`Project ${idx + 1}`} 
                className="w-full h-auto object-cover transition-all duration-700 md:group-hover:brightness-75 md:group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="bg-white text-slate-900 px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest">View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
