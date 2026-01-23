
import React from 'react';
import { useContent } from '../../ContentContext';

interface SuperMagicHeroProps {
  onBookDemo: () => void;
}

const SuperMagicHero: React.FC<SuperMagicHeroProps> = ({ onBookDemo }) => {
  const { t } = useContent();

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#0B0E14]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1600" 
          className="w-full h-full object-cover opacity-20 scale-105" 
          alt="Super Magic Core" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0E14]/60 to-[#0B0E14]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2D7FF9]/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#2D7FF9]/10 border border-[#2D7FF9]/30 mb-8 animate-in slide-in-from-top-4 duration-1000 shadow-[0_0_20px_rgba(45,127,249,0.1)]">
           <span className="text-xl">💎</span>
           <span className="text-[11px] font-tech font-bold text-[#2D7FF9] tracking-[0.3em] uppercase">{t.supermagic.heroTag}</span>
        </div>
        
        <h1 className="text-4xl md:text-8xl font-bold mb-8 leading-[1.1] font-tech tracking-tight text-white">
          {t.supermagic.heroTitle.split('<br />').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i === 0 && <br />}
            </React.Fragment>
          ))}
          <span className="gradient-text">Super Magic</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {t.supermagic.heroSubtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onBookDemo}
            className="w-full sm:w-auto bg-[#2D7FF9] hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20 active:scale-95"
          >
            {t.common.bookDemo}
          </button>
          <div className="flex items-center space-x-2 text-gray-500 font-tech text-xs tracking-widest uppercase">
            <span className="w-8 h-px bg-white/10" />
            <span>AGENTIC WORKFLOW 2.0</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperMagicHero;
