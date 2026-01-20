
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CLOUD_SERVICES, SYSTEM_ITEMS } from '../../constants';

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-[#2D7FF9] rounded-lg flex items-center justify-center font-tech font-bold text-white transition-transform group-hover:rotate-12 shadow-[0_0_15px_rgba(45,127,249,0.5)]">F</div>
          <span className="text-xl font-bold font-tech tracking-wider">锋范科技</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {/* Enhanced Super Magic Link with Lying Fox */}
          <div className="relative group/sm">
            {/* The Lying Fox Mascot Icon - Positioned to look like it's resting on the edge */}
            <div className="absolute -top-[18px] left-4 text-2xl animate-fox-lie select-none pointer-events-none z-10 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
              🦊
            </div>
            
            <Link 
              to="/" 
              className={`relative block px-6 py-2 rounded-full transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-[#2D7FF9]/10 border border-[#2D7FF9]/40' 
                  : 'hover:bg-white/5 border border-transparent hover:border-white/10'
              }`}
            >
              <span className={`text-sm font-bold font-tech tracking-[0.2em] uppercase transition-all ${
                isActive('/') ? 'gradient-text scale-105' : 'text-[#2D7FF9] group-hover/sm:brightness-125'
              }`}>
                Super Magic
              </span>
              
              {/* Subtle glow effect for Super Magic */}
              <div className="absolute inset-0 bg-[#2D7FF9] blur-xl opacity-0 group-hover/sm:opacity-20 transition-opacity rounded-full" />
            </Link>
          </div>
          
          {/* Cloud Services Mega Menu */}
          <div 
            className="relative group py-4"
            onMouseEnter={() => setActiveMenu('cloud')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`flex items-center space-x-1 text-sm font-medium hover:text-[#2D7FF9] transition ${activeMenu === 'cloud' ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>
              <span>全云服务</span>
              <svg className={`w-4 h-4 transform transition-transform ${activeMenu === 'cloud' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeMenu === 'cloud' && (
              <div className="absolute top-full -left-48 w-[640px] glass-dropdown rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 border border-white/10 z-[110]">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-[10px] font-bold text-[#2D7FF9] mb-4 uppercase tracking-[0.2em]">公有云 Public Cloud</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {CLOUD_SERVICES.filter(s => s.category === 'public').map(s => (
                        <Link key={s.id} to={`/cloud/${s.id}`} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition group">
                          <img src={s.icon} alt={s.name} className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" />
                          <div className="flex flex-col text-left">
                             <span className="text-sm font-bold text-white">{s.name}</span>
                             <span className="text-[10px] text-gray-400">{s.description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-[#2D7FF9] mb-4 uppercase tracking-[0.2em]">云办公 & 生产力 Software</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {CLOUD_SERVICES.filter(s => s.category === 'software').map(s => (
                        <Link key={s.id} to={`/cloud/${s.id}`} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition group">
                          <img src={s.icon} alt={s.name} className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" />
                          <div className="flex flex-col text-left">
                             <span className="text-sm font-bold text-white">{s.name}</span>
                             <span className="text-[10px] text-gray-400">{s.description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* System Integration Mega Menu */}
          <div 
            className="relative group py-4"
            onMouseEnter={() => setActiveMenu('systems')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`flex items-center space-x-1 text-sm font-medium hover:text-[#2D7FF9] transition ${activeMenu === 'systems' ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>
              <span>系统集成</span>
              <svg className={`w-4 h-4 transform transition-transform ${activeMenu === 'systems' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeMenu === 'systems' && (
              <div className="absolute top-full -left-24 w-[480px] glass-dropdown rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 border border-white/10 z-[110]">
                <div className="grid grid-cols-1 gap-6 text-left">
                  <div>
                    <h3 className="text-[10px] font-bold text-[#2D7FF9] mb-4 uppercase tracking-[0.2em]">硬件 & 行业集成 Integration</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {SYSTEM_ITEMS.map(item => (
                        <Link key={item.id} to="/systems" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition group">
                          <img src={item.icon} alt={item.name} className="w-10 h-10 transition-transform group-hover:scale-110" />
                          <div className="text-left">
                            <span className="text-sm block font-bold text-white group-hover:text-[#2D7FF9] transition-colors">{item.name}</span>
                            <span className="text-[10px] text-gray-400 leading-tight">{item.description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                   <Link to="/systems" className="block text-center text-[10px] font-bold tracking-widest text-[#2D7FF9] hover:underline uppercase">进入硬件展厅 & 案例库 →</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className={`text-sm font-medium hover:text-[#2D7FF9] transition ${isActive('/about') ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>关于我们</Link>
          <Link to="/contact" className={`text-sm font-medium hover:text-[#2D7FF9] transition ${isActive('/contact') ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>联系我们</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-[10px] font-bold tracking-widest text-gray-400 hover:text-[#2D7FF9] transition border border-white/10 px-3 py-1 rounded-full">中 / EN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
