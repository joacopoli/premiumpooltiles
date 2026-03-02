
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Premium Pool Tiles different from standard glass?",
      a: "Our mosaics are hand-poured with controlled mineral oxide pigments. This ensures 'Zero Water Absorption' and superior thermal shock resistance, preventing micro-cracking over decades of exposure."
    },
    {
      q: "Are the edges safe for bare skin?",
      a: "Yes. Every tile undergoes a controlled tumbling process to soften the edges, making them perfectly safe for steps, seating areas, and overflow edges in residential and commercial pools."
    },
    {
      q: "What is the typical lead time for USA orders?",
      a: "For in-stock collections, we offer white-glove shipping within 5-7 business days across the continental USA. Custom pigments or large volume orders typically range between 6-8 weeks."
    },
    {
      q: "Do you recommend specific installation materials?",
      a: "Absolutely. For a premium finish, we recommend high-grade epoxy grouts and polymer-modified thin-sets specifically designed for glass. Detailed technical guides are provided with every shipment."
    },
    {
      q: "Is there a warranty on the color?",
      a: "We offer a Lifetime Color Guarantee. Because our pigments are fused into the melt, they will never fade, peel, or change under UV exposure or harsh pool chemicals."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Knowledge Base</span>
          <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-400 font-light">Essential insights for architects, builders, and estate owners.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center bg-slate-50 hover:bg-white transition-colors group"
              >
                <span className={`font-bold text-xs uppercase tracking-widest transition-colors ${openIndex === i ? 'text-cyan-600' : 'text-slate-700'}`}>
                  {faq.q}
                </span>
                <span className="text-cyan-500 font-bold text-xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="px-8 py-6 bg-white border-t border-slate-50">
                  <p className="text-slate-500 font-light leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-cyan-50 text-center rounded-sm">
          <p className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-4">Still have questions?</p>
          <a href="https://wa.me/5491155867074" className="inline-block bg-slate-950 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-cyan-600 transition-all">
            Message an Expert
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
