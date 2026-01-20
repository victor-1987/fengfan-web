
import React from 'react';
import { HARDWARE } from '../../constants';

const SystemIntegration: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-[#12161D]">
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-5xl font-bold mb-6 font-tech">硬件展厅 & 系统集成</h1>
          <p className="text-xl text-gray-400 max-w-2xl">提供从工控机定制到工厂园区智能一体化集成的一站式硬件解决方案。</p>
        </div>

        <h2 className="text-2xl font-bold mb-10 flex items-center">
          <span className="w-2 h-8 bg-[#2D7FF9] mr-4"></span>
          硬件规格一览
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HARDWARE.map(item => (
            <div key={item.id} className="bg-[#1A1F29] border border-white/5 rounded-2xl overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{item.spec}</p>
                <div className="flex space-x-4">
                  <button className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl text-sm font-bold transition">
                    规格书下载 (PDF)
                  </button>
                  <button className="bg-[#2D7FF9] p-3 rounded-xl hover:bg-blue-600 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">工厂园区集成案例</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                我们已经成功为国内 100+ 智能工厂提供了 OEM 一体化集成方案，
                涵盖环境监控、设备预测性维护及 AI 视觉识别边缘节点建设。
              </p>
              <button className="border-2 border-[#2D7FF9] text-[#2D7FF9] px-8 py-3 rounded-full font-bold hover:bg-[#2D7FF9] hover:text-white transition">
                查看全案
              </button>
            </div>
            <div className="flex-1">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Factory" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemIntegration;
