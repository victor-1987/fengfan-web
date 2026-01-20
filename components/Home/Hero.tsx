
import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: "Super Magic | Agentic AI Productivity Platform",
    subtitle: "人是指挥官，AI 是执行官",
    description: "进入指挥官视角。通过全息协作界面调度多组 AI Agent 协同工作，将人类的战略直觉与 AI 的指数级执行力完美融合。",
    bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
    button: "预约演示",
    type: "demo"
  },
  {
    title: "Project-Centric Knowledge Brain",
    subtitle: "以项目为核心，让成果沉淀",
    description: "拒绝随聊随丢。Super Magic 每一个工作都是一个项目，文件、决策、产出全自动化闭环沉淀，构建企业永续的数字资产。",
    bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
    button: "查看架构",
    type: "link"
  },
  {
    title: "Dual-Mode Intelligence Driver",
    subtitle: "确定性生产与创意性探索",
    description: "左手 Workflow 驱动标准化业务稳健运行，右手 Agent 模式挑战创意与复杂问题边界。双核动力，重塑组织增长曲线。",
    bg: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1600",
    button: "探索双模流程",
    type: "link"
  }
];

interface HeroProps {
  onBookDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleAction = (type: string) => {
    if (type === 'demo') {
      onBookDemo();
    }
  };

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/70 to-transparent z-10" />
          <img src={slide.bg} alt={slide.title} className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 z-20 flex items-center px-4 md:px-16 max-w-7xl mx-auto">
            <div className="max-w-5xl">
              <h2 className="text-[#2D7FF9] font-tech text-lg mb-4 tracking-widest uppercase">{slide.title}</h2>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight lg:whitespace-nowrap overflow-hidden text-ellipsis">
                {slide.subtitle}
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">{slide.description}</p>
              <button 
                onClick={() => handleAction(slide.type)}
                className="bg-[#2D7FF9] hover:bg-blue-600 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 transition-all rounded-full ${idx === current ? 'w-12 bg-[#2D7FF9]' : 'w-4 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
