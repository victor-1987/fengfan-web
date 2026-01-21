
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CLOUD_SERVICES, SYSTEM_ITEMS } from '../../constants';

interface NavbarProps {
  onBookDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookDemo }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState({ code: 'CH', name: '简体中文' });
  const location = useLocation();
  const langRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const languages = [
    { code: 'CH', name: '简体中文' },
    { code: 'HK', name: '繁體中文' },
    { code: 'EN', name: 'English' }
  ];

  // 点击外部关闭语言下拉
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMobileMenu}>
            <div className="w-8 h-8 bg-[#2D7FF9] rounded-lg flex items-center justify-center font-tech font-bold text-white transition-transform group-hover:rotate-12 shadow-[0_0_15px_rgba(45,127,249,0.5)]">F</div>
            <span className="text-xl font-bold font-tech tracking-wider">锋范科技</span>
          </Link>

          {/* System Status */}
          <div className="hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[9px] font-tech font-bold text-emerald-500/80 uppercase tracking-widest">Platform Live</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className={`text-sm font-medium hover:text-[#2D7FF9] transition ${isActive('/') ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>首页</Link>
          
          <Link to="/supermagic" className={`text-sm font-medium hover:text-[#2D7FF9] transition ${isActive('/supermagic') ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>Super Magic</Link>
          
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
              <div className="absolute top-full -left-32 w-[540px] glass-dropdown rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 border border-white/10 z-[110]">
                <div className="grid grid-cols-1 gap-6 text-left">
                  <div>
                    <h3 className="text-[10px] font-bold text-[#2D7FF9] mb-4 uppercase tracking-[0.2em]">一体化集成方案 Integration</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {SYSTEM_ITEMS.map(item => (
                        <Link key={item.id} to="/systems" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition group border border-white/5">
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
                   <Link to="/systems" className="block text-center text-[10px] font-bold tracking-widest text-[#2D7FF9] hover:underline uppercase">进入集成展厅 & 案例库 →</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className={`text-sm font-medium hover:text-[#2D7FF9] transition ${isActive('/about') ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>关于我们</Link>
        </div>

        <div className="flex items-center space-x-6">
          <button 
            onClick={onBookDemo}
            className="hidden lg:flex relative overflow-hidden group/btn bg-gradient-to-r from-[#2D7FF9] to-[#6366f1] text-white px-8 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(45,127,249,0.3)] hover:shadow-[0_0_35px_rgba(45,127,249,0.6)] active:scale-95 border border-white/10"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center">
               <span className="mr-2">免费试用</span>
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </span>
          </button>
          
          {/* 精致的语言切换器：仅显示当前语言，支持下拉 */}
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="hidden sm:flex items-center space-x-2 text-gray-400 hover:text-white transition group px-3 py-1.5 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
            >
              <svg className={`w-5 h-5 transition-colors ${isLangOpen ? 'text-[#2D7FF9]' : 'text-gray-500 group-hover:text-[#2D7FF9]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="text-[12px] font-tech font-bold tracking-widest uppercase">{currentLang.code}</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180 text-[#2D7FF9]' : 'opacity-50 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* 语言选择下拉菜单 */}
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 glass-dropdown rounded-2xl py-2 shadow-2xl animate-in fade-in zoom-in-95 duration-200 border border-white/10 z-[110]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-5 py-2.5 text-xs font-bold transition-all flex items-center justify-between group/item ${
                      currentLang.code === lang.code ? 'text-[#2D7FF9] bg-[#2D7FF9]/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{lang.name}</span>
                    <span className="text-[9px] opacity-30 group-hover/item:opacity-60">{lang.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-[90] glass-dropdown animate-in slide-in-from-right duration-300 overflow-y-auto">
          <div className="p-6 space-y-8">
            <Link to="/" className="block" onClick={closeMobileMenu}>
              <div className="bg-[#2D7FF9]/10 p-4 rounded-2xl border border-[#2D7FF9]/20 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[#2D7FF9] uppercase tracking-widest mb-1">Product Hero</div>
                  <div className="text-xl font-bold font-tech text-white">Super Magic</div>
                </div>
                <span className="text-2xl">✨</span>
              </div>
            </Link>

            <div>
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">核心板块 Sections</h3>
              <div className="grid grid-cols-1 gap-3">
                <Link to="/" onClick={closeMobileMenu} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-bold">首页</span>
                  <span className="text-gray-500">→</span>
                </Link>
                <Link to="/supermagic" onClick={closeMobileMenu} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-bold">Super Magic</span>
                  <span className="text-gray-500">→</span>
                </Link>
                <Link to="/about" onClick={closeMobileMenu} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-bold">关于我们</span>
                  <span className="text-gray-500">→</span>
                </Link>
                <button 
                  onClick={() => { onBookDemo(); closeMobileMenu(); }}
                  className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#2D7FF9]/20 to-[#6366f1]/20 rounded-xl border border-[#2D7FF9]/30"
                >
                  <span className="font-bold text-[#2D7FF9]">免费试用</span>
                  <span className="text-[#2D7FF9]">→</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-col space-y-4">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">选择语言 Language</h3>
              <div className="grid grid-cols-3 gap-2">
                {languages.map(lang => (
                   <button 
                    key={lang.code}
                    onClick={() => { setCurrentLang(lang); closeMobileMenu(); }}
                    className={`px-3 py-3 rounded-xl border text-[10px] font-bold transition-all ${
                      currentLang.code === lang.code ? 'bg-[#2D7FF9] text-white border-transparent' : 'bg-white/5 text-gray-400 border-white/10'
                    }`}
                   >
                    {lang.name}
                   </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
