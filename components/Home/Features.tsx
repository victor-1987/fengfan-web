
import React from 'react';
import { PRODUCT_PILLARS } from '../../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-[#2D7FF9] font-tech tracking-widest mb-4 uppercase">Product Pillars</h2>
          <h3 className="text-4xl md:text-5xl font-bold">超级麦吉：企业的 AI 操作系统</h3>
        </div>

        <div className="space-y-40">
          {PRODUCT_PILLARS.map((layer, idx) => (
            <div key={idx} className={`flex flex-col ${layer.isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20`}>
              <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1 rounded-full border border-[#2D7FF9]/30 text-[#2D7FF9] text-xs font-bold uppercase tracking-widest">
                  {layer.tag}
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-4">{layer.title}</h3>
                  <h4 className="text-xl text-[#2D7FF9]/80 font-medium">{layer.subtitle}</h4>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed">{layer.description}</p>
                <div className="pt-4">
                  <button className="flex items-center space-x-2 text-white/50 hover:text-[#2D7FF9] transition group">
                    <span className="text-sm font-bold">了解架构集成细节</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-[3rem] glass p-2 border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D7FF9]/20 to-violet-500/20 mix-blend-overlay" />
                  <img src={layer.image} alt={layer.title} className="w-full h-[500px] object-cover rounded-[2.5rem] transform transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
