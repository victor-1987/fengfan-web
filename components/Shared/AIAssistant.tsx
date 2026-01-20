
import React, { useState, useEffect, useRef } from 'react';

interface AIAssistantProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '你好！我是锋范科技的 AI 助手小狐狸。请问有什么我可以帮您的吗？您可以询问关于 Super Magic 的功能或获取产品报价。' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    // Mock response logic
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: '收到您的咨询。关于报价或技术方案，建议您在“联系我们”页面留下电话，或稍后会有专家专席为您服务。' 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center justify-center"
        >
          {/* Breathing light effect */}
          <div className="absolute inset-0 bg-[#2D7FF9] rounded-full blur-xl opacity-20 group-hover:opacity-40 animate-pulse transition-opacity" />
          <div className="w-20 h-20 bg-gradient-to-br from-[#2D7FF9] to-violet-600 rounded-full flex items-center justify-center border-4 border-white/10 shadow-2xl transform transition hover:scale-110">
             {/* Mascot Icon Placeholder - Imagine the Purple Fox Robot here */}
             <div className="relative">
                <span className="text-4xl">🦊</span>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#0B0E14] rounded-full"></div>
             </div>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[600px] glass rounded-[2.5rem] flex flex-col shadow-2xl border border-[#2D7FF9]/30 animate-in zoom-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🦊</div>
              <div>
                <h3 className="font-bold">AI 智能助手</h3>
                <p className="text-xs text-green-500 flex items-center">
                   <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                   在线为您服务
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Chat area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  m.role === 'user' ? 'bg-[#2D7FF9] text-white rounded-tr-none' : 'glass border-white/5 text-gray-200 rounded-tl-none'
                }`}>
                  <p className="text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input area */}
          <div className="p-6 bg-white/5 rounded-b-[2.5rem]">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="在此输入您的咨询问题..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-4 pr-12 outline-none focus:border-[#2D7FF9] transition"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#2D7FF9]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
