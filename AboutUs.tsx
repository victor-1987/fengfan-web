import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../ContentContext';

const Hero: React.FC = () => {
  const { content, openDemo } = useContent();
  const { slides } = content.hero;
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = useCallback(() => setCurrent(p => (p + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent(p => (p - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-[65vh] overflow-hidden border-b border-white/5 group/hero bg-[#1C1C1E]">
      {slides.map((slide, idx) => (
        <div key={idx} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
          <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to right, ${slide.accent}33, #1C1C1Eee, #1C1C1E)` }} />
          <img src={slide.bg} alt="" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" loading="lazy" />
          <div className="absolute inset-0 z-20 flex items-center px-6 md:px-24 max-w-7xl mx-auto">
            <div className="max-w-4xl text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border mb-6"
                style={{ backgroundColor: `${slide.accent}1A`, borderColor: `${slide.accent}4D` }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: slide.accent }} />
                <span className="text-[10px] font-tech font-bold uppercase tracking-widest" style={{ color: slide.accent }}>{slide.tag}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">{slide.subtitle}</h1>
              <p className="text-base md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">{slide.description}</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button onClick={() => navigate(slide.path)}
                  className="w-full sm:w-auto px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 text-white shadow-2xl"
                  style={{ backgroundColor: slide.accent, boxShadow: `0 10px 30px ${slide.accent}33` }}>
                  {slide.btnText}
                </button>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1.5 opacity-80">
                    <span className="w-2 h-2 bg-[#f25022] rounded-sm" /><span className="w-2 h-2 bg-[#7fba00] rounded-sm" />
                    <span className="w-2 h-2 bg-[#00a4ef] rounded-sm" /><span className="w-2 h-2 bg-[#ffb900] rounded-sm" />
                  </div>
                  <span className="text-[10px] font-tech text-gray-500 uppercase tracking-widest font-bold">Microsoft Official Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full glass border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all opacity-0 group-hover/hero:opacity-100">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full glass border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all opacity-0 group-hover/hero:opacity-100">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3 items-center">
        {slides.map((slide, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} className="group py-2 px-1">
            <div className={`h-1.5 transition-all duration-500 rounded-full ${idx === current ? 'w-16' : 'w-4 bg-white/10 group-hover:bg-white/30'}`}
              style={{ backgroundColor: idx === current ? slide.accent : undefined }} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
