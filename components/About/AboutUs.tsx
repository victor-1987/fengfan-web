
import React from 'react';
import { HONORS } from '../../constants';
import { useContent } from '../../ContentContext';

const AboutUs: React.FC = () => {
  const { t } = useContent();

  // 安全检查：确保 t.about.offices 存在
  const officeMarkers = [
    { top: '78%', left: '68%', color: '#2D7FF9' },
    { top: '82%', left: '70%', color: '#a855f7' }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-[#0B0E14]">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2D7FF9]/10 border border-[#2D7FF9]/30 mb-8">
           <span className="w-2 h-2 bg-[#2D7FF9] rounded-full animate-pulse" />
           <span className="text-[10px] font-tech font-bold text-[#2D7FF9] tracking-widest uppercase">{t.about?.tag}</span>
        </div>
        <h1 className="text-4xl md:text-8xl font-bold mb-8 font-tech gradient-text tracking-tight leading-tight">
          {t.about?.title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
          {t.about?.subtitle}
        </p>
      </section>

      {/* Business Model Section */}
      <section className="py-20 bg-[#0F1219]/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="mb-16">
            <h2 className="font-tech tracking-[0.4em] text-[#2D7FF9] mb-4 uppercase text-xs font-bold">{t.about?.modelTag}</h2>
            <h3 className="text-3xl md:text-5xl font-bold italic font-tech text-white">“{t.about?.modelTitle}”</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about?.models?.map((item, i) => (
              <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 hover:border-[#2D7FF9]/30 transition-all group text-left">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-[#2D7FF9] transition-colors text-white">{item.t}</h4>
                <p className="text-gray-400 leading-relaxed font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {t.about?.stats?.map((stat, i) => (
            <div key={i} className="glass border border-white/5 p-8 rounded-[2.5rem] text-center flex flex-col items-center group hover:bg-white/5 transition-all">
              <div className="text-3xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-tech font-bold text-white mb-2">
                {stat.value}<span className="text-lg ml-1 text-[#2D7FF9]">{stat.unit}</span>
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20 text-left">
            <div className="flex-1">
              <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-sm font-bold">Industry Solutions</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.about?.industriesTitle}</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                {t.about?.industriesDesc}
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {t.about?.industries?.map((ind, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-[#2D7FF9]/40 transition-all">
                  <div className="text-3xl mb-3">{ind.icon}</div>
                  <h4 className="font-bold text-white mb-2">{ind.name}</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-xs font-bold">China Network</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">{t.about?.officesTitle}</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-[2.5] glass border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-4 md:p-12 overflow-hidden relative group min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-black/20">
            <div className="relative w-full h-full max-w-[700px] max-h-[500px]">
              {officeMarkers.map((marker, i) => (
                <div key={i} className="absolute transition-all duration-500" style={{ top: marker.top, left: marker.left }}>
                  <div className="relative group/marker">
                    <div className="w-3 md:w-5 h-3 md:h-5 rounded-full animate-ping absolute inset-0" style={{ backgroundColor: marker.color }} />
                    <div className="w-3 md:w-5 h-3 md:h-5 rounded-full relative z-10 border-2 border-white shadow-2xl" style={{ backgroundColor: marker.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6 text-left">
            {t.about?.offices?.map((office, i) => (
              <div key={office.id} className="glass border border-white/5 rounded-[2.5rem] p-8 hover:border-white/20 transition-all group relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="flex items-center space-x-3 mb-4 relative z-10">
                  <div className="w-1.5 h-5 rounded-full" style={{ backgroundColor: officeMarkers[i]?.color || '#2D7FF9' }} />
                  <span className="font-tech text-[9px] tracking-[0.2em] text-gray-500 font-bold uppercase">{office.type}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#2D7FF9] transition-all relative z-10">{office.name}</h4>
                <div className="flex items-start space-x-3 relative z-10">
                  <span className="text-lg mt-0.5 shrink-0 opacity-40">🏢</span>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{office.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honor Section */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 border-t border-white/5 bg-[#0B0E14]">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-tech tracking-[0.3em] text-[#2D7FF9] mb-4 uppercase text-[10px] md:text-sm font-bold">Honor & Qualifications</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">{t.about?.honorTitle}</h3>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#2D7FF9] to-violet-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {HONORS.map((honor, i) => (
            <div key={i} className="relative group cursor-default">
              <div className="absolute -inset-1 bg-gradient-to-b from-[#2D7FF9]/20 to-transparent rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative glass border border-white/10 rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-[#2D7FF9]/40 transition-all duration-500 bg-gradient-to-br from-white/[0.03] to-transparent h-full">
                <div className="w-16 h-20 bg-white/5 rounded-xl flex items-center justify-center text-3xl border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-2xl mb-5">
                  {honor.icon}
                </div>
                <div className="w-full">
                  <div className="text-[#2D7FF9] font-tech text-[8px] tracking-[0.2em] mb-1 font-bold uppercase">CERTIFICATE</div>
                  <h4 className="text-xs md:text-sm font-bold mb-2 text-white group-hover:text-[#2D7FF9] transition-colors leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {honor.title}
                  </h4>
                  <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-[8px] text-gray-500 font-tech">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="relative rounded-[5rem] overflow-hidden bg-white/5 border border-white/5 p-1">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D7FF9]/10 via-transparent to-violet-600/10" />
          <div className="w-full h-full bg-[#0B0E14] rounded-[4.9rem] flex flex-col items-center justify-center p-12 md:p-24 text-center relative z-10">
            <h2 className="text-2xl md:text-5xl font-bold mb-8 font-tech text-white leading-tight">{t.about?.ctaTitle}</h2>
            <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto font-light">
              {t.about?.ctaDesc}
            </p>
            <button className="bg-[#2D7FF9] hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
              {t.common?.consultNow}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
