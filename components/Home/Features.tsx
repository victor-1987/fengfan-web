
import React from 'react';
import { SOFTWARE_PILLARS, HARDWARE_PILLARS } from '../../constants';

interface FeaturesProps {
  activeModule?: 'software' | 'hardware';
}

const modelLogos = [
  { name: 'OpenAI GPT-4o', type: 'Intl', color: 'border-green-500/30 text-green-400' },
  { name: 'Claude 3.5 Sonnet', type: 'Intl', color: 'border-orange-500/30 text-orange-400' },
  { name: 'Gemini 1.5 Pro', type: 'Intl', color: 'border-blue-500/30 text-blue-400' },
  { name: 'DeepSeek V3', type: 'China', color: 'border-indigo-500/40 text-indigo-300' },
  { name: 'Qwen-Max (通义)', type: 'China', color: 'border-teal-500/30 text-teal-400' },
  { name: 'Zhipu GLM-4', type: 'China', color: 'border-purple-500/30 text-purple-400' },
];

const Features: React.FC<FeaturesProps> = ({ activeModule = 'software' }) => {
  const pillars = activeModule === 'software' ? SOFTWARE_PILLARS : HARDWARE_PILLARS;
  const themeColor = activeModule === 'software' ? '#2D7FF9' : '#a855f7';

  return (
    <section className="py-16 md:py-24 bg-[#0B0E14] relative overflow-hidden">
      {/* Decorative Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] blur-[80px] md:blur-[120px] opacity-10 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: themeColor }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="font-tech text-xs md:text-base tracking-widest mb-2 md:mb-4 uppercase" style={{ color: themeColor }}>
            {activeModule === 'software' ? 'Software SaaS' : 'Intelligent Hardware'}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold leading-tight">
            {activeModule === 'software' ? '超级麦吉：企业的 AI 操作系统' : 'Super Magic Note：全时感官大脑'}
          </h3>
        </div>

        <div className="space-y-24 md:space-y-40">
          {pillars.map((layer, idx) => {
            const isModelSelectionPillar = activeModule === 'software' && idx === 3;
            const isBatteryPillar = activeModule === 'hardware' && idx === 2;
            
            return (
              <div key={`${activeModule}-${idx}`} className={`flex flex-col ${layer.isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 animate-in fade-in slide-in-from-bottom-10 duration-700`}>
                <div className="flex-1 space-y-6 md:space-y-8">
                  <div 
                    className="inline-block px-4 py-1 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors duration-700"
                    style={{ borderColor: `${themeColor}4D`, color: themeColor }}
                  >
                    {layer.tag}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{layer.title}</h3>
                    <h4 className="text-lg md:text-xl font-medium opacity-80" style={{ color: themeColor }}>{layer.subtitle}</h4>
                  </div>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">{layer.description}</p>
                  
                  {isBatteryPillar && (
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="glass p-4 rounded-2xl border border-white/5">
                        <div className="text-violet-400 font-tech font-bold text-xl md:text-2xl">30 Days</div>
                        <div className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1">Standby Time</div>
                      </div>
                      <div className="glass p-4 rounded-2xl border border-white/5">
                        <div className="text-violet-400 font-tech font-bold text-xl md:text-2xl">15 Hours</div>
                        <div className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1">Continuous Rec</div>
                      </div>
                    </div>
                  )}

                  {isModelSelectionPillar && (
                    <div className="pt-4 space-y-4">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                        {modelLogos.map((model, mIdx) => (
                          <div 
                            key={mIdx} 
                            className={`glass-dropdown border ${model.color} py-2 px-2 md:px-3 rounded-xl text-[9px] md:text-[10px] font-bold text-center flex flex-col items-center justify-center transition-all hover:scale-105 hover:bg-white/5 cursor-default`}
                          >
                            <span className="truncate w-full">{model.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 md:pt-4">
                    <button className="flex items-center space-x-2 text-white/50 hover:text-white transition group">
                      <span className="text-sm font-bold">了解方案细节</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full order-first md:order-none">
                  <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] glass p-1.5 md:p-2 border border-white/5 shadow-2xl">
                    <div 
                      className="absolute inset-0 opacity-20 mix-blend-overlay transition-colors duration-700"
                      style={{ backgroundColor: themeColor }}
                    />
                    <img src={layer.image} alt={layer.title} className="w-full h-[300px] md:h-[500px] object-cover rounded-[1.8rem] md:rounded-[2.5rem] transform transition-transform duration-[2s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-60" />
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
