
import React, { useState } from 'react';
import { SolutionHero, SectionHeader, GlassCard } from '../Shared/CommonModules';

interface ModernWorkplacePageProps {
  onBookDemo: () => void;
}

const ModernWorkplacePage: React.FC<ModernWorkplacePageProps> = ({ onBookDemo }) => {
  const [activePlan, setActivePlan] = useState<'business' | 'enterprise'>('enterprise');

  const copilotFeatures = [
    { 
      app: 'Word', 
      title: '创意引擎', 
      desc: '从草稿到初稿，Copilot 助您快速生成文档架构、撰写润色与摘要提取。',
      icon: 'https://img.icons8.com/color/48/microsoft-word-2019.png'
    },
    { 
      app: 'Excel', 
      title: '数据洞察', 
      desc: '用自然语言询问数据趋势，自动生成公式与专业的可视化图表。',
      icon: 'https://img.icons8.com/color/48/microsoft-excel-2019.png'
    },
    { 
      app: 'Teams', 
      title: '协作指挥', 
      desc: '智能会议摘要，自动整理行动项，甚至为您追回错过的会议重点。',
      icon: 'https://img.icons8.com/color/48/microsoft-teams.png'
    },
    { 
      app: 'Outlook', 
      title: '沟通效率', 
      desc: '快速回复建议，整理长篇邮件链摘要，让收件箱重回掌控。',
      icon: 'https://img.icons8.com/color/48/microsoft-outlook-2019.png'
    }
  ];

  const plans = {
    business: [
      { t: '全面协作', d: '包含 Teams, SharePoint 和 OneDrive 1TB 云存储。', color: '#00a4ef' },
      { t: '轻量管理', d: '适用于 300 人以下规模，支持一键式订阅分发。', color: '#7fba00' },
      { t: '基础安全', d: '提供垃圾邮件防御与基础的文件权限保护。', color: '#f25022' }
    ],
    enterprise: [
      { t: '合规底座', d: '符合 E3/E5 标准，包含敏感度标签、电子数据展示 (eDiscovery)。', color: '#ffb900' },
      { t: '全域安全', d: 'Intune 设备管控、Defender 全程监测、Entra 身份管理。', color: '#0078d4' },
      { t: '无限扩展', d: '无用户上限，包含进阶分析工具 Power BI Pro 与安全自动化。', color: '#a855f7' }
    ]
  };

  return (
    <div className="bg-[#0B0E14] text-white min-h-screen animate-in fade-in duration-700">
      {/* 增强版 Hero - 融入 M365 四色光晕 */}
      <div className="relative">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#f25022]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-[#00a4ef]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <SolutionHero 
          tagline="Microsoft 365 | Global Partner"
          icon="https://img.icons8.com/fluency/48/microsoft-365.png"
          gradientFrom="#d83b01"
          title={<span>重塑组织的 <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d83b01] via-[#0078d4] to-[#a855f7]">现代化生产力基座</span></span>}
          subtitle="超越简单的办公协作，迈向 AI 驱动的智能时代。锋范科技助力企业深度整合 M365 生态，构建安全、弹性、无处不在的数字化职场。"
          onAction={onBookDemo}
        />
      </div>

      {/* Copilot Showcase - 微软 Fluent 玻璃风格 */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="relative glass p-12 md:p-20 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#a855f7]/20 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
              <div className="flex-1">
                <SectionHeader 
                  tag="Next-Gen AI: Copilot"
                  title="您的全能 AI 伴侣"
                  description="Copilot 并不是一个单纯的插件，它是深度嵌入 Microsoft 365 核心组件的智慧核心，像专家一样辅助您的每一项决策。"
                  themeColor="#a855f7"
                />
              </div>
              <div className="flex-shrink-0">
                <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 flex items-center space-x-4 backdrop-blur-md">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img src="https://img.icons8.com/fluency/96/microsoft-copilot.png" className="w-10 h-10 object-contain" alt="Copilot" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-tech text-[#a855f7] font-bold uppercase tracking-widest">Enterprise Ready</div>
                    <div className="text-sm font-bold">商业数据保护已开启</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {copilotFeatures.map((f, i) => (
                <div key={i} className="group glass p-8 rounded-3xl border border-white/5 hover:bg-white/10 transition-all hover:border-[#a855f7]/30">
                   <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                      <img src={f.icon} className="w-8 h-8" alt={f.app} />
                   </div>
                   <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                   <p className="text-sm text-gray-500 leading-relaxed font-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section - 从纯白改为深蓝渐变，融入 Defender 元素 */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[3.5rem] md:rounded-[5rem] bg-gradient-to-br from-[#0A1128] to-[#0B0E14] border border-[#0078d4]/30 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#0078d4]/20 blur-[120px] rounded-full" />
          
          <div className="relative z-10 p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#0078d4]/10 border border-[#0078d4]/30">
                <span className="w-2 h-2 bg-[#0078d4] rounded-full animate-pulse" />
                <span className="text-[10px] font-tech font-bold text-[#0078d4] uppercase tracking-[0.2em]">Zero Trust Framework</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                零信任架构：<br/>
                <span className="text-[#0078d4]">守护组织</span> 的每一条数据。
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                在混合办公时代，安全边界已不复存在。我们通过 Microsoft Defender 与 Intune 构建以身份为核心的全新防御体系，确保“永不信任，始终验证”。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: '条件访问 (Entra ID)', d: '基于地理、设备、风险的动态准入' },
                  { t: '端点防护 (Defender)', d: '全平台威胁自动化拦截与响应' },
                  { t: '设备管理 (Intune)', d: '公司移动资产全量合规管控' },
                  { t: '合规治理 (Purview)', d: '敏感数据分类标注与防泄漏' }
                ].map((s, i) => (
                  <div key={i} className="flex items-start space-x-3 group">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#0078d4]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0078d4] transition-colors">
                      <svg className="w-3 h-3 text-[#0078d4] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h6 className="font-bold text-gray-200 text-sm">{s.t}</h6>
                      <p className="text-xs text-gray-500 mt-1">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative w-full lg:w-auto">
              <div className="relative glass p-4 rounded-[2.5rem] border border-white/10 shadow-2xl bg-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                  className="rounded-[2rem] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 object-cover h-64 lg:h-96 w-full" 
                  alt="Cyber Security" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10">
                   <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-tech text-blue-400 font-bold uppercase mb-1">Microsoft Sentinel</div>
                        <div className="text-sm font-bold">全场景安全观测态势</div>
                      </div>
                      <div className="text-blue-400 text-2xl animate-pulse">🛡️</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Matrix - 微软官网同款定价卡片感 */}
      <section className="py-24 max-w-7xl mx-auto px-4 bg-[#0B0E14] text-center">
        <SectionHeader 
          centered
          title="量身定制的订阅方案" 
          description="无论您是初创工作室还是跨国巨头，我们都有匹配您发展阶段的 Microsoft 365 架构方案。"
        />

        <div className="flex justify-center mb-16">
           <div className="inline-flex p-1.5 bg-white/5 rounded-full border border-white/10 shadow-inner">
              <button 
                onClick={() => setActivePlan('business')}
                className={`px-10 py-3 rounded-full text-xs font-bold transition-all ${activePlan === 'business' ? 'bg-[#0078d4] text-white shadow-xl scale-105' : 'text-gray-500 hover:text-white'}`}
              >
                中小企业版 (Business)
              </button>
              <button 
                onClick={() => setActivePlan('enterprise')}
                className={`px-10 py-3 rounded-full text-xs font-bold transition-all ${activePlan === 'enterprise' ? 'bg-[#0078d4] text-white shadow-xl scale-105' : 'text-gray-500 hover:text-white'}`}
              >
                大型企业版 (Enterprise)
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
           {plans[activePlan].map((item, i) => (
             <div key={i} className="group relative">
               <div className="absolute -inset-0.5 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition duration-500 rounded-[2.5rem] blur" style={{ backgroundImage: `linear-gradient(to bottom right, ${item.color}, transparent)` }} />
               <GlassCard className="p-12 relative h-full flex flex-col">
                  <div className="text-4xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: item.color }}>0{i+1}</div>
                  <h4 className="text-2xl font-bold mb-6">{item.t}</h4>
                  <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">{item.d}</p>
                  <div className="w-10 h-1 bg-white/5 group-hover:w-full transition-all duration-700" style={{ backgroundColor: item.color }} />
               </GlassCard>
             </div>
           ))}
        </div>
      </section>

      {/* Transformation Process - 阶段式导引 */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeader centered title="锋范科技：您的转型伙伴" description="迁移不只是搬家，而是一次业务生产关系的重组。" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {[
             { t: '架构访谈', d: '深度排摸现有 IT 资产与合规痛点' },
             { t: '订阅迁移', d: '邮件、OneDrive、Teams 全量无损平滑迁移' },
             { t: '赋能培训', d: '助力员工掌握 Copilot 核心应用技能' },
             { t: '代管优化', d: '24/7 席位式技术支持与许可证成本治理' }
           ].map((step, i) => (
             <div key={i} className="p-8 glass border border-white/5 rounded-3xl hover:bg-white/5 transition-all group border-b-2" style={{ borderBottomColor: ['#f25022', '#7fba00', '#00a4ef', '#ffb900'][i] }}>
                <div className="text-xs font-tech font-bold text-gray-600 mb-6 uppercase tracking-widest">Phase 0{i+1}</div>
                <h4 className="text-lg font-bold mb-3">{step.t}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{step.d}</p>
             </div>
           ))}
        </div>
      </section>

      {/* CTA Section - M365 混合光晕 */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-5xl mx-auto glass p-16 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#f25022]/10 blur-[60px]" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7fba00]/10 blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00a4ef]/10 blur-[60px]" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ffb900]/10 blur-[60px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">准备好定义您的 <br/><span className="gradient-text">现代化职场</span> 了吗？</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
              预约一场 Modern Workplace 架构访谈，我们将为您展示如何降低 30% 以上的沟通成本。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button onClick={onBookDemo} className="w-full sm:w-auto bg-[#0078d4] hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-2xl active:scale-95">
                开启您的 M365 试点
              </button>
              <span className="text-gray-600 font-tech text-xs tracking-widest uppercase">Official Microsoft Partner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernWorkplacePage;
