
import React from 'react';

// 1. 通用区段标题
export const SectionHeader: React.FC<{
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  themeColor?: string;
}> = ({ tag, title, description, centered = false, themeColor = "#2D7FF9" }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {tag && (
      <h2 className="font-tech text-xs tracking-[0.3em] uppercase mb-4 font-bold" style={{ color: themeColor }}>
        {tag}
      </h2>
    )}
    <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{title}</h3>
    {description && <p className="text-gray-500 text-lg max-w-2xl font-light leading-relaxed mx-auto">{description}</p>}
  </div>
);

// 2. 通用 Solution Hero (微软风格)
export const SolutionHero: React.FC<{
  title: React.ReactNode;
  subtitle: string;
  tagline: string;
  icon?: string;
  gradientFrom?: string;
  onAction: () => void;
}> = ({ title, subtitle, tagline, icon, gradientFrom = "#0078d4", onAction }) => (
  <section className="relative pt-32 pb-24 px-4 overflow-hidden">
    <div className={`absolute top-0 right-0 w-[800px] h-[800px] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-20`} style={{ backgroundColor: gradientFrom }} />
    <div className="max-w-7xl mx-auto relative z-10 text-center">
      <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
        {icon && <img src={icon} className="w-5 h-5" alt="Icon" />}
        <span className="text-[10px] font-tech font-bold tracking-[0.2em] uppercase text-gray-400">{tagline}</span>
      </div>
      <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">{title}</h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">{subtitle}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button onClick={onAction} className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-2xl">立即开启专家访谈</button>
      </div>
    </div>
  </section>
);

// 3. 通用玻璃卡片容器
export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}> = ({ children, className = "", hoverEffect = true }) => (
  <div className={`glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent transition-all duration-500 ${hoverEffect ? 'hover:border-[#2D7FF9]/40 group' : ''} ${className}`}>
    {children}
  </div>
);
