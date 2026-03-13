import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../ContentContext';
import Hero from './Hero';

const Home: React.FC = () => {
  const { content, openDemo } = useContent();
  const { whyUs, scenarios, cases, stats } = content;
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in bg-[#1C1C1E]">
      <Hero />

      {/* Stats Bar */}
      <div className="border-b border-white/5 bg-[#2C2C2E]/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-2xl font-bold text-white">{s.value}<span className="text-sm text-gray-500 ml-0.5">{s.unit}</span></div>
                <div className="text-xs text-gray-500 font-tech uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Us */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-tech text-xs tracking-[0.3em] uppercase mb-4 font-bold text-[#1AABDF]">Why FengFan</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">为什么选择锋范科技</h3>
          <p className="text-gray-500 text-lg max-w-2xl font-light leading-relaxed">深耕企业数字化转型，以微软云为核心构建多云架构体系</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 hover:border-[#1AABDF]/30 transition-all duration-500 group bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#1AABDF] transition-colors">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scenarios Matrix */}
      <section className="py-20 md:py-32 bg-[#2C2C2E]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="font-tech text-xs tracking-[0.3em] uppercase font-bold text-emerald-400">Solution Matrix</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">混合云场景化解决方案</h3>
            <p className="text-gray-500 text-lg max-w-2xl font-light">针对国际云在境内合规、边缘覆盖及国产化适配不足，整合异构云平台提供端到端补强</p>
          </div>
          <div className="space-y-4">
            {scenarios.map((item, i) => (
              <div key={item.id} className="glass border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex items-start space-x-4">
                    <span className="font-tech text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity" style={{ color: item.accent }}>{item.no}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.platforms.map(p => (
                          <span key={p} className="px-2 py-0.5 rounded text-[10px] font-tech font-bold bg-white/5 text-gray-400">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 grid md:grid-cols-2 gap-4">
                    <div className="border border-red-500/20 rounded-xl p-4 bg-red-500/5">
                      <div className="text-[10px] font-tech text-red-400 uppercase tracking-widest mb-2 font-bold">Pain Point</div>
                      <p className="text-sm text-gray-300">"{item.problem}"</p>
                    </div>
                    <div className="border border-emerald-500/20 rounded-xl p-4 bg-emerald-500/5">
                      <div className="text-[10px] font-tech text-emerald-400 uppercase tracking-widest mb-2 font-bold">Solution</div>
                      <p className="text-sm text-gray-300">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-tech text-xs tracking-[0.3em] uppercase mb-4 font-bold text-[#1AABDF]">Trust Proof 2.0</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">行业提效实录</h3>
          <p className="text-gray-500 text-lg max-w-2xl font-light">真实客户，真实数据，确定性产出的数字化闭环</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div key={item.id} className="bg-[#3A3A3C] rounded-[2rem] p-8 border border-white/5 hover:border-white/10 transition-all duration-500 group cursor-pointer flex flex-col"
              onClick={() => navigate(`/case/${item.id}`)}>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-[10px] font-tech font-bold bg-white/5 text-gray-400 uppercase">{item.industry}</span>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="font-tech text-[10px] tracking-widest font-bold uppercase mb-2" style={{ color: item.accent }}>{item.product}</div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#1AABDF] transition-colors">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light flex-grow">{item.description}</p>
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-sm font-bold" style={{ color: item.accent }}>{item.metric}</span>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center glass border border-white/10 rounded-[3rem] p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1AABDF]/10 via-transparent to-[#72D5FA]/10 pointer-events-none rounded-[3rem]" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">开启数字化转型</h2>
          <p className="text-gray-400 text-lg mb-10 font-light relative z-10">专家顾问 24h 内快速响应，为您定制数字化增长基座</p>
          <button onClick={openDemo}
            className="px-12 py-5 rounded-full font-bold text-white text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/30 relative z-10"
            style={{ background: 'linear-gradient(135deg, #1AABDF, #72D5FA)' }}>
            立即免费咨询
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
