
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../ContentContext';

const Hero: React.FC = () => {
  const { t, openDemo } = useContent();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // 动态构建 slides 数组以响应语言切换
  const slides = useMemo(() => [
    {
      ...t.hero.slides[0],
      bg: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=1600",
      accent: "#0078d4",
      gradient: "from-[#0078d4]/20",
      actionType: "navigate",
      path: "/ai-foundry"
    },
    {
      ...t.hero.slides[1],
      bg: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600",
      accent: "#d83b01",
      gradient: "from-[#d83b01]/20",
      actionType: "navigate",
      path: "/modern-workplace"
    },
    {
      ...t.hero.slides[2],
      bg: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1600",
      accent: "#a855f7",
      gradient: "from-[#6366f1]/20",
      actionType: "navigate",
      path: "/ai-agent"
    }
  ], [t]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleAction = (slide: typeof slides[0]) => {
    if (slide.actionType === 'navigate' && slide.path) {
      navigate(slide.path);
    } else {
      openDemo();
    }
  };

  return (
    <section className="relative h-[65vh] overflow-hidden border-b border-white/5 group/hero bg-[#0B0E14]">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} via-[#0B0E14]/95 to-[#0B0E14] z-10`} />
          <img 
            src={slide.bg} 
            alt="" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
            loading="lazy"
          />
          
          <div className="absolute inset-0 z-20 flex items-center px-6 md:px-24 max-w-7xl mx-auto">
            <div className="max-w-4xl text-left">
              <div 
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border mb-6"
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
                  onClick={() => handleAction(slide)}
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
                    {t.common.officialPartner}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

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
