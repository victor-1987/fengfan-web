import React from 'react';
import { useContent } from '../../ContentContext';

const AboutUs: React.FC = () => {
  const { content } = useContent();
  const { site, honors, about, stats } = content;
  return (
    <div className="animate-fade-in bg-[#1C1C1E]">
      <section className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1AABDF]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1AABDF] animate-pulse" />
            <span className="text-[10px] font-tech font-bold tracking-[0.2em] uppercase text-gray-400">About Us · 关于锋范</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-[1.1] gradient-text">{site.name}</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6 font-light leading-relaxed">{site.slogan}</p>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">{site.description}</p>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="glass border border-white/5 rounded-2xl p-6 text-center hover:border-[#1AABDF]/30 transition-all group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{s.icon}</div>
              <div className="text-3xl font-bold text-white">{s.value}<span className="text-lg text-gray-500 ml-0.5">{s.unit}</span></div>
              <div className="text-xs text-gray-500 font-tech uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-[#2C2C2E]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-tech text-xs tracking-[0.3em] uppercase mb-4 font-bold text-[#1AABDF]">Business Model</h2>
            <h3 className="text-3xl md:text-5xl font-bold">业务模式</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.models.map((m, i) => (
              <div key={i} className="glass border border-white/5 rounded-[2rem] p-8 hover:border-[#1AABDF]/30 transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{m.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#1AABDF] transition-colors">{m.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-tech text-xs tracking-[0.3em] uppercase mb-4 font-bold text-[#1AABDF]">Industries</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">深耕行业</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {about.industries.map((ind, i) => (
            <div key={i} className="glass border border-white/5 rounded-xl p-4 text-center hover:border-[#1AABDF]/40 transition-all group">
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{ind}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-[#2C2C2E]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-tech text-xs tracking-[0.3em] uppercase mb-4 font-bold text-[#1AABDF]">Honors & Certificates</h2>
            <h3 className="text-3xl md:text-5xl font-bold">荣誉资质</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {honors.map((h, i) => (
              <div key={i} className="glass border border-white/5 rounded-2xl p-6 text-center hover:border-[#1AABDF]/30 transition-all group relative overflow-hidden">
                <div className="text-3xl mb-3">{h.icon}</div>
                <div className="text-xs font-medium text-gray-300 leading-tight mb-2">{h.title}</div>
                <div className="text-[9px] font-tech text-gray-600 uppercase">{h.year}</div>
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[8px] font-tech text-emerald-400 bg-emerald-400/10">VERIFIED</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="glass border border-white/5 rounded-[3rem] p-12 md:p-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8">联系我们</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#1AABDF]/10 border border-[#1AABDF]/20 rounded-xl flex items-center justify-center text-lg shrink-0">📍</div>
                <div><div className="text-xs font-tech text-gray-500 uppercase mb-1">总部地址</div><p className="text-sm text-gray-300">{site.address}</p></div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#1AABDF]/10 border border-[#1AABDF]/20 rounded-xl flex items-center justify-center text-lg shrink-0">🌐</div>
                <div><div className="text-xs font-tech text-gray-500 uppercase mb-1">香港分部</div><p className="text-sm text-gray-300">{site.addressHK}</p></div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#1AABDF]/10 border border-[#1AABDF]/20 rounded-xl flex items-center justify-center text-lg shrink-0">📧</div>
                <div><div className="text-xs font-tech text-gray-500 uppercase mb-1">商务邮箱</div><a href={`mailto:${site.email}`} className="text-sm text-[#1AABDF] hover:underline">{site.email}</a></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-white rounded-2xl mx-auto p-2 shadow-lg">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.fengfancloud.com" alt="QR" className="w-full h-full" />
              </div>
              <p className="text-xs text-gray-500">扫码关注微信公众号</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
