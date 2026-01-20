
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CASES } from '../../constants';

const CaseStudies: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-[#2D7FF9] font-tech tracking-widest mb-4 uppercase">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-bold">行业案例实录</h3>
            <p className="text-gray-400 mt-2 max-w-xl">见证 Super Magic 深入业务核心逻辑后带来的确定性增长与生产力跨越</p>
          </div>
          <button 
            onClick={() => navigate('/systems')}
            className="group flex items-center space-x-2 text-[#2D7FF9] font-bold hover:underline py-2 transition-all"
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
              {CASES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center space-x-5 p-5 rounded-2xl text-left transition-all relative overflow-hidden ${
                    activeIdx === idx ? 'bg-[#2D7FF9] text-white' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <img src={item.logo} alt={item.company} className="w-12 h-12 bg-white rounded-xl p-1 shrink-0" />
                  <div className="flex-grow overflow-hidden">
                    <h4 className="font-bold text-lg truncate">{item.company}</h4>
                    <p className={`text-xs font-tech uppercase ${activeIdx === idx ? 'text-white/70' : 'text-[#2D7FF9]/70'}`}>{item.stats}</p>
                  </div>
                  {activeIdx === idx && (
                     <div className="w-1 h-8 bg-white/50 rounded-full absolute right-2 animate-pulse" />
                  )}
                </button>
              ))}
              
              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                 <button 
                  onClick={() => navigate('/systems')}
                  className="w-full py-4 rounded-xl border border-dashed border-white/20 text-gray-500 text-sm font-medium hover:border-[#2D7FF9] hover:text-[#2D7FF9] transition-colors"
                 >
                   + 点击加载更多客户实践
                 </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-3/5">
              <div className="space-y-8 animate-in fade-in slide-in-from-right-10 duration-500" key={activeIdx}>
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-video bg-black shadow-2xl border border-white/10 group">
                  <img 
                    src={CASES[activeIdx].videoThumb} 
                    alt="Case demo" 
                    className="w-full h-full object-cover opacity-60 transition duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-[#2D7FF9] rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition group">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-10" />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-tech text-[#2D7FF9] font-bold uppercase tracking-widest whitespace-nowrap">Integrated Detail</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-[#2D7FF9]/30 to-transparent"></span>
                  </div>
                  <h4 className="text-3xl font-bold">{CASES[activeIdx].company} - AI 架构集成实录</h4>
                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    {CASES[activeIdx].description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#2D7FF9]/20 transition-colors">
                      <div className="text-xs text-[#2D7FF9] mb-1 font-tech font-bold uppercase">Core Performance</div>
                      <div className="text-white font-bold text-lg">{CASES[activeIdx].stats}</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#2D7FF9]/20 transition-colors">
                      <div className="text-xs text-[#2D7FF9] mb-1 font-tech font-bold uppercase">Stack Integration</div>
                      <div className="text-white font-bold text-lg truncate">Agentic Workflow / Private DB</div>
                    </div>
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
