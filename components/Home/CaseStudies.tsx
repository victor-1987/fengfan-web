
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SOFTWARE_CASES, HARDWARE_CASES } from '../../constants';

interface CaseStudiesProps {
  activeModule?: 'software' | 'hardware';
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ activeModule = 'software' }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const navigate = useNavigate();
  const cases = activeModule === 'software' ? SOFTWARE_CASES : HARDWARE_CASES;
  const themeColor = activeModule === 'software' ? '#2D7FF9' : '#a855f7';

  useEffect(() => {
    setActiveIdx(0);
  }, [activeModule]);

  return (
    <section className="py-16 md:py-24 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="text-left">
            <h2 className="font-tech text-xs md:text-base tracking-widest mb-2 md:mb-4 uppercase" style={{ color: themeColor }}>Trust Proof 2.0</h2>
            <h3 className="text-3xl md:text-5xl font-bold">
              {activeModule === 'software' ? '行业提效实录' : '硬件采集案例'}
            </h3>
            <p className="text-gray-400 mt-2 max-w-xl text-sm md:text-base">
              {activeModule === 'software' 
                ? '不谈虚词，只看数据。见证 Super Magic 深度融入业务核心后的确定性产出。' 
                : '通过 Super Magic Note 实现前端数据的精准捕捉与数字化闭环。'}
            </p>
          </div>
          <button 
            onClick={() => navigate('/systems')}
            className="group flex items-center space-x-2 font-bold hover:underline py-2 transition-all text-sm"
            style={{ color: themeColor }}
          >
            <span>查看 100+ 行业全案</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="glass rounded-[2.5rem] md:rounded-[3.5rem] p-4 md:p-12 border border-white/5 relative overflow-hidden">
          {/* Background Decorative Data Lines */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 100 100"><path d="M0 80 Q 25 10, 50 50 T 100 20" fill="none" stroke={themeColor} strokeWidth="0.5" /></svg>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 relative z-10">
            {/* Sidebar list */}
            <div className="lg:w-2/5 flex flex-row lg:flex-col space-x-3 lg:space-x-0 lg:space-y-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide">
              {cases.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center space-x-4 md:space-x-5 p-4 md:p-5 rounded-2xl text-left transition-all relative overflow-hidden shrink-0 w-[240px] lg:w-full border ${
                    activeIdx === idx ? 'text-white border-transparent' : 'bg-white/5 border-white/5 hover:border-white/10'
                  }`}
                  style={{ backgroundColor: activeIdx === idx ? themeColor : undefined }}
                >
                  <img src={item.logo} alt={item.company} className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl p-1 shrink-0" />
                  <div className="flex-grow overflow-hidden">
                    <h4 className="font-bold text-sm md:text-lg truncate">{item.company}</h4>
                    <div className="flex items-center space-x-2">
                       <span className={`text-[10px] font-tech uppercase ${activeIdx === idx ? 'text-white/70' : 'text-emerald-500'}`}>
                         {activeIdx === idx ? 'Selected' : 'Case Verified'}
                       </span>
                    </div>
                  </div>
                  {activeIdx === idx && (
                    <div className="absolute top-2 right-2 opacity-20">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:w-3/5">
              <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-10 duration-500" key={`${activeModule}-${activeIdx}`}>
                {/* Metrics Dashboard Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   <div className="glass bg-white/5 p-4 rounded-2xl border border-white/10">
                      <div className="text-[10px] text-gray-500 font-tech uppercase mb-1">Impact Score</div>
                      <div className="text-2xl font-bold font-tech" style={{ color: themeColor }}>{cases[activeIdx].stats}</div>
                   </div>
                   <div className="glass bg-white/5 p-4 rounded-2xl border border-white/10">
                      <div className="text-[10px] text-gray-500 font-tech uppercase mb-1">ROI Period</div>
                      <div className="text-2xl font-bold font-tech text-white">3-6 Mo.</div>
                   </div>
                   <div className="hidden md:block glass bg-white/5 p-4 rounded-2xl border border-white/10">
                      <div className="text-[10px] text-gray-500 font-tech uppercase mb-1">Verification</div>
                      <div className="text-lg font-bold text-emerald-400 flex items-center">
                        <span className="mr-2">Verified</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 11.37c1.13.932 2.72 1.225 4.308 1.133 1.965-.112 3.73-.93 5.21-2.102a4.803 4.803 0 01-1.493-3.615c0-2.656 2.16-4.815 4.816-4.815 2.656 0 4.815 2.16 4.815 4.815 0 2.656-2.159 4.816-4.815 4.816-.363 0-.712-.04-1.046-.115-1.548 1.564-3.51 2.617-5.639 3.012a13.12 13.12 0 01-5.69.051c-1.562-.324-3.38-1.556-4.33-3.078.23.01.46.017.69.017.65 0 1.284-.045 1.902-.132z" clipRule="evenodd" /></svg>
                      </div>
                   </div>
                </div>

                <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden aspect-video bg-black shadow-2xl border border-white/10 group">
                  <img 
                    src={cases[activeIdx].videoThumb} 
                    alt="Case demo" 
                    className="w-full h-full object-cover opacity-60 transition duration-[2s] group-hover:scale-110"
                  />
                  
                  {/* Visual Efficiency Gauge (Overlay) */}
                  <div className="absolute top-4 left-4 md:top-8 md:left-8 glass border border-white/20 p-4 rounded-2xl animate-pulse">
                     <div className="text-[8px] md:text-[10px] font-tech text-gray-400 mb-2">PRODUCTION OUTPUT GAP</div>
                     <div className="flex items-end space-x-1 h-12">
                        <div className="w-4 bg-gray-600 rounded-sm" style={{ height: '30%' }} />
                        <div className="w-4 rounded-sm" style={{ height: '100%', backgroundColor: themeColor }} />
                        <div className="text-xs font-bold ml-2">+300%</div>
                     </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition group"
                      style={{ backgroundColor: themeColor }}
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-10" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-px bg-white/20" />
                    <h4 className="text-xl md:text-3xl font-bold">{cases[activeIdx].company}</h4>
                  </div>
                  <p className="text-sm md:text-lg text-gray-400 leading-relaxed font-light">
                    {cases[activeIdx].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 items-center">
                    <button className="bg-white/5 hover:bg-white/10 px-6 py-2 rounded-full text-xs font-bold border border-white/5 transition-all">
                      查看集成细节
                    </button>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="text-xs font-bold underline transition-colors"
                      style={{ color: themeColor }}
                    >
                      申请同款方案演示 →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
