
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-tech">让 AI 赋能每组织</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            广东锋范科技成立于 2023 年，总部位于大湾区。我们致力于通过 Agentic AI 技术，
            将复杂的 AI 模型转化为企业可落地、可闭环、可增长的数字生产力工具。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {[
            { title: "愿景 Vision", desc: "构建全球领先的企业级 AI 协作系统，让人类专注于决策与创意。" },
            { title: "使命 Mission", desc: "降低 AI 应用门槛，让每一个组织都能拥有自己的数字大脑。" },
            { title: "价值观 Values", desc: "诚实、创新、确定性、长期主义。" },
          ].map((item, i) => (
            <div key={i} className="glass p-12 rounded-[3rem] border border-[#2D7FF9]/10">
              <h3 className="text-2xl font-bold mb-6 text-[#2D7FF9]">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-[4rem] overflow-hidden aspect-[21/9] bg-gradient-to-br from-[#2D7FF9] to-violet-600 p-1">
          <div className="w-full h-full bg-[#0B0E14] rounded-[3.9rem] flex flex-col items-center justify-center p-12 text-center">
            <h2 className="text-4xl font-bold mb-8">我们的里程碑</h2>
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <div className="text-4xl font-tech font-bold text-[#2D7FF9]">100+</div>
                <div className="text-sm text-gray-500 mt-2">合作企业</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-tech font-bold text-[#2D7FF9]">50M+</div>
                <div className="text-sm text-gray-500 mt-2">API 调用量</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-tech font-bold text-[#2D7FF9]">15+</div>
                <div className="text-sm text-gray-500 mt-2">核心专利</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
