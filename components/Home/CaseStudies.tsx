
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
    <section className="py-24 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="font-tech tracking-widest mb-4 uppercase" style={{ color: themeColor }}>Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              {activeModule === 'software' ? '软件赋能实录' : '硬件采集案例'}
            </h3>
            <p className="text-gray-400 mt-2 max-w-xl">
              {activeModule === 'software' 
                ? '见证 Super Magic 深入业务核心逻辑后带来的确定性增长与生产力跨越' 
                : '通过 Super Magic Note 实现企业前端数据的无缝采集、营销转化与个人记事沉淀'}
            </p>
          </div>
          <button 
            onClick={() => navigate('/systems')}
            className="group flex items-center space-x-2 font-bold hover:underline py-2 transition-all"
            style={{ color: themeColor }}
          >
            <span>查看更多行业案例</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="glass rounded-[3.5rem] p-6 md:p-12 border border-white/5">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar list */}
            <div className="lg:w-2/5 flex flex-col space-y-3">
              {cases.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center space-x-5 p-5 rounded-2xl text-left transition-all relative overflow-hidden ${
                    activeIdx === idx ? 'text-white shadow-xl' : 'bg-white/5 hover:bg-white/10'
                  }`}
                  style={{ backgroundColor: activeIdx === idx ? themeColor : undefined }}
                >
                  <img src={item.logo} alt={item.company} className="w-12 h-12 bg-white rounded-xl p-1 shrink-0" />
                  <div className="flex-grow overflow-hidden">
                    <h4 className="font-bold text-lg truncate">{item.company}</h4>
                    <p className={`text-xs font-tech uppercase ${activeIdx === idx ? 'text-white/70' : 'text-gray-500'}`}>{item.stats}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:w-3/5">
              <div className="space-y-8 animate-in fade-in slide-in-from-right-10 duration-500" key={`${activeModule}-${activeIdx}`}>
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-video bg-black shadow-2xl border border-white/10 group">
                  <img 
                    src={cases[activeIdx].videoThumb} 
                    alt="Case demo" 
                    className="w-full h-full object-cover opacity-60 transition duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition group"
                      style={{ backgroundColor: themeColor }}
                    >
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-10" />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-3xl font-bold">{cases[activeIdx].company} - 数字化集成实录</h4>
                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    {cases[activeIdx].description}
                  </p>
                  
                  <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                    <div className="font-bold text-xl" style={{ color: themeColor }}>{cases[activeIdx].stats}</div>
                    <span className="h-6 w-px bg-white/10" />
                    <div className="text-sm text-gray-400 font-tech">Deployment: {activeModule.toUpperCase()}</div>
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
