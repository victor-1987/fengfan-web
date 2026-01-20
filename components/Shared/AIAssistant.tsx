
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface AIAssistantProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onBookDemo: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, setIsOpen, onBookDemo }) => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '你好！我是锋范科技的 AI 助手小狐狸。请问有什么我可以帮您的吗？您可以询问关于 Super Magic 的功能或获取产品报价。' }
  ]);
  const [input, setInput] = useState('');
  const [showProactive, setShowProactive] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Proactive greeting after 10s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowProactive(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (textOverride?: string) => {
    const userMsg = textOverride || input;
    if (!userMsg.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: '收到您的咨询。关于报价或技术方案，建议您在“联系我们”页面留下电话，或直接预约我们的产品专家进行 1对1 演示。' 
      }]);
    }, 1000);
  };

  const hotTopics = [
    "Super Magic 报价",
    "私有化部署方案",
    "查看客户案例"
  ];

  const menuOptions = [
    { label: '免费试用', icon: '⚡', color: 'bg-emerald-500', action: () => navigate('/contact') },
    { label: '预约演示', icon: '📅', color: 'bg-amber-500', action: () => onBookDemo() },
    { label: 'AI 助手', icon: '💬', color: 'bg-[#2D7FF9]', action: () => setIsOpen(true) }
  ];

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[150]">
      {/* Proactive Bubble */}
      {showProactive && !isOpen && (
        <div className="absolute bottom-32 right-0 w-64 glass p-4 rounded-2xl border border-[#2D7FF9]/30 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button 
            onClick={() => setShowProactive(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-[#0B0E14] border border-white/10 rounded-full text-[10px]"
          >✕</button>
          <p className="text-xs text-gray-200 leading-relaxed mb-3">
            👋 需要了解 **Super Magic** 如何帮您的企业提升 300% 效率吗？
          </p>
          <button 
            onClick={() => { setIsOpen(true); setShowProactive(false); }}
            className="text-[10px] font-bold text-[#2D7FF9] uppercase tracking-widest hover:underline"
          >
            立即开聊 →
          </button>
        </div>
      )}

      {/* Floating Menu & Launcher */}
      {!isOpen && (
        <div className="relative group flex flex-col items-center">
          {/* Pop-up Menu Options */}
          <div className="flex flex-col items-center space-y-3 mb-3 pointer-events-none group-hover:pointer-events-auto">
            {menuOptions.map((opt, i) => (
              <button
                key={i}
                onClick={opt.action}
                className={`flex items-center space-x-3 px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border border-white/10 hover:scale-110 active:scale-95 whitespace-nowrap ${opt.color}`}
                style={{ transitionDelay: `${(menuOptions.length - i - 1) * 75}ms` }}
              >
                <span className="text-base">{opt.icon}</span>
                <span className="text-xs font-bold text-white tracking-wide">{opt.label}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#2D7FF9] rounded-full blur-3xl opacity-20 group-hover:opacity-60 animate-pulse transition-opacity" />
            
            <button 
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#2D7FF9] to-violet-600 rounded-full flex items-center justify-center border-4 border-white/10 shadow-2xl transform transition-all duration-500 group-hover:rotate-12 group-active:scale-95"
            >
              <div className="relative">
                <span className="text-3xl md:text-4xl">🦊</span>
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[#0B0E14] rounded-full"></div>
              </div>
            </button>

            {/* Persistent Label - Always Visible */}
            <div 
              onClick={() => setIsOpen(true)}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap cursor-pointer group/label"
            >
               <div className="bg-[#0B0E14]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-xl flex items-center space-x-2 transition-all group-hover/label:border-[#2D7FF9]/50 group-hover/label:scale-105">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D7FF9] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D7FF9]"></span>
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-white/90">AI问答/预约演示，点我？</span>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-8 md:right-8 w-full md:w-[400px] h-full md:h-[600px] glass md:rounded-[2.5rem] flex flex-col shadow-2xl border-t md:border border-[#2D7FF9]/30 animate-in zoom-in slide-in-from-bottom-10 duration-300 overflow-hidden">
          {/* Header */}
          <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#2D7FF9]/10 to-transparent pt-12 md:pt-6">
            <div className="flex items-center space-x-3">
              <div className="text-2xl md:text-3xl">🦊</div>
              <div>
                <h3 className="font-bold text-sm md:text-base">AI 智能助手</h3>
                <p className="text-[10px] md:text-xs text-green-500 flex items-center">
                   <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                   在线为您服务
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Chat area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 rounded-2xl ${
                  m.role === 'user' ? 'bg-[#2D7FF9] text-white rounded-tr-none' : 'glass border border-white/5 text-gray-200 rounded-tl-none'
                }`}>
                  <p className="text-xs md:text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            
            {/* Hot Topic Suggestions */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {hotTopics.map((topic, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSend(topic)}
                    className="text-[10px] bg-white/5 border border-white/10 hover:border-[#2D7FF9]/50 hover:bg-[#2D7FF9]/10 px-3 py-1.5 rounded-full transition-all text-gray-400 hover:text-white"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input area */}
          <div className="p-4 md:p-6 bg-[#0F1219] border-t border-white/5 pb-8 md:pb-6">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="在此输入您的咨询问题..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-4 pr-12 outline-none focus:border-[#2D7FF9] transition text-xs md:text-sm"
              />
              <button 
                onClick={() => handleSend()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#2D7FF9] hover:scale-110 transition"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
