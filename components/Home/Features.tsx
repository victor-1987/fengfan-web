
import React from 'react';
import { PRODUCT_PILLARS } from '../../constants';

const modelLogos = [
  { name: 'OpenAI GPT-4o', type: 'Intl', color: 'border-green-500/30 text-green-400' },
  { name: 'Claude 3.5 Sonnet', type: 'Intl', color: 'border-orange-500/30 text-orange-400' },
  { name: 'Gemini 1.5 Pro', type: 'Intl', color: 'border-blue-500/30 text-blue-400' },
  { name: 'DeepSeek V3', type: 'China', color: 'border-indigo-500/40 text-indigo-300' },
  { name: 'Qwen-Max (通义)', type: 'China', color: 'border-teal-500/30 text-teal-400' },
  { name: 'Zhipu GLM-4', type: 'China', color: 'border-purple-500/30 text-purple-400' },
  { name: 'Llama 3.1 (LPU)', type: 'Open', color: 'border-gray-500/30 text-gray-300' },
  { name: 'Baichuan-4', type: 'China', color: 'border-red-500/20 text-red-400' },
  { name: 'Mistral Large', type: 'Intl', color: 'border-yellow-500/20 text-yellow-500' },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-[#2D7FF9] font-tech tracking-widest mb-4 uppercase">Product Pillars</h2>
          <h3 className="text-4xl md:text-5xl font-bold">超级麦吉：企业的 AI 操作系统</h3>
        </div>

        <div className="space-y-40">
          {PRODUCT_PILLARS.map((layer, idx) => {
            const isModelSelectionPillar = idx === 3;
            
            return (
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
                  
                  {isModelSelectionPillar && (
                    <div className="pt-6 space-y-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2D7FF9]/30 to-transparent"></span>
                        <span className="text-[10px] font-tech text-gray-500 uppercase tracking-widest">Global Ecosystem Support</span>
                        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2D7FF9]/30 to-transparent"></span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {modelLogos.map((model, mIdx) => (
                          <div 
                            key={mIdx} 
                            className={`glass-dropdown border ${model.color} py-2 px-3 rounded-xl text-[10px] font-bold text-center flex flex-col items-center justify-center transition-all hover:scale-105 hover:bg-white/5 cursor-default`}
                          >
                            <span className="opacity-50 text-[8px] mb-1 tracking-tighter uppercase">{model.type}</span>
                            <span className="truncate w-full">{model.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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
                  <div className="relative group overflow-hidden rounded-[3rem] glass p-2 border border-white/5 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D7FF9]/20 to-violet-500/20 mix-blend-overlay" />
                    
                    {isModelSelectionPillar ? (
                      <div className="relative w-full h-[500px] bg-[#12161D] rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                        {/* Abstract visual for intelligent routing */}
                        <div className="absolute inset-0 opacity-30">
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#2D7FF9]/20 rounded-full animate-pulse" />
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-violet-500/20 rounded-full animate-pulse delay-500" />
                        </div>
                        <img 
                          src={layer.image} 
                          alt={layer.title} 
                          className="relative z-10 w-full h-full object-cover rounded-[2.5rem] opacity-70 transform transition-transform duration-[2s] group-hover:scale-110" 
                        />
                        <div className="absolute z-20 top-8 right-8 flex flex-col gap-2">
                          <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-3 py-1 rounded-full border border-green-500/30 backdrop-blur-md">Local Private 0ms</span>
                          <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-500/30 backdrop-blur-md">Cloud Global 150ms</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-60" />
                      </div>
                    ) : (
                      <>
                        <img src={layer.image} alt={layer.title} className="w-full h-[500px] object-cover rounded-[2.5rem] transform transition-transform duration-[2s] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-60" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
