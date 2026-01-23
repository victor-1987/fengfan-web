
import React from 'react';
import SuperMagicHero from './SuperMagicHero';
import Features from '../Home/Features';
import CaseStudies from '../Home/CaseStudies';
import FeatureMatrix from '../Home/FeatureMatrix';
import { useContent } from '../../ContentContext';

interface SuperMagicPageProps {
  onBookDemo: () => void;
}

const SuperMagicPage: React.FC<SuperMagicPageProps> = ({ onBookDemo }) => {
  const { t } = useContent();

  return (
    <div className="animate-in fade-in duration-700">
      <SuperMagicHero onBookDemo={onBookDemo} />
      
      <div className="pt-16 md:pt-24">
        <Features activeModule="software" />
      </div>

      <CaseStudies activeModule="software" />
      <FeatureMatrix onBookDemo={onBookDemo} />
      
      <section className="py-24 bg-[#0B0E14] flex flex-col items-center text-center px-4">
         <div className="max-w-4xl glass p-12 md:p-20 rounded-[3rem] border border-[#2D7FF9]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D7FF9]/10 to-transparent pointer-events-none" />
            <h3 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 text-white">{t.supermagic.ctaTitle}</h3>
            <p className="text-gray-400 text-lg md:text-xl mb-12 relative z-10 font-light">
              {t.supermagic.ctaSubtitle}
            </p>
            <button 
              onClick={onBookDemo}
              className="relative z-10 bg-[#2D7FF9] hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95"
            >
              {t.common.bookDemo}
            </button>
         </div>
      </section>
    </div>
  );
};

export default SuperMagicPage;
