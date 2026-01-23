
import React, { useState } from 'react';
import { useContent } from '../../ContentContext';
import { PageWrapper, ContentSection, SubPageHero, MetricItem } from '../Shared/UIComponents';
// GlassCard is exported from CommonModules, not UIComponents
import { GlassCard } from '../Shared/CommonModules';

const AIFoundryPage: React.FC = () => {
  const { t, openDemo } = useContent();
  const [activeTab, setActiveTab] = useState(0);

  const modelCatalog = [
    { name: 'GPT-4o', provider: 'OpenAI', latency: 'Low', task: 'Multimodal' },
    { name: 'Llama 3.1', provider: 'Meta', latency: 'Med', task: 'Reasoning' },
    { name: 'Mistral Large', provider: 'Mistral', latency: 'Low', task: 'Efficient' },
    { name: 'Phi-3', provider: 'Microsoft', latency: 'Ultra Low', task: 'Edge' },
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
      description: "利用内置护栏，实时监测并过滤幻觉与敏感内容。通过自动化的评价指标（相关性、连贯性、安全性、真实性）量化模型表现。",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      points: ["红队评估服务 (Red Teaming)", "数据脱敏 (PII Masking)", "自动生成测试数据集"]
    }
  ];

  return (
    <PageWrapper>
      <SubPageHero 
        tagline="Microsoft Azure AI Foundry"
        icon="https://img.icons8.com/color/48/azure-1.png"
        title={<span>在单一平台 <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078d4] via-[#50e6ff] to-[#a855f7]">构建您的企业级 AI 核心</span></span>}
        subtitle="锋范科技结合 Azure AI Foundry 统一开发体验，助您从探索模型开始，到实现可规模化的、安全的生成式 AI 应用落地。"
        onAction={openDemo}
      />

      <section className="py-12 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="flex space-x-6 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
           {[...modelCatalog, ...modelCatalog].map((m, i) => (
             <div key={i} className="inline-block glass p-6 rounded-2xl border border-white/10 min-w-[240px]">
                <div className="flex justify-between items-start mb-4">
                   <div className="font-bold text-lg">{m.name}</div>
                   <div className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400">{m.provider}</div>
                </div>
                <div className="flex gap-2">
                   <span className="text-[9px] text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded uppercase">{m.latency} Latency</span>
                </div>
             </div>
           ))}
        </div>
      </section>

      <ContentSection>
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold">AI 研发全生命周期</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {[
             { step: '01', t: 'Discovery', d: '模型基准测试与业务场景匹配' },
             { step: '02', t: 'Experiment', d: '提示词优化与 RAG 知识库挂载' },
             { step: '03', t: 'Evaluate', d: '全自动化安全与质量回归测试' },
             { step: '04', t: 'Production', d: '弹性 API 部署与全球负载均衡' }
           ].map((s, i) => (
             <div key={i} className="glass p-8 rounded-3xl border border-white/5 hover:border-[#0078d4]/40 transition-all group">
                <div className="text-4xl font-tech font-bold text-white/10 group-hover:text-[#0078d4]/20 mb-4 transition-colors">{s.step}</div>
                <h4 className="text-xl font-bold mb-2">{s.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{s.d}</p>
             </div>
           ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {foundryFeatures.map((f, i) => (
            <button key={f.id} onClick={() => setActiveTab(i)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${activeTab === i ? 'bg-[#0078d4] border-transparent shadow-[0_10px_30px_rgba(0,120,212,0.3)]' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}>
              {f.title}
            </button>
          ))}
        </div>

        <GlassCard hoverEffect={false} className="md:p-16 min-h-[500px] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10 text-left">
            <div className="flex-1 space-y-8">
              <div>
                <div className="text-[#0078d4] font-tech text-xs tracking-[0.3em] font-bold uppercase mb-2">{foundryFeatures[activeTab].subtitle}</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{foundryFeatures[activeTab].title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">{foundryFeatures[activeTab].description}</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {foundryFeatures[activeTab].points.map((p, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/5"><div className="w-2 h-2 rounded-full bg-[#0078d4] shadow-[0_0_10px_#0078d4]" /><span className="text-sm font-medium text-gray-200">{p}</span></div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"><img src={foundryFeatures[activeTab].image} className="w-full h-[450px] object-cover" alt="" /></div>
          </div>
        </GlassCard>
      </ContentSection>
    </PageWrapper>
  );
};

export default AIFoundryPage;