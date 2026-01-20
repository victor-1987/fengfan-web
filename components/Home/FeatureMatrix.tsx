
import React from 'react';

interface FeatureMatrixProps {
  onConsult: () => void;
}

const applications = [
  { 
    icon: "💎", 
    title: "Super Magic 入口", 
    tag: "统一指挥中心",
    desc: "全公司 AI 能力的统一入口，拒绝工具碎片化。以项目为容器，让所有 AI 成果自动沉淀为公司资产。" 
  },
  { 
    icon: "⚡", 
    title: "神奇流程 Workflow", 
    tag: "业务确定性",
    desc: "将 80% 的重复性专家决策转化为自动化流水线。确保每一个交付物都符合品牌标准，稳定且高效。" 
  },
  { 
    icon: "🦊", 
    title: "AI 业务数字人", 
    tag: "效率倍增器",
    desc: "24/7 在线的数字员工。无论是自动解析简历还是处理初级客服咨询，它都能不知疲倦地完成任务。" 
  },
  { 
    icon: "🛡️", 
    title: "私有化知识库", 
    tag: "数字化主权",
    desc: "真正懂你业务的私有大脑。基于本地数据训练，绝不外传，让企业核心竞争力随 AI 的使用持续增值。" 
  },
  { 
    icon: "🔌", 
    title: "多模路由调度", 
    tag: "成本最优解",
    desc: "智能混合调度全球模型能力。根据任务难度自动切换 GPT-4 或本地 DeepSeek，在成本与效能间实现极致平衡。" 
  },
  { 
    icon: "📦", 
    title: "低代码 App 容器", 
    tag: "敏捷响应",
    desc: "让业务部门快速拥有自己的 AI 工具。无需漫长排期，通过自然语言描述即可生成单一功能的 AI 小助手。" 
  },
];

const FeatureMatrix: React.FC<FeatureMatrixProps> = ({ onConsult }) => {
  return (
    <section className="py-24 bg-[#0B0E14]/80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-[#2D7FF9] font-tech tracking-[0.3em] mb-4 text-sm font-bold uppercase">Surface Applications</h2>
          <h3 className="text-4xl md:text-5xl font-bold">核心应用：重塑每一个价值节点</h3>
          <p className="text-gray-400 mt-4 max-w-2xl text-lg font-light">
            我们不只提供工具，更提供一套完整的、面向未来的数字化生存方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, i) => (
            <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-[#2D7FF9]/40 transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 group-hover:rotate-12 pointer-events-none">
                <span className="text-7xl">{app.icon}</span>
              </div>
              <div className="relative z-10 flex-grow">
                <div className="text-[10px] font-bold text-[#2D7FF9] mb-4 tracking-[0.2em] uppercase">{app.tag}</div>
                <div className="text-4xl mb-6 transform transition-transform group-hover:scale-110 origin-left inline-block">{app.icon}</div>
                <h4 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">{app.title}</h4>
                <p className="text-gray-400 mb-8 leading-relaxed font-light">{app.desc}</p>
              </div>
              <div className="relative z-10 mt-auto pt-6">
                <button 
                  onClick={onConsult}
                  className="w-full bg-white/5 hover:bg-[#2D7FF9] text-gray-300 hover:text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-white/5 hover:border-transparent flex items-center justify-center space-x-2 group/btn"
                >
                  <span>查看演示场景</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureMatrix;
