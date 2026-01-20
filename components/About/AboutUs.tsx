
import React from 'react';
import { HONORS, CLIENT_LOGOS } from '../../constants';

const AboutUs: React.FC = () => {
  const offices = [
    {
      id: 'hq',
      name: '广东锋范科技有限公司（总部）',
      address: '中国 · 广东省 · 东莞市科技产业园区锋范科技大厦',
      type: 'HEADQUARTERS',
      markerPos: { top: '78%', left: '68%' },
      color: '#2D7FF9'
    },
    {
      id: 'hk',
      name: '锋范（香港）科技有限公司',
      address: '中国 · 香港特别行政区 · 九龙观塘鸿图道 1 号',
      type: 'GLOBAL BRANCH',
      markerPos: { top: '82%', left: '70%' },
      color: '#a855f7'
    }
  ];

  const productionCenters = [
    { name: '沈阳生产中心', pos: { top: '25%', left: '85%' } },
    { name: '成都生产中心', pos: { top: '60%', left: '48%' } },
    { name: '福建生产中心', pos: { top: '72%', left: '78%' } },
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-[#0B0E14]">
      {/* 1. Hero Section: Identity & Scale */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-tech tracking-[0.4em] text-[#2D7FF9] mb-6 uppercase text-sm font-bold opacity-80">Leading Agentic AI Era</h2>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 font-tech gradient-text tracking-tight">让 AI 赋能每组织</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
            锋范科技（FengFan Tech）成立于 2023 年。我们不只是技术的搬运工，更是生产力变革的引擎。
            通过 Agentic AI 架构，我们将复杂的模型能力转化为企业真正可落地、可闭环、可进化的“数字大脑”。
          </p>
        </div>
      </section>

      {/* 2. Philosophy Section: Vision/Mission/Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              title: "愿景 Vision", 
              desc: "构建全球领先的企业级 AI 协作系统，让 AI 成为每一位指挥官手中最可靠的执行官，释放人类的创造力天性。", 
              color: "border-blue-500/20",
              tag: "BEYOND INTELLIGENCE"
            },
            { 
              title: "使命 Mission", 
              desc: "打破技术黑盒，通过私有化、工程化、工具化的手段，让每一个组织都能低门槛地拥有属于自己的数字化主权。", 
              color: "border-violet-500/20",
              tag: "EMPOWER EVERYONE"
            },
            { 
              title: "价值观 Values", 
              desc: "坚持长期主义，在不确定的时代通过“技术确定性”为客户创造真实价值。诚实沟通，持续创新。", 
              color: "border-emerald-500/20",
              tag: "TRUST & CERTAINTY"
            },
          ].map((item, i) => (
            <div key={i} className={`glass p-12 rounded-[3.5rem] border ${item.color} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent blur-2xl" />
              <div className="text-[10px] font-tech text-gray-500 mb-4 tracking-widest">{item.tag}</div>
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:gradient-text transition-all">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Presence Section: Enterprise Layout (China Map) */}
      <section className="py-32 max-w-7xl mx-auto px-4 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-sm font-bold">China Network & Presence</h2>
          <h3 className="text-4xl md:text-5xl font-bold">企业布局：深耕本土，连接全球</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">立足大湾区核心，通过沈阳、成都、福建三大中心构建覆盖全国的敏捷生产与支持网络。</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-[2.5] glass border border-white/10 rounded-[4rem] p-8 md:p-12 overflow-hidden relative group min-h-[500px] flex items-center justify-center bg-black/20">
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[1.15] translate-y-4">
                <path d="M480 50 L520 40 L580 80 L720 120 L750 200 L700 250 L780 320 L730 450 L680 520 L580 580 L480 560 L400 580 L300 540 L150 560 L80 480 L50 400 L120 280 L80 180 L150 120 L280 80 L380 90 L450 50 Z" fill="url(#china-grad)" opacity="0.3" stroke="#2D7FF9" strokeWidth="1" strokeDasharray="4 4"/>
                <defs>
                  <radialGradient id="china-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 300) rotate(90) scale(300 400)">
                    <stop stopColor="#2D7FF9" />
                    <stop offset="1" stopColor="#0B0E14" />
                  </radialGradient>
                </defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2D7FF9" strokeWidth="0.5" opacity="0.05"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative w-full h-full max-w-[700px] max-h-[500px]">
              {offices.map((office) => (
                <div key={office.id} className="absolute transition-all duration-500" style={{ ...office.markerPos }}>
                  <div className="relative group/marker">
                    <div className="w-5 h-5 rounded-full animate-ping absolute inset-0" style={{ backgroundColor: office.color }} />
                    <div className="w-5 h-5 rounded-full relative z-10 border-2 border-white shadow-2xl" style={{ backgroundColor: office.color }} />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-black/90 px-3 py-1 rounded-lg border border-white/10 whitespace-nowrap text-[10px] font-bold z-20">
                      {office.type}
                    </div>
                  </div>
                </div>
              ))}

              {productionCenters.map((pc, idx) => (
                <div key={idx} className="absolute transition-all duration-500" style={{ ...pc.pos }}>
                  <div className="relative group/pc">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse absolute inset-0" />
                    <div className="w-3 h-3 bg-emerald-500 rounded-full relative z-10 border border-white shadow-lg shadow-emerald-500/50" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/pc:opacity-100 transition-all bg-emerald-500/10 backdrop-blur-md px-2 py-0.5 rounded border border-emerald-500/20 whitespace-nowrap text-[9px] font-tech font-bold text-emerald-400">
                      {pc.name}
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-4 left-4 glass border border-white/10 p-4 rounded-2xl flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D7FF9]" />
                  <span className="text-[10px] font-tech text-gray-400">HEADQUARTERS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                  <span className="text-[10px] font-tech text-gray-400">GLOBAL BRANCH</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-tech text-emerald-400/80">PRODUCTION CENTERS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            {offices.map((office) => (
              <div key={office.id} className="glass border border-white/5 rounded-[2.5rem] p-8 hover:border-white/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="flex items-center space-x-3 mb-4 relative z-10">
                  <div className="w-1.5 h-5 rounded-full" style={{ backgroundColor: office.color }} />
                  <span className="font-tech text-[9px] tracking-[0.2em] text-gray-500 font-bold uppercase">{office.type}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all relative z-10">{office.name}</h4>
                <div className="flex items-start space-x-3 relative z-10">
                  <span className="text-lg mt-0.5 shrink-0 opacity-40">🏢</span>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{office.address}</p>
                </div>
              </div>
            ))}

            <div className="glass border border-white/10 rounded-[2.5rem] p-8 bg-gradient-to-br from-emerald-500/5 to-transparent flex flex-col justify-center flex-1">
               <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-xl">⚙️</div>
                  <div className="text-left">
                     <h5 className="font-bold text-emerald-400">供应链与支持网络</h5>
                     <p className="text-[10px] text-gray-500 font-tech">Supply Chain & Technical Support</p>
                  </div>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                     <span className="text-gray-400">沈阳 (东北基地)</span>
                     <span className="text-white font-tech text-xs">SHENYANG</span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                     <span className="text-gray-400">成都 (西南枢纽)</span>
                     <span className="text-white font-tech text-xs">CHENGDU</span>
                    </div>
                  <div className="flex justify-between items-center text-sm py-2">
                     <span className="text-gray-400">福建 (东南中心)</span>
                     <span className="text-white font-tech text-xs">FUJIAN</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Authority Section: Honors & Qualifications */}
      <section className="py-32 max-w-7xl mx-auto px-4 border-t border-white/5">
        <div className="text-center mb-20">
          <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-sm font-bold">Honor & Qualifications</h2>
          <h3 className="text-4xl md:text-5xl font-bold">荣誉与资质：坚持合规与创新</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2D7FF9] to-violet-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {HONORS.map((honor, i) => (
            <div key={i} className="relative group cursor-default h-full">
              <div className="absolute -inset-1 bg-gradient-to-b from-[#2D7FF9]/20 to-transparent rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative glass border border-white/10 rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-[#2D7FF9]/40 transition-all duration-500 bg-gradient-to-br from-white/[0.03] to-transparent h-full">
                <div className="w-16 h-20 bg-white/5 rounded-xl flex items-center justify-center text-3xl border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-2xl mb-5">
                  {honor.icon}
                </div>
                <div className="w-full">
                  <div className="text-[#2D7FF9] font-tech text-[8px] tracking-[0.2em] mb-1 font-bold uppercase">CERTIFICATE</div>
                  <h4 className="text-sm font-bold mb-2 text-white group-hover:text-[#2D7FF9] transition-colors leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {honor.title}
                  </h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed line-clamp-2 mb-3">
                    {honor.detail}
                  </p>
                  <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-[8px] text-gray-500 font-tech">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm font-light italic">“ 锋范科技坚信：唯有在极致安全与极致体验的平衡点上，AI 才能真正赢得未来的尊重。”</p>
        </div>
      </section>

      {/* 5. Social Proof: Cooperative Clients */}
      <section className="py-32 max-w-7xl mx-auto px-4 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-sm font-bold">Partnership & Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-bold">合作客户：共创 AI 边界</h3>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">从能源巨头到智造领航，锋范科技已协助 100+ 行业头部企业完成从“对话 AI”到“执行 AI”的跨越。</p>
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
                <div className="absolute inset-0 bg-[#2D7FF9] blur-2xl rounded-full opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
              <span className="text-[10px] font-tech text-gray-500 uppercase tracking-widest text-center group-hover:text-white transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Impact & CTA: Milestones / Stats */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="relative rounded-[5rem] overflow-hidden bg-white/5 border border-white/5 p-1">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D7FF9]/10 via-transparent to-violet-600/10" />
          <div className="w-full h-full bg-[#0B0E14] rounded-[4.9rem] flex flex-col items-center justify-center p-16 md:p-24 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 font-tech text-white">企业的数字大脑，正在此处进化</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32">
              <div className="text-center group">
                <div className="text-5xl md:text-7xl font-tech font-bold text-[#2D7FF9] group-hover:scale-110 transition-transform">100+</div>
                <div className="text-xs text-gray-500 mt-4 uppercase tracking-[0.3em] font-bold">行业头部合作伙伴</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-7xl font-tech font-bold text-[#2D7FF9] group-hover:scale-110 transition-transform">50M+</div>
                <div className="text-xs text-gray-500 mt-4 uppercase tracking-[0.3em] font-bold">月均 AI Agent 调度量</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-7xl font-tech font-bold text-[#2D7FF9] group-hover:scale-110 transition-transform">15+</div>
                <div className="text-xs text-gray-500 mt-4 uppercase tracking-[0.3em] font-bold">核心发明专利授权</div>
              </div>
            </div>
            
            <div className="mt-20">
               <button className="bg-white text-[#0B0E14] px-12 py-5 rounded-full font-bold hover:scale-105 transition transform shadow-2xl active:scale-95">
                 立即加入，共创 AI 驱动的未来
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
