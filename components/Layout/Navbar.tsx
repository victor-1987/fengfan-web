
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CLOUD_SERVICES } from '../../constants';
import { useContent } from '../../ContentContext';
import { Language } from '../../translations';

const Navbar: React.FC = () => {
  const { lang, setLang, t, openDemo } = useContent();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const langRef = useRef<HTMLDivElement>(null);
  
  // 用于处理菜单延迟关闭的 Ref
  const closeTimeoutRef = useRef<number | null>(null);

  const isActive = (path: string) => location.pathname === path;
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const languages: { code: Language; name: string }[] = [
    { code: 'zh', name: '简体中文' },
    { code: 'hk', name: '繁體中文' },
    { code: 'en', name: 'English' }
  ];

  const currentLangObj = languages.find(l => l.code === lang) || languages[0];

  // 鼠标进入菜单区域：清除之前的关闭定时器并打开菜单
  const handleMouseEnter = (menu: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  // 鼠标离开菜单区域：设置 300ms 的延迟关闭
  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMobileMenu}>
            <div className="w-8 h-8 bg-[#2D7FF9] rounded-lg flex items-center justify-center font-tech font-bold text-white transition-transform group-hover:rotate-12 shadow-[0_0_15px_rgba(45,127,249,0.5)]">F</div>
            <span className="text-xl font-bold font-tech tracking-wider">锋范科技</span>
          </Link>
          <div className="hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[9px] font-tech font-bold text-emerald-500/80 uppercase tracking-widest">{t.common.platformLive}</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className={`text-sm font-medium hover:text-[#2D7FF9] transition ${isActive('/') ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>{t.nav.home}</Link>
          <Link to="/supermagic" className={`text-sm font-medium hover:text-[#2D7FF9] transition ${isActive('/supermagic') ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>{t.nav.supermagic}</Link>
          
          <div 
            className="relative group py-4" 
            onMouseEnter={() => handleMouseEnter('cloud')} 
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center space-x-1 text-sm font-medium hover:text-[#2D7FF9] transition ${activeMenu === 'cloud' ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>
              <span>{t.nav.cloud}</span>
              <svg className={`w-4 h-4 transform transition-transform ${activeMenu === 'cloud' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {activeMenu === 'cloud' && (
              <div 
                className="absolute top-full -left-48 w-[640px] glass-dropdown rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 border border-white/10 z-[110]"
                onMouseEnter={() => handleMouseEnter('cloud')} // 确保进入菜单区域时也清除定时器
              >
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-[10px] font-bold text-[#2D7FF9] mb-4 uppercase tracking-[0.2em]">Public Cloud</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {CLOUD_SERVICES.filter(s => s.category === 'public').map(s => (
                        <Link key={s.id} to={`/cloud/${s.id}`} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition group">
                          <img src={s.icon} alt={s.name} className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" />
                          <div className="flex flex-col text-left"><span className="text-sm font-bold text-white">{s.name}</span><span className="text-[10px] text-gray-400">{s.description}</span></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-[#2D7FF9] mb-4 uppercase tracking-[0.2em]">Software</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {CLOUD_SERVICES.filter(s => s.category === 'software').map(s => (
                        <Link key={s.id} to={`/cloud/${s.id}`} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition group">
                          <img src={s.icon} alt={s.name} className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" />
                          <div className="flex flex-col text-left"><span className="text-sm font-bold text-white">{s.name}</span><span className="text-[10px] text-gray-400">{s.description}</span></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/systems" className={`text-sm font-medium hover:text-[#2D7FF9] transition ${isActive('/systems') ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>{t.nav.systems}</Link>
          <Link to="/about" className={`text-sm font-medium hover:text-[#2D7FF9] transition ${isActive('/about') ? 'text-[#2D7FF9]' : 'text-gray-300'}`}>{t.nav.about}</Link>
        </div>

        <div className="flex items-center space-x-6">
          <button onClick={openDemo} className="hidden lg:flex relative overflow-hidden group/btn bg-gradient-to-r from-[#2D7FF9] to-[#6366f1] text-white px-8 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(45,127,249,0.3)] border border-white/10">
            <span className="relative flex items-center"><span className="mr-2">{t.common.freeTrial}</span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></span>
          </button>
          
          <div className="relative" ref={langRef}>
            <button onClick={() => setIsLangOpen(!isLangOpen)} className="hidden sm:flex items-center space-x-2 text-gray-400 hover:text-white transition group px-3 py-1.5 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10">
              <span className="text-[12px] font-tech font-bold tracking-widest uppercase">{currentLangObj.code}</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180 text-[#2D7FF9]' : 'opacity-50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 glass-dropdown rounded-2xl py-2 shadow-2xl animate-in fade-in zoom-in-95 duration-200 border border-white/10 z-[110]">
                {languages.map((l) => (
                  <button key={l.code} onClick={() => { setLang(l.code); setIsLangOpen(false); }} className={`w-full text-left px-5 py-2.5 text-xs font-bold transition-all flex items-center justify-between group/item ${lang === l.code ? 'text-[#2D7FF9] bg-[#2D7FF9]/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                    <span>{l.name}</span><span className="text-[9px] opacity-30">{l.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}</svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
