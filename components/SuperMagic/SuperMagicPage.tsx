
import React, { useState } from 'react';
import SuperMagicHero from './SuperMagicHero';
import Features from '../Home/Features';
import CaseStudies from '../Home/CaseStudies';
import FeatureMatrix from '../Home/FeatureMatrix';

interface SuperMagicPageProps {
  onConsult: () => void;
  onBookDemo: () => void;
}

const SuperMagicPage: React.FC<SuperMagicPageProps> = ({ onConsult, onBookDemo }) => {
  const [activeModule, setActiveModule] = useState<'software' | 'hardware'>('software');

  return (
    <div className="animate-in fade-in duration-700">
      {/* 还原 Super Magic 专有的头部设计 */}
      <SuperMagicHero onBookDemo={onBookDemo} />
      
      {/* Module Switcher */}
      <div className="bg-[#0B0E14] pt-16 md:pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md max-w-full overflow-hidden">
            <button 
              onClick={() => setActiveModule('software')}
              className={`px-6 md:px-10 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${activeModule === 'software' ? 'bg-[#2D7FF9] text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-white'}`}
            >
              软件服务 (SaaS)
            </button>
            <button 
              onClick={() => setActiveModule('hardware')}
              className={`px-6 md:px-10 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${activeModule === 'hardware' ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20' : 'text-gray-400 hover:text-white'}`}
            >
              AI 智能硬件 (Device)
            </button>
          </div>
        </div>
      </div>

      <Features activeModule={activeModule} />
      <CaseStudies activeModule={activeModule} />
      <FeatureMatrix onConsult={onConsult} />
      
      {/* Dedicated CTA for Super Magic */}
      <section className="py-24 bg-[#0B0E14] flex flex-col items-center text-center px-4">
         <div className="max-w-4xl glass p-12 md:p-20 rounded-[3rem] border border-[#2D7FF9]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D7FF9]/10 to-transparent pointer-events-none" />
            <h3 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">准备好开启指挥官视角了吗？</h3>
            <p className="text-gray-400 text-lg md:text-xl mb-12 relative z-10">
              预约产品专家进行 1对1 深度演示，看 Super Magic 如何重塑您的业务流程。
            </p>
            <button 
              onClick={onBookDemo}
              className="relative z-10 bg-[#2D7FF9] hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95"
            >
              预约 45 分钟深度演示会议
            </button>
         </div>
      </section>
    </div>
  );
};

export default SuperMagicPage;
