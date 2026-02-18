
import React from 'react';

const Differentiators: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-cyan-400 mb-8 flex justify-center">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H17.017L17.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3H8.017C9.67386 3 11.017 4.34315 11.017 6V15C11.017 16.6569 9.67386 18 8.017 18H6.017L6.017 21H3.017Z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-light italic leading-relaxed mb-10 text-slate-100">
            "Excellence is not a destination, it is a continuous journey of quality and discipline."
          </h2>
          <div className="w-16 h-px bg-cyan-400 mx-auto mb-10"></div>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto uppercase tracking-[0.2em] mb-16">
            Quality is the result of high intention, sincere effort, and skillful execution.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="text-cyan-400 font-bold mb-4 uppercase tracking-widest text-sm">Discipline</h3>
              <p className="text-slate-300 font-light text-sm">We maintain rigorous standards from sourcing to final delivery, ensuring every tile meets our master-grade criteria.</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold mb-4 uppercase tracking-widest text-sm">Service</h3>
              <p className="text-slate-300 font-light text-sm">Our white-glove consulting service ensures architects and designers find the perfect palette for every vision.</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold mb-4 uppercase tracking-widest text-sm">Value</h3>
              <p className="text-slate-300 font-light text-sm">Premium is an investment in durability. Our mosaics are designed to outlast the life of the pool itself.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
