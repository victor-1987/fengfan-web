
import React, { useState } from 'react';
import Hero from './Hero';
import Features from './Features';
import CaseStudies from './CaseStudies';
import FeatureMatrix from './FeatureMatrix';

interface HomeProps {
  onConsult: () => void;
  onBookDemo: () => void;
}

const Home: React.FC<HomeProps> = ({ onConsult, onBookDemo }) => {
  const [activeModule, setActiveModule] = useState<'software' | 'hardware'>('software');

  return (
    <div className="animate-in fade-in duration-700">
      <Hero onBookDemo={onBookDemo} />
      
      {/* Super Magic Module Switcher */}
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
    </div>
  );
};

export default Home;
