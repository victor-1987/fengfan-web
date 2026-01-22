
import React from 'react';
import { SolutionHero, SectionHeader, GlassCard } from '../Shared/CommonModules';

interface AIAgentPageProps {
  onBookDemo: () => void;
}

const AIAgentPage: React.FC<AIAgentPageProps> = ({ onBookDemo }) => {
  // 采用更稳定的 Icons8 资源路径，并统一 96 尺寸
  const connectors = [
    { name: 'SAP ERP', icon: 'https://img.icons8.com/color/96/sap.png' },
    { name: 'Salesforce', icon: 'https://img.icons8.com/color/96/salesforce.png' },
    { name: 'Oracle DB', icon: 'https://img.icons8.com/color/96/oracle-logo.png' },
    { name: 'ServiceNow', icon: 'https://img.icons8.com/color/96/servicenow.png' },
    { name: 'SharePoint', icon: 'https://img.icons8.com/fluency/96/microsoft-sharepoint.png' },
    { name: 'Zendesk', icon: 'https://img.icons8.com/color/96/zendesk.png' },
    { name: 'Dynamics 365', icon: 'https://img.icons8.com/fluency/96/microsoft-dynamics-365.png' },
    { name: 'SQL Server', icon: 'https://img.icons8.com/color/96/microsoft-sql-server.png' },
  ];

  // 图标加载失败的回退逻辑
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = 'https://img.icons8.com/fluency/96/cloud.png';
  };

  const agentArchitecture = [
    { 
      t: "感知层 (Perception)", 
      d: "通过对话、文档预览、图像分析理解用户意图，支持多模态输入处理。", 
      icon: "👁️" 
    },
    { 
      t: "规划层 (Planning)", 
      d: "自主拆解复杂任务，调用 ReAct 或 Chain-of-Thought 进行逻辑推理。", 
      icon: "🧠" 
    },
    { 
      t: "执行层 (Action)", 
      d: "利用 1200+ 连接器实时读写企业系统数据，触发业务工作流自动化。", 
      icon: "⚙️" 
    }
  ];

  return (
    <div className="bg-[#0B0E14] text-white animate-in fade-in duration-700">
      <SolutionHero 
        tagline="Powered by Microsoft Copilot Studio"
        icon="https://img.icons8.com/fluency/48/microsoft-copilot.png"
        gradientFrom="#a855f7"
        title={<span>构建您的 <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078d4] via-[#a855f7] to-[#d83b01]">企业级自定义 Agent</span></span>}
        subtitle="从战略咨询到 Agent 规模化落地。锋范科技助您在 Copilot Studio 中快速编排业务逻辑，将对话能力转化为业务执行力。"
        onAction={onBookDemo}
      />

      {/* Agent Architecture Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <SectionHeader centered title="三层 Agentic 核心架构" description="我们不只是构建一个聊天机器人，而是为您打造具备“手脚”与“头脑”的数字员工。" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {agentArchitecture.map((arch, i) => (
             <div key={i} className="glass p-12 rounded-[3rem] border border-white/5 hover:border-[#a855f7]/40 transition-all text-center group">
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform">{arch.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{arch.t}</h4>
                <p className="text-gray-400 leading-relaxed font-light">{arch.d}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Integration Power: Connector Map */}
      <section className="py-24 bg-gradient-to-b from-white/[0.02] to-transparent border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="grid grid-cols-12 h-full w-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-white/5" />
              ))}
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1">
                 <h3 className="text-4xl font-bold mb-8">全域数据，一键链接</h3>
                 <p className="text-gray-400 text-lg leading-relaxed font-light mb-10">
                    Copilot Studio 提供的深度集成能力，让 Agent 能够实时调取 CRM、ERP 与私有数据库。锋范专家负责复杂的权限穿透与数据清洗，确保 Agent 操作的合规与准确。
                 </p>
                 <div className="flex items-center space-x-6">
                    <div className="flex -space-x-4">
                       {connectors.slice(0, 5).map((c, i) => (
                         <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0B0E14] bg-white p-2.5 flex items-center justify-center overflow-hidden shadow-xl z-10">
                            <img 
                              src={c.icon} 
                              className="w-8 h-8 object-contain" 
                              alt={c.name} 
                              onError={handleImageError}
                            />
                         </div>
                       ))}
                    </div>
                    <span className="text-sm font-tech font-bold text-gray-500 uppercase tracking-widest">+ 1200 Connectors</span>
                 </div>
              </div>
              <div className="flex-1 grid grid-cols-4 gap-4">
                 {connectors.map((c, i) => (
                   <div key={i} className="glass p-4 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group aspect-square">
                      <img 
                        src={c.icon} 
                        className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform object-contain" 
                        alt={c.name} 
                        onError={handleImageError}
                      />
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Business Impact Matrix */}
      <section className="py-24 max-w-7xl mx-auto px-4">
         <div className="glass p-12 md:p-20 rounded-[4rem] border border-white/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <span className="text-9xl">📊</span>
            </div>
            <div className="relative z-10">
               <SectionHeader title="Agent 带来的商业质变" description="不仅仅是效率，更是业务模式的重塑。" />
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
                  {[
                    { l: '人力降本', v: '40%+', d: '自动化处理 80% 的初级业务咨询。' },
                    { l: '响应加速', v: '24/7', d: '毫秒级决策响应，无间断服务全球客户。' },
                    { l: '合规 zero-risk', v: '100%', d: '基于规则与模型的双重审计，拒绝违规操作。' },
                    { l: '业务洞察', v: 'Real-time', d: '全量对话数据分析，捕捉每一个市场微动态。' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-4">
                       <div className="text-[10px] font-tech font-bold text-[#a855f7] uppercase tracking-widest">{item.l}</div>
                       <div className="text-4xl md:text-5xl font-bold font-tech text-white">{item.v}</div>
                       <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AIAgentPage;
