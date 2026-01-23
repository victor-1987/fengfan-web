
import React from 'react';

// 标准化页面容器
export const PageWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`animate-in fade-in duration-700 bg-[#0B0E14] ${className}`}>{children}</div>
);

// 标准化内容区段
export const ContentSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
  padding?: string;
}> = ({ children, className = "", maxWidth = "max-w-7xl", padding = "py-20 md:py-32" }) => (
  <section className={`${padding} ${maxWidth} mx-auto px-4 relative overflow-hidden ${className}`}>
    {children}
  </section>
);

// 抽象子页 Hero
export const SubPageHero: React.FC<{
  tagline: string;
  title: React.ReactNode;
  subtitle: string;
  icon?: string;
  accentColor?: string;
  onAction?: () => void;
}> = ({ tagline, title, subtitle, icon, accentColor = "#2D7FF9", onAction }) => (
  <section className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-white/5">
    <div 
      className="absolute top-0 right-0 w-[800px] h-[800px] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-20" 
      style={{ backgroundColor: accentColor }} 
    />
    <div className="max-w-7xl mx-auto relative z-10 text-center">
      <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
        {icon && <img src={icon} className="w-5 h-5" alt="" />}
        <span className="text-[10px] font-tech font-bold tracking-[0.2em] uppercase text-gray-400">{tagline}</span>
      </div>
      <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1] text-white">{title}</h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">{subtitle}</p>
      {onAction && (
        <button 
          onClick={onAction} 
          className="bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-2xl active:scale-95"
        >
          立即开启咨询
        </button>
      )}
    </div>
  </section>
);

// 抽象解决方案卡片
export const SolutionCard: React.FC<{
  item: any;
  index: number;
  onAction?: () => void;
}> = ({ item, index, onAction }) => (
  <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group transition-all duration-700 bg-gradient-to-br from-white/[0.02] to-transparent flex flex-col h-full">
    <div 
      className="absolute -top-20 -right-20 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" 
      style={{ backgroundColor: item.accent }} 
    />
    <div className="flex items-center justify-between mb-8 relative z-10">
      <div className="w-14 h-14 rounded-2xl p-3 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: `${item.accent}15` }}>
        <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
      </div>
      <div className="text-[9px] font-tech font-bold text-gray-700 uppercase tracking-widest">Pillar 0{index + 1}</div>
    </div>
    <div className="flex-grow relative z-10">
      <h4 className="font-tech text-[10px] tracking-widest font-bold uppercase mb-1" style={{ color: item.accent }}>{item.subtitle}</h4>
      <h5 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{item.title}</h5>
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 font-light">{item.description}</p>
    </div>
    {onAction && (
      <button onClick={onAction} className="flex items-center space-x-3 text-xs font-bold text-white/40 group-hover:text-white transition-colors relative z-10">
        <span className="border-b border-transparent group-hover:border-white/20 pb-1 font-tech uppercase tracking-widest text-[10px]">Learn More</span>
        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </button>
    )}
  </div>
);

// 抽象数据指标展示
export const MetricItem: React.FC<{
  label: string;
  value: string;
  desc?: string;
  color?: string;
}> = ({ label, value, desc, color = "#2D7FF9" }) => (
  <div className="space-y-3">
    <div className="text-[9px] font-tech font-bold uppercase tracking-widest opacity-50" style={{ color }}>{label}</div>
    <div className="text-3xl md:text-5xl font-bold font-tech text-white">{value}</div>
    {desc && <p className="text-xs text-gray-500 leading-relaxed font-light">{desc}</p>}
  </div>
);
