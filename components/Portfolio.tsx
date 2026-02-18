import React from 'react';

const Portfolio: React.FC = () => {
  const steps = [
    {
      title: "Vision & Consulting",
      description: "Collaborating with architects to define the perfect light-water interaction for each specific environment."
    },
    {
      title: "Artisan Selection",
      description: "Curation of high-grade glass mosaics with precise pigments and superior thermal shock resistance."
    },
    {
      title: "Global Supply",
      description: "Direct white-glove logistics ensuring material integrity from our warehouse to your project site."
    }
  ];

  const projects = [
    {
      url: "https://i.ibb.co/JFjrJdYt/2.png",
      title: "The Azure Estate",
      location: "Miami, FL"
    },
    {
      url: "https://i.ibb.co/356HGmMH/3.png",
      title: "Horizon Infinite",
      location: "Malibu, CA"
    },
    {
      url: "https://i.ibb.co/fzKJg3vC/4.png",
      title: "Emerald Sanctuary",
      location: "Hamptons, NY"
    },
    {
      url: "https://i.ibb.co/jkwZvc99/unnamed-2.jpg",
      title: "Opaline Retreat",
      location: "Palm Springs, CA"
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Work Methodology Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <span className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Methodology</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 uppercase tracking-tight leading-none mb-8">
              The Premium <br/><span className="italic font-medium text-slate-400">Experience</span>
            </h2>
            <p className="text-slate-500 font-light text-lg leading-relaxed max-w-md">
              We don't just supply tiles; we partner with creators to deliver technical excellence and aesthetic perfection in every aquatic surface.
            </p>
          </div>
          
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <span className="text-2xl font-bold text-cyan-200 group-hover:text-cyan-500 transition-colors duration-500">0{i + 1}</span>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Gallery */}
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-end gap-6">
          <div className="max-w-xl">
            <span className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Signature Gallery</span>
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Recent Masterpieces</h2>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-500 transition-colors border-b border-slate-200 pb-1">
            View Full Portfolio
          </button>
        </div>

        {/* Updated Grid for 4 items: Symmetrical 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-sm shadow-sm aspect-[16/10]">
              <img 
                src={project.url} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 sm:p-12">
                <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.location}</p>
                <h4 className="text-white text-2xl font-bold uppercase tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;