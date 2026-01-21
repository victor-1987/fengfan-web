
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
            <h2 className="font-tech text-xs md:text-base tracking-[0.4em] mb-2 md:mb-4 uppercase" style={{ color: themeColor }}>Trust Proof 2.0</h2>
            <h1 className="text-4xl md:text-6xl font-bold">
              {activeModule === 'software' ? '行业提效实录' : '硬件采集案例'}
            </h1>
            <p className="text-gray-400 mt-4 max-w-xl text-sm md:text-lg font-light">
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

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 relative">
          {/* Sidebar list: Upgraded to match screenshot */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col space-x-3 lg:space-x-0 lg:space-y-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide">
            {cases.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center space-x-4 md:space-x-5 p-6 rounded-[2rem] text-left transition-all relative overflow-hidden shrink-0 w-[280px] lg:w-full border ${
                  activeIdx === idx 
                    ? 'bg-[#2D7FF9] border-transparent shadow-[0_20px_40px_rgba(45,127,249,0.2)]' 
                    : 'bg-[#11151C] border-white/5 hover:border-white/10 hover:bg-white/5'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-2 shrink-0 ${activeIdx === idx ? 'bg-white' : 'bg-white/5'}`}>
                  <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                </div>
                <div className="flex-grow overflow-hidden">
                  <h4 className="font-bold text-base md:text-lg truncate text-white">{item.company}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                     <span className={`text-[10px] font-tech font-bold uppercase tracking-widest ${activeIdx === idx ? 'text-white/60' : 'text-emerald-500'}`}>
                       {activeIdx === idx ? 'Selected' : 'Case Verified'}
                     </span>
                  </div>
                </div>
                
                {/* Screenshot detail: Selection dot */}
                {activeIdx === idx && (
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_white]" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Content Area: Metrics & Video */}
          <div className="lg:w-2/3 space-y-8 animate-in fade-in slide-in-from-right-10 duration-700" key={`${activeModule}-${activeIdx}`}>
            {/* Metrics Dashboard: Polished Headers */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { label: 'Impact Score', val: cases[activeIdx].stats, color: themeColor },
                 { label: 'ROI Period', val: '3-6 Mo.', color: '#fff' },
                 { label: 'Verification', val: 'Verified 🖋️', color: '#10b981' }
               ].map((m, i) => (
                 <div key={i} className="glass bg-[#11151C]/60 p-6 rounded-[1.5rem] border border-white/5">
                    <div className="text-[9px] md:text-[10px] text-gray-500 font-tech font-bold uppercase tracking-[0.2em] mb-2">{m.label}</div>
                    <div className="text-xl md:text-2xl font-bold font-tech" style={{ color: m.color }}>{m.val}</div>
                 </div>
               ))}
            </div>

            {/* Video Container: High Fidelity Gauge */}
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-video bg-[#000] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 group">
              <img 
                src={cases[activeIdx].videoThumb} 
                alt="" 
                className="w-full h-full object-cover opacity-40 transition duration-[2.5s] group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bbda38656a73?auto=format&fit=crop&q=80&w=1200';
                }}
              />
              
              {/* Gauge UI Overlay */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
                <div className="glass backdrop-blur-2xl bg-white/5 border border-white/20 p-5 rounded-[1.5rem] shadow-2xl">
                   <div className="text-[8px] md:text-[10px] font-tech font-bold text-gray-400 mb-3 tracking-widest uppercase">Production Output Gap</div>
                   <div className="flex items-end space-x-2 h-16 md:h-20">
                      <div className="w-5 bg-white/10 rounded-md transition-all duration-1000" style={{ height: '25%' }} />
                      <div className="w-5 rounded-md transition-all duration-1000 relative group/bar" style={{ height: '90%', backgroundColor: themeColor }}>
                         <div className="absolute -top-1 left-0 right-0 h-1 bg-white/40 blur-[2px]" />
                      </div>
                      <div className="text-sm md:text-lg font-tech font-bold ml-3 text-white">+300%</div>
                   </div>
                </div>
              </div>

              {/* Play Button: Enhanced Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all group/play relative"
                  style={{ backgroundColor: themeColor }}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping group-hover:animate-none scale-125" />
                  <svg className="w-6 h-6 md:w-10 md:h-10 ml-1.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-110 group-hover:scale-125 transition-transform" />
                </button>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 md:p-12">
                 <div className="flex items-center space-x-4">
                    <div className="w-1 h-8 rounded-full" style={{ backgroundColor: themeColor }} />
                    <h3 className="text-2xl md:text-4xl font-bold text-white">{cases[activeIdx].company}</h3>
                 </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="glass p-8 rounded-[2rem] border border-white/5 bg-white/[0.02]">
               <p className="text-gray-400 text-base md:text-xl leading-relaxed font-light mb-8">
                 {cases[activeIdx].description}
               </p>
               <div className="flex flex-wrap gap-4">
                  <button className="bg-white/5 hover:bg-white/10 px-8 py-3 rounded-xl text-xs font-bold border border-white/10 transition-all hover:border-white/30">
                    查看完整集成全案
                  </button>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="px-8 py-3 rounded-xl text-xs font-bold transition-all border border-transparent hover:border-[#2D7FF9]/30"
                    style={{ color: themeColor }}
                  >
                    申请同款业务架构演示 →
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
