
import React from 'react';

interface FeatureMatrixProps {
  onConsult: () => void;
}

const applications = [
  { 
    icon: "💎", 
    title: "Super Magic 入口", 
    tag: "统一枢纽",
    desc: "全公司 AI 能力的统一入口，以项目为中心，对话、沉淀、搜索，一步到位。" 
  },
  { 
    icon: "⚡", 
    title: "神奇流程 Workflow", 
    tag: "确定性业务",
    desc: "将验证过的业务逻辑转化为自动化流水线，稳定、高效、可复用。" 
  },
  { 
    icon: "🦊", 
    title: "AI 招聘机器人", 
    tag: "典型应用示例",
    desc: "自动解析数千份简历，完成多维度打分，进入真实业务系统完成自动化筛选。" 
  },
  { 
    icon: "🛡️", 
    title: "私有化知识库", 
    tag: "数据安全",
    desc: "企业大脑的根基。本地部署，数据绝不外泄，越用越懂你的企业业务。" 
  },
  { 
    icon: "🔌", 
    title: "API 聚合调度", 
    tag: "模型自由",
    desc: "无缝调度 GPT-4, Claude, DeepSeek 等主流模型，根据任务复杂度自动分配。" 
  },
  { 
    icon: "📦", 
    title: "Micro App 容器", 
    tag: "业务定制",
    desc: "极低代码生成单一功能的小程序，快速响应各部门碎片化的 AI 需求。" 
  },
];

const FeatureMatrix: React.FC<FeatureMatrixProps> = ({ onConsult }) => {
  return (
    <section className="py-24 bg-[#0B0E14]/80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-[#2D7FF9] font-tech tracking-widest mb-4">SURFACE APPLICATIONS</h2>
          <h3 className="text-4xl font-bold">核心应用：触手可及的生产力跨越</h3>
          <p className="text-gray-400 mt-4 max-w-2xl">从统一入口到深层业务流，我们提供全方位的落地工具。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, i) => (
            <div key={i} className="glass p-10 rounded-[2.5rem] hover:border-[#2D7FF9]/50 transition duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150">
                <span className="text-6xl">{app.icon}</span>
              </div>
              <div className="relative z-10">
                <div className="text-sm font-bold text-[#2D7FF9] mb-4 tracking-wider">{app.tag}</div>
                <div className="text-4xl mb-6">{app.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{app.title}</h4>
                <p className="text-gray-400 mb-8 leading-relaxed">{app.desc}</p>
                <button 
                  onClick={onConsult}
                  className="bg-white/5 hover:bg-[#2D7FF9] hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-300"
                >
                  查看演示
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
