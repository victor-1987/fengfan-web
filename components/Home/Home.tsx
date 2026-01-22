
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import { MICROSOFT_SCENARIOS, MICROSOFT_CASES, CLOUD_PARTNERS, WHY_US_FEATURES, CLOUD_SCENARIO_SOLUTIONS } from '../../constants';

interface HomeProps {
  onBookDemo: () => void;
}

const Home: React.FC<HomeProps> = ({ onBookDemo }) => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-700 bg-[#0B0E14]">
      {/* 1. Hero Section */}
      <Hero onBookDemo={onBookDemo} />

      {/* 2. Strategy & Why Us Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 relative overflow-hidden">
        <div className="text-center mb-24">
          <h2 className="text-blue-500 font-tech tracking-[0.4em] mb-4 text-xs md:text-sm font-bold uppercase">Our Strategy</h2>
          <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white">以微软云为核心的多云架构方案服务商</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light mb-16">
            从场景出发，为企业订制从 AI 基座架构到全球生产力协同的一体化集成方案。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {WHY_US_FEATURES.map((item) => (
              <div key={item.id} className="glass p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-blue-500/30 transition-all duration-500 group text-left">
                <div className="w-12 h-12 bg-white/5 rounded-2xl p-2.5 mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Microsoft Cloud Core Matrix */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 border-b border-white/5 pb-8">
            <div className="w-full">
              <div className="flex items-center space-x-2 text-[#0078d4] font-tech text-xs mb-3 font-bold tracking-widest uppercase">
                <span className="w-8 h-px bg-[#0078d4]/40" />
                <span>Production-Grade Integration Solution</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white">打造企业生产系统的数字化底座</h3>
              <p className="text-gray-400 mt-4 font-light text-sm md:text-base md:whitespace-nowrap overflow-visible">
                覆盖 IT 基础、数据分析、生成式 AI 到办公协同。锋范科技助您构建高可用、零信任的生产力引擎。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {MICROSOFT_SCENARIOS.slice(0, 2).map((item, idx) => (
              <div 
                key={item.id} 
                className={`glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group transition-all duration-700 bg-gradient-to-br from-white/[0.02] to-transparent flex flex-col ${idx === 0 ? 'md:col-span-5' : 'md:col-span-7'}`}
              >
                <div className="absolute -top-20 -right-20 w-80 h-80 blur-[120px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: item.accent }} />
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl p-3 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: `${item.accent}20` }}>
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-[10px] font-tech font-bold text-gray-600 group-hover:text-white transition-colors tracking-widest uppercase">Solution Pillar 0{idx + 1}</div>
                </div>
                <div className="flex-grow relative z-10">
                  <h4 className="font-tech text-[10px] mb-1.5 tracking-widest font-bold uppercase" style={{ color: item.accent }}>{item.subtitle}</h4>
                  <h5 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-all">{idx === 0 ? '核心生产系统上云迁移方案' : '混合多云架构与全球身份治理'}</h5>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 font-light">{idx === 0 ? '针对 SQL Server/VMware 等核心业务的平滑上云集成。' : '锋范技术杀手锏：Azure Arc 异构管理与 Entra ID 零信任身份治理。'}</p>
                </div>
                <button onClick={onBookDemo} className="flex items-center space-x-3 text-xs font-bold text-white/40 group-hover:text-white transition-colors relative z-10">
                  <span className="border-b border-transparent group-hover:border-white/20 pb-1 font-tech uppercase tracking-widest">Explore Solution</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            ))}
            {MICROSOFT_SCENARIOS.slice(2, 5).map((item, idx) => (
              <div key={item.id} className="md:col-span-4 glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group transition-all duration-700 bg-gradient-to-br from-white/[0.02] to-transparent flex flex-col">
                <div className="absolute -top-20 -right-20 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: item.accent }} />
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl p-3 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: `${item.accent}15` }}>
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-[9px] font-tech font-bold text-gray-700 uppercase tracking-widest">Pillar 0{idx + 3}</div>
                </div>
                <div className="flex-grow relative z-10">
                  <h4 className="font-tech text-[10px] tracking-widest font-bold uppercase mb-1" style={{ color: item.accent }}>{item.subtitle}</h4>
                  <h5 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{item.title}</h5>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTEGRATED SECTION: Mixed Cloud Scenario Solution Matrix (Scene 01 - 05) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-tech font-bold text-emerald-500 tracking-widest uppercase">Mixed Cloud Solution Matrix</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">混合云场景化解决方案矩阵</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light">针对国际云在境内合规、边缘覆盖及国产化适配上的不足，我们整合异构云平台，提供端到端的架构补强服务。</p>
        </div>

        <div className="space-y-6">
          {CLOUD_SCENARIO_SOLUTIONS.map((scene) => (
            <div key={scene.id} className="glass group rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all duration-700 bg-gradient-to-r from-white/[0.02] to-transparent overflow-hidden">
              <div className="flex flex-col lg:flex-row min-h-[240px]">
                {/* Scene Indicator & Title */}
                <div className="lg:w-1/3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 relative flex flex-col justify-between">
                  <div 
                    className="absolute -top-24 -left-24 w-64 h-64 blur-[100px] opacity-10 pointer-events-none"
                    style={{ backgroundColor: scene.accent }}
                  />
                  <div>
                    <div className="text-2xl font-tech font-bold text-white/5 mb-4 group-hover:text-white/10 transition-colors tracking-tighter">SCENE {scene.sceneNum}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-4 group-hover:text-blue-400 transition-colors">{scene.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    {scene.platforms.map((p, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 p-1.5 flex items-center justify-center group/icon hover:bg-white/10 transition-all" title={p.name}>
                        <img src={p.icon} alt={p.name} className="w-full h-full object-contain grayscale group-hover/icon:grayscale-0 transition-all" />
                      </div>
                    ))}
                    <span className="text-[8px] font-tech font-bold text-gray-600 uppercase tracking-widest ml-2">Verified Architecture</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="lg:w-2/3 p-8 flex flex-col justify-between">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="text-[9px] font-tech text-gray-500 font-bold uppercase tracking-widest">客户关注 Customer Focus</div>
                      <div className="p-4 bg-red-500/5 border-l-2 border-red-500/20 rounded-r-xl">
                         <p className="text-xs text-gray-400 font-light italic leading-relaxed">“{scene.problem}”</p>
                         {scene.summary && <p className="mt-3 text-[11px] font-bold text-white/60 leading-relaxed border-t border-white/5 pt-3">{scene.summary}</p>}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-[9px] font-tech text-emerald-500 font-bold uppercase tracking-widest">锋范价值 Our Value Add</div>
                      <ul className="space-y-2">
                        {scene.value.map((v, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-gray-300">
                            <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            <span className="font-light">{v}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="text-[8px] font-tech text-gray-700 font-bold uppercase tracking-[0.2em]">Strategy: {scene.platforms.map(p => p.name).join(' · ')} Integration</div>
                    <button onClick={onBookDemo} className="flex items-center space-x-2 text-[10px] font-bold text-white/40 group-hover:text-white transition-colors">
                      <span className="border-b border-white/5 group-hover:border-blue-500 pb-0.5 font-tech uppercase tracking-widest">Consult Architecture</span>
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. All-Region Cloud Ecosystem Matrix */}
      <section className="py-24 bg-[#0B0E14] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-tech font-bold text-blue-500 tracking-widest uppercase">Ecosystem Orchestration</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold leading-tight text-white">全域云生态兼容矩阵</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                以微软云为核心，深度兼容 **AWS, Google Cloud, 腾讯云, 百度智能云**。我们提供从跨云迁移到全球统一治理的一体化 MSP 服务。
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-20 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="grid grid-cols-3 gap-4">
                {CLOUD_PARTNERS.map((partner, i) => (
                  <div key={partner.id} className={`glass p-6 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center group transition-all duration-500 hover:bg-white/5 hover:border-white/20 ${i === 4 ? 'col-span-2' : ''}`}>
                    <img src={partner.icon} className="w-12 h-12 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 object-contain" alt={partner.name} />
                    <div className="text-xs font-bold text-gray-300 mb-1">{partner.name}</div>
                    <div className="text-[8px] text-gray-600 font-tech uppercase tracking-widest">{partner.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Industry Success Matrix */}
      <section className="py-24 bg-[#0F1219]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[#0078d4]/60 font-tech tracking-[0.4em] mb-4 text-[10px] md:text-xs font-bold uppercase">Industry Success Matrix</h2>
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white">行业落地实绩</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {MICROSOFT_CASES.map((item) => (
              <div key={item.id} className="bg-[#11151C] p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-500 group relative flex flex-col h-full shadow-2xl">
                <div className="absolute -top-20 -right-20 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ backgroundColor: item.accent }} />
                <div className="flex items-center justify-between mb-10">
                  <div className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] text-gray-400 font-tech font-bold uppercase tracking-widest">{item.industry}</div>
                  <div className="w-10 h-10 bg-white/5 rounded-xl p-2 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                    <img src={item.icon} alt={item.product} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex-grow space-y-4">
                  <div className="font-tech text-[10px] font-bold tracking-[0.2em] uppercase opacity-50" style={{ color: item.accent }}>{item.product}</div>
                  <h5 className="text-xl md:text-2xl font-bold text-white leading-tight">{item.title}</h5>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{item.description}</p>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 flex items-end justify-between">
                  <div className="text-2xl font-bold font-tech tracking-tight" style={{ color: item.accent }}>{item.metric}</div>
                  <button onClick={() => navigate(`/case/${item.id}`)} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#0078d4] group-hover:border-transparent transition-all shadow-lg">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
