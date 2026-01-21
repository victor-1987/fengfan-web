
import React from 'react';
import { HONORS, CLIENT_LOGOS } from '../../constants';

const AboutUs: React.FC = () => {
  const groupStats = [
    { label: "国家级高新技术企业", value: "3", unit: "家", icon: "🛡️" },
    { label: "分销及系统集成企业", value: "2", unit: "家", icon: "🌐" },
    { label: "工厂定制企业", value: "1", unit: "家", icon: "🏭" },
    { label: "集团员工总数", value: "200", unit: "+人", icon: "👥" },
    { label: "年产品总销售额", value: "3", unit: "亿+", icon: "💰" },
  ];

  const industries = [
    { name: "数字政府", icon: "🏛️", desc: "助力政务数字化转型，构建高效透明的服务体系。" },
    { name: "智能制造", icon: "⚙️", desc: "工业 4.0 深度集成，重塑生产力边界。" },
    { name: "智慧能源", icon: "⚡", desc: "能源调度与安全监控，保障工业血液稳健流动。" },
    { name: "智慧教育", icon: "🎓", desc: "AI 赋能教学场景，打造现代化智慧校园。" },
  ];

  const offices = [
    {
      id: 'hq',
      name: '广东锋范科技集团（总部）',
      address: '中国 · 广东省 · 东莞市科技产业园区锋范科技大厦',
      type: 'GROUP HEADQUARTERS',
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

  return (
    <div className="animate-in fade-in duration-500 bg-[#0B0E14]">
      {/* 1. Hero Section: Group Identity */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2D7FF9]/10 border border-[#2D7FF9]/30 mb-8">
           <span className="w-2 h-2 bg-[#2D7FF9] rounded-full animate-pulse" />
           <span className="text-[10px] font-tech font-bold text-[#2D7FF9] tracking-widest uppercase">Since 2023 | Innovation & Excellence</span>
        </div>
        <h1 className="text-4xl md:text-8xl font-bold mb-8 font-tech gradient-text tracking-tight leading-tight">
          广东锋范科技集团
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
          一家极富创新性的高新技术公司，秉承自主创新与追求卓越的传统。
          我们不只是技术的搬运工，更是深耕用户关键应用领域、提供综合性 IT 信息科技服务的行业领航者。
        </p>
      </section>

      {/* 2. Business Model */}
      <section className="py-20 bg-[#0F1219]/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-tech tracking-[0.4em] text-[#2D7FF9] mb-4 uppercase text-xs font-bold">Business Model</h2>
            <h3 className="text-3xl md:text-5xl font-bold italic font-tech">“以咨询为先导，以产品为依托，以服务为核心”</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "咨询为先导", d: "深度调研客户业务场景，提供专业的信息系统建设顶层设计方案。", icon: "📝" },
              { t: "产品为依托", d: "整合全球优质云端生态与锋范自研 AI 硬件，构建坚实技术基座。", icon: "📦" },
              { t: "服务为核心", d: "提供全生命周期运维与代管服务，确保数字化系统持续创造价值。", icon: "🛠️" }
            ].map((item, i) => (
              <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 hover:border-[#2D7FF9]/30 transition-all group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-[#2D7FF9] transition-colors">{item.t}</h4>
                <p className="text-gray-400 leading-relaxed font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Group Scale Dashboard */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {groupStats.map((stat, i) => (
            <div key={i} className="glass border border-white/5 p-8 rounded-[2.5rem] text-center flex flex-col items-center group hover:bg-white/5 transition-all">
              <div className="text-3xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-tech font-bold text-white mb-2">
                {stat.value}<span className="text-lg ml-1 text-[#2D7FF9]">{stat.unit}</span>
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Industry Expertise */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
            <div className="flex-1">
              <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-sm font-bold">Industry Solutions</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">跨行业领域的深耕与成功</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                锋范科技在政府、制造、能源、教育等多个关键领域，均拥有高品质的整体化解决方案和海量成功案例。
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {industries.map((ind, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-[#2D7FF9]/40 transition-all">
                  <div className="text-3xl mb-3">{ind.icon}</div>
                  <h4 className="font-bold text-white mb-2">{ind.name}</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Presence Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-xs font-bold">China Network</h2>
          <h3 className="text-3xl md:text-5xl font-bold">集团布局：深耕本土，连接全球</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-[2.5] glass border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-4 md:p-12 overflow-hidden relative group min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-black/20">
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[1.15] translate-y-4">
                <path d="M480 50 L520 40 L580 80 L720 120 L750 200 L700 250 L780 320 L730 450 L680 520 L580 580 L480 560 L400 580 L300 540 L150 560 L80 480 L50 400 L120 280 L80 180 L150 120 L280 80 L380 90 L450 50 Z" fill="url(#china-grad)" opacity="0.3" stroke="#2D7FF9" strokeWidth="1" strokeDasharray="4 4"/>
                <defs>
                  <radialGradient id="china-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 300) rotate(90) scale(300 400)">
                    <stop stopColor="#2D7FF9" />
                    <stop offset="1" stopColor="#0B0E14" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="relative w-full h-full max-w-[700px] max-h-[500px]">
              {offices.map((office) => (
                <div key={office.id} className="absolute transition-all duration-500" style={{ ...office.markerPos }}>
                  <div className="relative group/marker">
                    <div className="w-3 md:w-5 h-3 md:h-5 rounded-full animate-ping absolute inset-0" style={{ backgroundColor: office.color }} />
                    <div className="w-3 md:w-5 h-3 md:h-5 rounded-full relative z-10 border-2 border-white shadow-2xl" style={{ backgroundColor: office.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            {offices.map((office) => (
              <div key={office.id} className="glass border border-white/5 rounded-[2.5rem] p-8 hover:border-white/20 transition-all group relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="flex items-center space-x-3 mb-4 relative z-10">
                  <div className="w-1.5 h-5 rounded-full" style={{ backgroundColor: office.color }} />
                  <span className="font-tech text-[9px] tracking-[0.2em] text-gray-500 font-bold uppercase">{office.type}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#2D7FF9] transition-all relative z-10">{office.name}</h4>
                <div className="flex items-start space-x-3 relative z-10">
                  <span className="text-lg mt-0.5 shrink-0 opacity-40">🏢</span>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{office.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Honors & Qualifications (Moved from Home) */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 border-t border-white/5 bg-[#0B0E14]">
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

      {/* 7. Cooperative Clients (Moved from Home and Expanded to 4 Rows) */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 border-t border-white/5 bg-[#0B0E14]">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-[10px] md:text-sm font-bold">Partnership & Ecosystem</h2>
          <h3 className="text-3xl md:text-5xl font-bold">合作客户：共创 AI 边界</h3>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base font-light">
            锋范科技已协助 100+ 行业头部企业完成智能化跨越，构建数字时代的核心竞争力。
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
          {CLIENT_LOGOS.map((client, i) => (
            <div key={i} className="flex flex-col items-center justify-center group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4 bg-[#11151C] rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-[#2D7FF9]/30 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(45,127,249,0.1)]">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" 
                />
              </div>
              <span className="text-[9px] md:text-[10px] font-tech text-gray-500 uppercase tracking-widest text-center group-hover:text-white transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Impact CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="relative rounded-[5rem] overflow-hidden bg-white/5 border border-white/5 p-1">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D7FF9]/10 via-transparent to-violet-600/10" />
          <div className="w-full h-full bg-[#0B0E14] rounded-[4.9rem] flex flex-col items-center justify-center p-12 md:p-24 text-center relative z-10">
            <h2 className="text-2xl md:text-5xl font-bold mb-8 font-tech text-white leading-tight">追求卓越，止于至善</h2>
            <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto font-light">
              锋范科技集团始终致力为用户关键应用领域提供全方位的 IT 信息科技服务。
            </p>
            <button className="bg-[#2D7FF9] hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
              立即预约 1对1 咨询
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
