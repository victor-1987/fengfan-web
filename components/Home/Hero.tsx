
import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    title: "Azure AI Foundry | Unified Platform",
    subtitle: "构建、部署与管理生成式 AI",
    description: "利用最先进的模型目录，包括 GPT-4o 与百余种开源模型，通过 Azure AI Foundry 实现从原型到生产的无缝衔接，保障企业级安全与合规。",
    bg: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=1600",
    btnText: "探索 Foundry 解决方案",
    accent: "#0078d4", // Azure Blue
    gradient: "from-[#0078d4]/20",
    type: "azure"
  },
  {
    title: "Microsoft 365 | AI-Powered Productivity",
    subtitle: "重塑组织的生产力基座",
    description: "深度整合 Microsoft 365 办公生态，通过 AI 协同工具打破信息孤岛。让协作更智能，让每一个业务节点都具备即时响应的生命力。",
    bg: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600",
    btnText: "现代化办公转型咨询",
    accent: "#d83b01", // M365 Orange/Red
    gradient: "from-[#d83b01]/20",
    type: "m365"
  },
  {
    title: "Microsoft Copilot Studio | Low-Code Agents",
    subtitle: "打造专属的企业级数字员工",
    description: "端到端、低代码的 Copilot 构建平台。锋范科技助力企业通过 Copilot Studio 快速编排业务逻辑，实现自动化客户服务与内部流程管理。",
    bg: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1600",
    btnText: "定制您的 AI Agent",
    accent: "#a855f7", // Copilot Purple/Blue
    gradient: "from-[#6366f1]/20",
    type: "copilot"
  }
];

interface HeroProps {
  onBookDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[65vh] overflow-hidden border-b border-white/5 group/hero bg-[#0B0E14]">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          {/* Background Layer - Added fallback color */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} via-[#0B0E14]/95 to-[#0B0E14] z-10`} />
          <img 
            src={slide.bg} 
            alt="" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
            loading="lazy"
          />
          
          {/* Content Layer */}
          <div className="absolute inset-0 z-20 flex items-center px-6 md:px-24 max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div 
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border mb-6 animate-in slide-in-from-left duration-700"
                style={{ backgroundColor: `${slide.accent}1A`, borderColor: `${slide.accent}4D` }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: slide.accent }}></span>
                <span className="text-[10px] font-tech font-bold uppercase tracking-widest" style={{ color: slide.accent }}>
                  {slide.title}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
                {slide.subtitle}
              </h1>
              
              <p className="text-base md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button 
                  onClick={onBookDemo}
                  className="w-full sm:w-auto px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 text-white shadow-2xl"
                  style={{ backgroundColor: slide.accent, boxShadow: `0 10px 30px ${slide.accent}33` }}
                >
                  {slide.btnText}
                </button>
                
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1.5 opacity-80 scale-90">
                    <span className="w-2 h-2 bg-[#f25022] rounded-sm" />
                    <span className="w-2 h-2 bg-[#7fba00] rounded-sm" />
                    <span className="w-2 h-2 bg-[#00a4ef] rounded-sm" />
                    <span className="w-2 h-2 bg-[#ffb900] rounded-sm" />
                  </div>
                  <span className="text-[10px] font-tech text-gray-500 uppercase tracking-widest font-bold">
                    Official Microsoft Partner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full glass border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all opacity-0 group-hover/hero:opacity-100 translate-x-4 group-hover/hero:translate-x-0"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full glass border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all opacity-0 group-hover/hero:opacity-100 -translate-x-4 group-hover/hero:translate-x-0"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3 items-center">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group py-2 px-1 focus:outline-none"
          >
            <div 
              className={`h-1.5 transition-all duration-500 rounded-full ${
                idx === current ? 'w-16' : 'w-4 bg-white/10 group-hover:bg-white/30'
              }`}
              style={{ backgroundColor: idx === current ? slide.accent : undefined }}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
