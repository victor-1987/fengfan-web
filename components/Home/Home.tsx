
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import { HONORS, CLIENT_LOGOS, MICROSOFT_SOLUTIONS, MICROSOFT_CASES } from '../../constants';

interface HomeProps {
  onBookDemo: () => void;
}

const Home: React.FC<HomeProps> = ({ onBookDemo }) => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-700 bg-[#0B0E14]">
      {/* 1. Hero Section: Integrated Carousel with compressed height */}
      <Hero onBookDemo={onBookDemo} />

      {/* 2. Core Solutions Grid - Now visible on the first screen */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 relative overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-tech tracking-[0.4em] mb-4 text-xs md:text-sm font-bold uppercase">Enterprise Pillars</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">微软全栈数字化赋能</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">深度整合微软云端生态，为企业提供从基座架构到 AI 业务流程的一体化集成方案。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {MICROSOFT_SOLUTIONS.map((item, idx) => (
            <div key={item.id} className="glass p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500 group flex flex-col h-full bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-white/5 rounded-2xl p-3 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div className="text-[10px] font-tech font-bold text-gray-600 group-hover:text-blue-500 transition-colors uppercase tracking-[0.2em]">Solution 0{idx + 1}</div>
              </div>
              <div className="flex-grow">
                <h4 className="text-blue-500 font-tech text-[10px] md:text-xs mb-2 tracking-widest font-bold uppercase">{item.subtitle}</h4>
                <h5 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:gradient-text transition-all">{item.title}</h5>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                   {item.features.map((feat, fIdx) => (
                     <span key={fIdx} className="text-[9px] px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-500 font-medium">#{feat}</span>
                   ))}
                </div>
              </div>
              <button className="flex items-center space-x-3 text-xs md:text-sm font-bold text-white/40 group-hover:text-blue-400 transition-colors">
                 <span>获取行业落地白皮书</span>
                 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Service Lifecycle */}
      <section className="py-24 bg-[#0F1219]/50 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
               <div className="flex-1 space-y-8">
                  <h3 className="text-3xl md:text-5xl font-bold leading-tight">全生命周期云管理服务</h3>
                  <p className="text-gray-400 text-lg font-light leading-relaxed">
                     作为微软核心合作伙伴，我们提供从前期的 **架构咨询**、中期的 **无缝迁移** 到后期的 **持续优化** 与 **全代管服务 (MSP)**。
                     确保您的云端资产始终处于最优运行状态。
                  </p>
                  <div className="space-y-4">
                     {[
                       { t: '架构评估', d: '深度调研业务现状，识别成本缩减与性能提升空间。' },
                       { t: '安全加固', d: '遵循微软安全基准，实施端到端的身份与数据链路加密。' },
                       { t: '24/7 技术响应', d: '由微软认证专家团队提供全天候技术保障。' }
                     ].map((s, i) => (
                       <div key={i} className="flex items-start space-x-4">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xs">✓</div>
                          <div>
                             <h6 className="font-bold text-gray-200">{s.t}</h6>
                             <p className="text-sm text-gray-500">{s.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="flex-1 relative">
                  <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full" />
                  <div className="glass rounded-[3rem] p-8 border border-white/10 relative overflow-hidden">
                     <div className="aspect-square bg-gradient-to-br from-blue-500/5 to-transparent flex flex-col items-center justify-center text-center space-y-6">
                        <div className="w-24 h-24 rounded-full border-2 border-dashed border-blue-500/40 animate-[spin_20s_linear_infinite] flex items-center justify-center">
                           <img src="https://img.icons8.com/color/96/cloud.png" className="w-12 h-12" alt="Cloud Service" />
                        </div>
                        <div className="space-y-2">
                           <div className="text-3xl font-tech font-bold text-white">Cloud Managed</div>
                           <div className="text-xs font-tech text-blue-500 tracking-widest uppercase">Expertise & Support</div>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/30 transition-all active:scale-95">
                           获取代管方案
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Microsoft Case Studies Section (Visual Refinement) */}
      <section className="py-24 bg-[#0B0E14] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[#0078d4]/60 font-tech tracking-[0.4em] mb-4 text-[10px] md:text-xs font-bold uppercase">Industry Success Matrix</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">行业落地实绩</h3>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base font-light">
              基于微软生态技术，协助多行业客户在业务场景中实现 AI 的真实商业价值。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {MICROSOFT_CASES.map((item) => (
              <div key={item.id} className="bg-[#11151C] p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-500 group relative flex flex-col h-full shadow-2xl">
                {/* Subtle Accent Glow */}
                <div 
                  className="absolute -top-20 -right-20 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" 
                  style={{ backgroundColor: item.accent }}
                />
                
                <div className="flex items-center justify-between mb-10">
                  <div className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] text-gray-400 font-tech font-bold uppercase tracking-widest">
                    {item.industry}
                  </div>
                  <div className="w-10 h-10 bg-white/5 rounded-xl p-2 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                    <img src={item.icon} alt={item.product} className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <div className="font-tech text-[10px] font-bold tracking-[0.2em] uppercase opacity-50" style={{ color: item.accent }}>{item.product}</div>
                  <h5 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h5>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex items-end justify-between">
                  <div className="space-y-1">
                    <div className="text-[9px] text-gray-600 font-tech font-bold uppercase tracking-widest">Core Impact</div>
                    <div className="text-2xl font-bold font-tech tracking-tight" style={{ color: item.accent }}>{item.metric}</div>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#0078d4] group-hover:border-transparent transition-all shadow-lg">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => navigate('/systems')}
              className="group flex items-center space-x-4 px-12 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-bold transition-all duration-300 shadow-xl active:scale-95"
            >
              <span className="text-sm tracking-[0.2em] uppercase">了解更多客户全案</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Honors & Qualifications Section */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 bg-[#0B0E14] border-t border-white/5">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-[10px] md:text-sm font-bold">Honor & Qualifications</h2>
          <h3 className="text-3xl md:text-5xl font-bold">资质与荣誉：合规、稳健、持续进化</h3>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#2D7FF9] to-violet-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {HONORS.map((honor, i) => (
            <div key={i} className="relative group cursor-default">
              <div className="absolute -inset-1 bg-gradient-to-b from-[#2D7FF9]/20 to-transparent rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative glass border border-white/10 rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-[#2D7FF9]/40 transition-all duration-500 bg-gradient-to-br from-white/[0.03] to-transparent h-full">
                <div className="w-16 h-20 bg-white/5 rounded-xl flex items-center justify-center text-3xl border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-2xl mb-5">
                  {honor.icon}
                </div>
                <div className="w-full">
                  <div className="text-[#2D7FF9] font-tech text-[8px] tracking-[0.2em] mb-1 font-bold uppercase">CERTIFICATE</div>
                  <h4 className="text-xs md:text-sm font-bold mb-2 text-white group-hover:text-[#2D7FF9] transition-colors leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {honor.title}
                  </h4>
                  <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-[8px] text-gray-500 font-tech">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Cooperative Clients Section */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 border-t border-white/5 bg-[#0B0E14]">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-[10px] md:text-sm font-bold">Partnership & Ecosystem</h2>
          <h3 className="text-3xl md:text-5xl font-bold">合作客户：共创 AI 边界</h3>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">锋范科技已协助 100+ 行业头部企业完成智能化跨越。</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
          {CLIENT_LOGOS.map((client, i) => (
            <div key={i} className="flex flex-col items-center justify-center group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-[#2D7FF9]/30 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" 
                />
              </div>
              <span className="text-[9px] md:text-[10px] font-tech text-gray-400 uppercase tracking-widest text-center group-hover:text-white transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
