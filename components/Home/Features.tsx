
import React, { useState } from 'react';
import { SOFTWARE_PILLARS, HARDWARE_PILLARS } from '../../constants';

const modelLogos = [
  { name: 'OpenAI GPT-4o', type: 'Intl', color: 'border-green-500/30 text-green-400' },
  { name: 'Claude 3.5 Sonnet', type: 'Intl', color: 'border-orange-500/30 text-orange-400' },
  { name: 'Gemini 1.5 Pro', type: 'Intl', color: 'border-blue-500/30 text-blue-400' },
  { name: 'DeepSeek V3', type: 'China', color: 'border-indigo-500/40 text-indigo-300' },
  { name: 'Qwen-Max', type: 'China', color: 'border-teal-500/30 text-teal-400' },
  { name: 'Zhipu GLM-4', type: 'China', color: 'border-purple-500/30 text-purple-400' },
];

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'software' | 'hardware'>('software');
  const pillars = activeTab === 'software' ? SOFTWARE_PILLARS : HARDWARE_PILLARS;

  return (
    <section className="py-24 bg-[#0B0E14] relative overflow-hidden">
      {/* Background glow for the active section */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] opacity-10 transition-colors duration-700 ${activeTab === 'software' ? 'bg-[#2D7FF9]' : 'bg-violet-600'}`} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-[#2D7FF9] font-tech tracking-widest mb-4 uppercase">Super Magic Core</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-10">超级麦吉：全场景智力闭环</h3>
          
          {/* Module Switcher */}
          <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
            <button 
              onClick={() => setActiveTab('software')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'software' ? 'bg-[#2D7FF9] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              软件服务 (SaaS)
            </button>
            <button 
              onClick={() => setActiveTab('hardware')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'hardware' ? 'bg-violet-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              AI 智能硬件 (Device)
            </button>
          </div>
        </div>

        <div className="space-y-40">
          {pillars.map((layer, idx) => {
            const isSpecialSection = activeTab === 'software' && idx === 1; // Analysis of models could go here if needed
            
            return (
              <div key={`${activeTab}-${idx}`} className={`flex flex-col ${layer.isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20 animate-in fade-in slide-in-from-bottom-10 duration-700`}>
                <div className="flex-1 space-y-8">
                  <div className={`inline-block px-4 py-1 rounded-full border text-xs font-bold uppercase tracking-widest ${activeTab === 'software' ? 'border-[#2D7FF9]/30 text-[#2D7FF9]' : 'border-violet-500/30 text-violet-400'}`}>
                    {layer.tag}
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold mb-4">{layer.title}</h3>
                    <h4 className="text-xl opacity-80 font-medium">{layer.subtitle}</h4>
                  </div>
                  <p className="text-lg text-gray-400 leading-relaxed">{layer.description}</p>
                  
                  {activeTab === 'hardware' && idx === 0 && (
                    <div className="grid grid-cols-2 gap-4 pt-4">
                       <div className="glass p-4 rounded-2xl border border-white/5">
                          <div className="text-violet-400 font-tech font-bold text-xl mb-1">30 Days</div>
                          <div className="text-xs text-gray-500 uppercase">Standby Time</div>
                       </div>
                       <div className="glass p-4 rounded-2xl border border-white/5">
                          <div className="text-violet-400 font-tech font-bold text-xl mb-1">100% Sync</div>
                          <div className="text-xs text-gray-500 uppercase">Auto Magic Cloud</div>
                       </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <button className={`flex items-center space-x-2 transition group font-bold ${activeTab === 'software' ? 'text-[#2D7FF9]' : 'text-violet-400'}`}>
                      <span>{activeTab === 'software' ? '了解架构集成细节' : '查看硬件规格参数'}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative group overflow-hidden rounded-[3rem] glass p-2 border border-white/5 shadow-2xl">
                    <div className={`absolute inset-0 opacity-20 mix-blend-overlay ${activeTab === 'software' ? 'bg-gradient-to-br from-[#2D7FF9] to-transparent' : 'bg-gradient-to-br from-violet-500 to-transparent'}`} />
                    
                    <img 
                      src={layer.image} 
                      alt={layer.title} 
                      className="w-full h-[500px] object-cover rounded-[2.5rem] transform transition-transform duration-[2s] group-hover:scale-110" 
                    />
                    
                    {activeTab === 'hardware' && (
                       <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-[200px] animate-in slide-in-from-right-10 duration-1000">
                          <div className="text-[10px] text-violet-400 font-tech font-bold mb-2 uppercase">Sales Capture Active</div>
                          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                             <div className="h-full bg-violet-500 animate-[shimmer_2s_infinite] w-2/3" />
                          </div>
                          <p className="text-[10px] text-gray-400 mt-2">实时提取客户意向并同步至 CRM 系统...</p>
                       </div>
                    )}

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
