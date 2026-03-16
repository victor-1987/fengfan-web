import React, { useState } from 'react';
import { useContent } from '../../ContentContext';

interface Props {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  onBookDemo: () => void;
}

const AIAssistant: React.FC<Props> = ({ isOpen, setIsOpen, onBookDemo }) => {
  const { content } = useContent();
  const [messages, setMessages] = useState([
    { role: 'ai', text: `你好！我是${content.site.name}的 AI 助手。请问有什么可以帮您？可以询问关于我们服务的任何问题。` }
  ]);
  const [input, setInput] = useState('');

  const hotTopics = ['Super Magic 报价', '私有化部署方案', '查看客户案例'];

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: '收到您的咨询。关于报价或技术方案，建议您在"联系我们"页面留下联系方式，或直接预约我们的产品专家进行 1对1 演示。' }]);
    }, 1000);
  };

  const menuOptions = [
    { icon: '⚡', label: '免费试用', color: 'bg-emerald-500', action: () => { window.location.hash = '/contact'; } },
    { icon: '📅', label: '预约演示', color: 'bg-amber-500', action: onBookDemo },
    { icon: '💬', label: 'AI 助手', color: 'bg-[#1AABDF]', action: () => setIsOpen(true) },
  ];

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[150]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] md:w-[400px] h-[560px] bg-[#2C2C2E] border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1AABDF] to-#72D5FA rounded-full flex items-center justify-center text-xl">🦊</div>
              <div>
                <div className="text-sm font-bold text-white">AI 智能助手</div>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-gray-500">在线为您服务</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-[#1AABDF] text-white' : 'glass border border-white/5 text-gray-300'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {hotTopics.map(t => (
                  <button key={t} onClick={() => handleSend(t)}
                    className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors">
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="p-4 border-t border-white/5">
            <div className="flex items-center space-x-2 glass border border-white/10 rounded-2xl px-4 py-3">
              <input value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="输入您的问题..." className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-600" />
              <button onClick={() => handleSend()} className="text-[#1AABDF] hover:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Launcher */}
      <div className="relative group">
        <div className="absolute bottom-full right-0 mb-3 flex flex-col items-end space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          {menuOptions.map((opt, i) => (
            <button key={i} onClick={opt.action}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg ${opt.color} transition-all hover:scale-105 active:scale-95`}
              style={{ transitionDelay: `${i * 50}ms` }}>
              <span>{opt.icon}</span><span>{opt.label}</span>
            </button>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 relative"
          style={{ background: 'linear-gradient(135deg, #1AABDF, #72D5FA)' }}>
          🦊
          <span className="absolute top-1 right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#1C1C1E]" />
        </button>
        <div className="absolute -bottom-6 right-0 whitespace-nowrap text-[9px] font-tech text-gray-600 uppercase tracking-widest">AI 助手</div>
      </div>
    </div>
  );
};

export default AIAssistant;
