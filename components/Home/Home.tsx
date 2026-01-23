
import React from 'react';
import Hero from './Hero';
import { MICROSOFT_SCENARIOS, WHY_US_FEATURES, CLOUD_SCENARIO_SOLUTIONS, MICROSOFT_CASES } from '../../constants';
import { useContent } from '../../ContentContext';
import { PageWrapper, ContentSection, SolutionCard } from '../Shared/UIComponents';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { t, openDemo } = useContent();
  const navigate = useNavigate();

  // 1. 翻译微软核心支柱
  const translatedPillars = MICROSOFT_SCENARIOS.map((item, idx) => ({
    ...item,
    title: t.home.scenarios[idx]?.title || item.title,
    description: t.home.scenarios[idx]?.desc || item.description,
  }));

  // 2. 翻译“为什么选择我们”
  const translatedWhyUs = WHY_US_FEATURES.map((item, idx) => ({
    ...item,
    title: t.home.whyUs[idx]?.title || item.title,
    desc: t.home.whyUs[idx]?.desc || item.desc,
  }));

  // 3. 翻译混合云矩阵场景 - 补全所有 5 个场景
  const translatedMatrix = CLOUD_SCENARIO_SOLUTIONS.map((item, idx) => {
    const trans = t.home.matrixItems[idx];
    return {
      ...item,
      title: trans?.title || item.title,
      problem: trans?.problem || item.problem,
      value: trans?.values || item.value
    };
  });

  // 4. 翻译案例详情
  const translatedCases = MICROSOFT_CASES.map((item, idx) => {
    const trans = t.home.casesItems[idx];
    return {
      ...item,
      industry: trans?.industry || item.industry,
      title: trans?.title || item.title,
      description: trans?.desc || item.description,
      metric: trans?.metric || item.metric
    };
  });

  return (
    <PageWrapper>
      <Hero />

      {/* Strategy Section */}
      <ContentSection>
        <div className="text-center mb-24">
          <h2 className="text-blue-500 font-tech tracking-[0.4em] mb-4 text-xs md:text-sm font-bold uppercase">{t.home.strategyTag}</h2>
          <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white">{t.home.strategyTitle}</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light mb-16">{t.home.strategyDesc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {translatedWhyUs.map((item) => (
              <div key={item.id} className="glass p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-blue-500/30 transition-all duration-500 group text-left">
                <div className="w-12 h-12 bg-white/5 rounded-2xl p-2.5 mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Microsoft Pillars */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 border-b border-white/5 pb-8">
            <div className="w-full">
              <div className="flex items-center space-x-2 text-[#0078d4] font-tech text-xs mb-3 font-bold tracking-widest uppercase">
                <span className="w-8 h-px bg-[#0078d4]/40" />
                <span>Production-Grade Integration Solution</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white">{t.home.pillarTitle}</h3>
              <p className="text-gray-400 mt-4 font-light text-sm md:text-base">{t.home.pillarDesc}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {translatedPillars.map((item, idx) => (
              <SolutionCard key={item.id} item={item} index={idx} onAction={openDemo} />
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Cloud Matrix */}
      <ContentSection className="bg-[#0F1219]/30">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-tech font-bold text-emerald-500 tracking-widest uppercase">Solution Matrix</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">{t.home.matrixTitle}</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light">{t.home.matrixDesc}</p>
        </div>

        <div className="space-y-6">
          {translatedMatrix.map((scene) => (
            <div key={scene.id} className="glass group rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all duration-700 bg-gradient-to-r from-white/[0.02] to-transparent overflow-hidden">
              <div className="flex flex-col lg:flex-row min-h-[240px]">
                <div className="lg:w-1/3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 relative flex flex-col justify-between">
                  <div className="absolute -top-24 -left-24 w-64 h-64 blur-[100px] opacity-10 pointer-events-none" style={{ backgroundColor: scene.accent }} />
                  <div>
                    <div className="text-2xl font-tech font-bold text-white/5 mb-4 group-hover:text-white/10 tracking-tighter uppercase">Scene {scene.sceneNum}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-4 group-hover:text-blue-400 transition-colors">{scene.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    {scene.platforms.map((p, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 p-1.5 flex items-center justify-center hover:bg-white/10 transition-all"><img src={p.icon} alt="" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" /></div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-2/3 p-8 flex flex-col justify-between">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="text-[9px] font-tech text-gray-500 font-bold uppercase tracking-widest">Customer Focus</div>
                      <div className="p-4 bg-red-500/5 border-l-2 border-red-500/20 rounded-r-xl"><p className="text-xs text-gray-400 font-light italic leading-relaxed">“{scene.problem}”</p></div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-[9px] font-tech text-emerald-500 font-bold uppercase tracking-widest">Value Add</div>
                      <ul className="space-y-2">
                        {scene.value.map((v, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-gray-300"><svg className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg><span>{v}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="text-[8px] font-tech text-gray-700 font-bold uppercase tracking-[0.2em]">Validated Architecture</div>
                    <button onClick={openDemo} className="flex items-center space-x-2 text-[10px] font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-widest border-b border-transparent group-hover:border-blue-500 pb-0.5">{t.common.learnMoreArrow}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Success Cases Section */}
      <ContentSection>
        <div className="text-center mb-16">
           <h2 className="text-blue-500 font-tech tracking-[0.4em] mb-4 text-xs font-bold uppercase">Success Stories</h2>
           <h3 className="text-3xl md:text-5xl font-bold text-white">{t.home.casesTitle}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedCases.map((item) => (
            <div key={item.id} className="bg-[#11151C] p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-500 group relative flex flex-col h-full shadow-2xl">
              <div className="absolute -top-20 -right-20 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ backgroundColor: item.accent }} />
              <div className="flex items-center justify-between mb-10">
                <div className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] text-gray-400 font-tech font-bold uppercase tracking-widest">{item.industry}</div>
                <div className="w-10 h-10 bg-white/5 rounded-xl p-2 border border-white/5"><img src={item.icon} alt="" className="w-full h-full object-contain" /></div>
              </div>
              <div className="flex-grow space-y-4">
                <div className="font-tech text-[10px] font-bold tracking-[0.2em] uppercase opacity-50" style={{ color: item.accent }}>{item.product}</div>
                <h5 className="text-xl md:text-2xl font-bold text-white leading-tight">{item.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{item.description}</p>
              </div>
              <div className="mt-12 pt-8 border-t border-white/5 flex items-end justify-between">
                <div className="text-2xl font-bold font-tech tracking-tight" style={{ color: item.accent }}>{item.metric}</div>
                <button onClick={() => navigate(`/case/${item.id}`)} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#0078d4] group-hover:border-transparent transition-all shadow-lg"><svg className="w-5 h-5 text-gray-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></button>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageWrapper>
  );
};

export default Home;
