
import React, { useState } from 'react';
import { SolutionHero, SectionHeader, GlassCard } from './Shared/CommonModules';

interface AIFoundryPageProps {
  onBookDemo: () => void;
}

const AIFoundryPage: React.FC<AIFoundryPageProps> = ({ onBookDemo }) => {
  const [activeTab, setActiveTab] = useState(0);

  const modelCatalog = [
    { name: 'GPT-4o', provider: 'OpenAI', latency: 'Low', task: 'Multimodal' },
    { name: 'Llama 3.1', provider: 'Meta', latency: 'Med', task: 'Reasoning' },
    { name: 'Mistral Large', provider: 'Mistral', latency: 'Low', task: 'Efficient' },
    { name: 'Cohere Command', provider: 'Cohere', latency: 'Low', task: 'Enterprise' },
    { name: 'Phi-3', provider: 'Microsoft', latency: 'Ultra Low', task: 'Edge' },
    { name: 'Jamba', provider: 'AI21', latency: 'Med', task: 'Long Context' },
  ];

  const foundryFeatures = [
    {
      id: 'build',
      title: "探索与构建",
      subtitle: "Unified Model Catalog",
      description: "在统一的门户中访问 1,700 多个领先模型。锋范专家协助您完成从模型选型到 Prompt 优化的全过程，利用 AI Studio 实现零代码模型实验。",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      points: ["一键式模型基准测试", "Prompt 变体测试 (A/B Test)", "混合模型路由调度策略"]
    },
    {
      id: 'evaluate',
      title: "评估与安全",
      subtitle: "AI Safety & Reliability",
      description: "利用内置护栏，实时监测并过滤幻觉与敏感内容。通过自动化的 5 维度评价指标（相关性、连贯性、安全性、真实性、流畅度）量化模型表现。",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      points: ["红队评估服务 (Red Teaming)", "数据脱敏 (PII Masking)", "自动生成测试数据集"]
    },
    {
      id: 'deploy',
      title: "弹性部署与观测",
      subtitle: "Seamless Scalability",
      description: "将 AI 应用一键部署为生产级 API。利用 Azure 全球基础设施，通过智能缓存与 Token 优化技术，降低推理成本并保持企业级的 SLA 稳定性。",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      points: ["Serverless GPU 自动扩容", "Token 消耗实时看板", "端到端 Tracing 链路追踪"]
    }
  ];

  return (
    <div className="bg-[#0B0E14] text-white min-h-screen animate-in fade-in duration-700">
      <SolutionHero 
        tagline="Microsoft Azure AI Foundry"
        icon="https://img.icons8.com/color/48/azure-1.png"
        title={<span>在单一平台 <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078d4] via-[#50e6ff] to-[#a855f7]">构建您的企业级 AI 核心</span></span>}
        subtitle="锋范科技结合 Azure AI Foundry 统一开发体验，助您从探索模型开始，到实现可规模化的、安全的生成式 AI 应用落地。"
        onAction={onBookDemo}
      />

      {/* Model Catalog Ticker */}
      <section className="py-12 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8">
           <div className="flex items-center space-x-2 text-[10px] font-tech text-[#0078d4] font-bold tracking-[0.2em] uppercase">
              <span className="w-2 h-2 bg-[#0078d4] rounded-full animate-pulse" />
              <span>Live Model Catalog Preview</span>
           </div>
        </div>
        <div className="flex space-x-6 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
           {[...modelCatalog, ...modelCatalog].map((m, i) => (
             <div key={i} className="inline-block glass p-6 rounded-2xl border border-white/10 min-w-[240px]">
                <div className="flex justify-between items-start mb-4">
                   <div className="font-bold text-lg">{m.name}</div>
                   <div className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400">{m.provider}</div>
                </div>
                <div className="flex gap-2">
                   <span className="text-[9px] text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded uppercase">{m.latency} Latency</span>
                   <span className="text-[9px] text-blue-400 border border-blue-400/20 px-2 py-0.5 rounded uppercase">{m.task}</span>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* R&D Lifecycle */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <SectionHeader centered title="AI 研发全生命周期" description="从第一行 Prompt 到百万级 QPS，我们提供端到端的技术保障与架构支持。" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
           <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />
           {[
             { step: '01', t: 'Discovery', d: '模型基准测试与业务场景匹配' },
             { step: '02', t: 'Experiment', d: '提示词优化与 RAG 知识库挂载' },
             { step: '03', t: 'Evaluate', d: '全自动化安全与质量回归测试' },
             { step: '04', t: 'Production', d: '弹性 API 部署与全球负载均衡' }
           ].map((s, i) => (
             <div key={i} className="glass p-8 rounded-3xl border border-white/5 relative z-10 hover:border-[#0078d4]/40 transition-all group">
                <div className="text-4xl font-tech font-bold text-white/10 group-hover:text-[#0078d4]/20 mb-4 transition-colors">{s.step}</div>
                <h4 className="text-xl font-bold mb-2">{s.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{s.d}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Feature Explorer Tabs */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {foundryFeatures.map((f, i) => (
            <button key={f.id} onClick={() => setActiveTab(i)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${activeTab === i ? 'bg-[#0078d4] border-transparent shadow-[0_10px_30px_rgba(0,120,212,0.3)]' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}>
              {f.title}
            </button>
          ))}
        </div>

        <GlassCard hoverEffect={false} className="md:p-16 min-h-[500px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <img src="https://img.icons8.com/color/480/azure-1.png" className="w-96 h-96" alt="" />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 space-y-8 text-left">
              <div>
                <div className="text-[#0078d4] font-tech text-xs tracking-[0.3em] font-bold uppercase mb-2">{foundryFeatures[activeTab].subtitle}</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{foundryFeatures[activeTab].title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">{foundryFeatures[activeTab].description}</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {foundryFeatures[activeTab].points.map((p, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#0078d4] shadow-[0_0_10px_#0078d4]" />
                    <span className="text-sm font-medium text-gray-200">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src={foundryFeatures[activeTab].image} className="w-full h-[450px] object-cover grayscale hover:grayscale-0 transition duration-[2s]" alt="Feature" />
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Safety & Compliance Stripe */}
      <section className="py-24 bg-gradient-to-b from-white/[0.02] to-transparent border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-6">企业级安全底座</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                     Azure AI 不会使用您的企业数据来训练基础模型。您的数据始终留在您的私有租户中，受到全球最高等级的合规性保护。
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     {['ISO 27001', 'SOC 2 Type II', 'HIPAA Compliant', 'GDPR Ready'].map(c => (
                       <div key={c} className="flex items-center space-x-2 text-xs font-bold text-gray-500">
                          <span className="text-emerald-500 text-lg">🛡️</span>
                          <span>{c}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="flex-1 glass p-10 rounded-[2.5rem] border border-white/5">
                  <div className="space-y-6">
                     <div className="flex justify-between text-xs font-tech font-bold uppercase tracking-widest text-gray-500 mb-2">Content Safety Monitor</div>
                     {[
                       { l: 'Hate Speech Detection', p: 98 },
                       { l: 'Self-Harm Filters', p: 99 },
                       { l: 'Injection Attacks Prevention', p: 95 }
                     ].map((item, i) => (
                       <div key={i} className="space-y-2">
                          <div className="flex justify-between text-xs">
                             <span>{item.l}</span>
                             <span className="text-blue-500">{item.p}% Efficiency</span>
                          </div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-blue-500 rounded-full" style={{ width: `${item.p}%` }} />
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto glass p-16 md:p-24 rounded-[3.5rem] border border-[#0078d4]/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0078d4]/10 to-transparent group-hover:scale-110 transition-transform duration-[3s]" />
          <h2 className="text-3xl md:text-6xl font-bold mb-8 relative z-10">准备好定义您的 AI 核心了吗？</h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 font-light relative z-10">
            预约 45 分钟架构访谈，我们将为您演示如何利用 Foundry 快速构建业务闭环。
          </p>
          <button onClick={onBookDemo} className="relative z-10 bg-[#0078d4] hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-2xl shadow-blue-500/30 active:scale-95">
            开启您的 Foundry 试点项目
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIFoundryPage;
