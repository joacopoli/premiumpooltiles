
import React from 'react';

const TechnicalData: React.FC = () => {
  const specs = [
    { name: "Water Absorption", value: "0.00% (Zero)", icon: "💧" },
    { name: "UV Resistance", value: "100% Fade Proof", icon: "☀️" },
    { name: "Chemical Resistance", value: "Class A (Acid/Alkali)", icon: "🧪" },
    { name: "Thermal Shock", value: "Resistant to -20°C / +80°C", icon: "❄️" },
    { name: "Edge Finish", value: "Artisan Rounded (Safety First)", icon: "📐" },
    { name: "Pigment Grade", value: "In-melt mineral oxides", icon: "🎨" }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Engineering Excellence</span>
          <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-4">Technical Specifications</h1>
          <div className="w-16 h-1 bg-cyan-500 mb-8"></div>
          <p className="text-slate-500 font-light max-w-2xl leading-relaxed">
            Our glass mosaics are engineered to exceed international standards for high-end aquatic environments, ensuring eternal brilliance and structural integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, i) => (
            <div key={i} className="p-8 border border-slate-100 rounded-sm bg-slate-50 hover:border-cyan-200 transition-all">
              <div className="text-3xl mb-4">{spec.icon}</div>
              <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-2">{spec.name}</h3>
              <p className="text-cyan-600 font-medium text-lg">{spec.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-4 font-bold uppercase tracking-widest text-[10px] text-slate-400">Property</th>
                <th className="py-4 font-bold uppercase tracking-widest text-[10px] text-slate-400">Standard</th>
                <th className="py-4 font-bold uppercase tracking-widest text-[10px] text-slate-400">Result</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-50">
                <td className="py-6 font-medium text-slate-900">Coefficient of Friction</td>
                <td className="py-6 text-slate-500">DIN 51097</td>
                <td className="py-6 text-cyan-600 font-bold">Class B / C (Non-slip)</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-6 font-medium text-slate-900">Stain Resistance</td>
                <td className="py-6 text-slate-500">ISO 10545-14</td>
                <td className="py-6 text-cyan-600 font-bold">Class 5 (Maximum)</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-6 font-medium text-slate-900">Frost Resistance</td>
                <td className="py-6 text-slate-500">ISO 10545-12</td>
                <td className="py-6 text-cyan-600 font-bold">Fully Resistant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechnicalData;
