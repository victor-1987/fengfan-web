
import React from 'react';
import { HARDWARE } from '../../constants';

const SystemIntegration: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-[#0B0E14]">
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[#2D7FF9] font-tech tracking-[0.3em] mb-4 text-sm font-bold uppercase">Hardware & Integration</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-tech">智慧工厂：一体化硬件方案</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            针对工业 4.0 场景，提供从边缘计算、终端显示到核心服务器的全栈硬件集成。为企业构建稳如磐石的数字化生产底座。
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-10 flex items-center">
          <span className="w-2 h-8 bg-[#2D7FF9] mr-4"></span>
          核心硬件产品规格
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HARDWARE.map(item => (
            <div key={item.id} className="glass bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden group hover:border-[#2D7FF9]/40 transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] to-transparent z-10 opacity-60" />
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" />
                <div className="absolute top-4 left-4 z-20">
                   <span className="text-[8px] font-tech text-white/50 border border-white/20 px-2 py-0.5 rounded-full uppercase tracking-widest">Industrial Grade</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#2D7FF9] transition-colors">{item.name}</h3>
                <p className="text-gray-500 text-xs mb-6 leading-relaxed h-12 overflow-hidden">{item.spec}</p>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-white/5 hover:bg-white/10 text-white/70 py-2.5 rounded-xl text-[10px] font-bold transition border border-white/5">
                    技术白皮书
                  </button>
                  <button className="bg-[#2D7FF9] p-2.5 rounded-xl hover:bg-blue-600 transition shadow-lg shadow-blue-500/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Scenario Section */}
        <div className="mt-32 p-1 relative rounded-[3rem] md:rounded-[5rem] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D7FF9]/20 via-transparent to-violet-600/20" />
          <div className="bg-[#0F1219] rounded-[2.9rem] md:rounded-[4.9rem] p-8 md:p-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-8">
                <div className="text-[#2D7FF9] font-tech text-sm tracking-widest font-bold">CASE STUDY: SMART CAMPUS</div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">工厂园区全栈集成案例</h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  锋范科技已成功为国内 100+ 智能工厂提供了 OEM 一体化集成方案，
                  通过“工控主机 + 视觉 Agent”的边缘闭环，实现了从环境监控、设备预测性维护到人员安全合规的 24 小时无人值守式管理。
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="glass bg-white/5 px-6 py-4 rounded-2xl border border-white/5">
                    <div className="text-2xl font-tech font-bold text-[#2D7FF9]">99.9%</div>
                    <div className="text-[10px] text-gray-500 uppercase mt-1">系统稳定性</div>
                  </div>
                  <div className="glass bg-white/5 px-6 py-4 rounded-2xl border border-white/5">
                    <div className="text-2xl font-tech font-bold text-[#2D7FF9]">30%</div>
                    <div className="text-[10px] text-gray-500 uppercase mt-1">能效提升</div>
                  </div>
                </div>
                <button className="group flex items-center space-x-3 bg-white/5 border border-[#2D7FF9]/30 text-white px-8 py-4 rounded-full font-bold hover:bg-[#2D7FF9] transition-all">
                  <span>申请实地考察演示</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
              <div className="flex-1 relative">
                <div className="absolute -inset-4 bg-[#2D7FF9]/10 blur-3xl rounded-full" />
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Factory" className="relative rounded-3xl shadow-2xl border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemIntegration;
