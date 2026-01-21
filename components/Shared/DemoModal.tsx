
import React, { useState, useEffect } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'trial' | 'demo';

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('trial');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    phone: '',
    code: '',
    email: '',
    date: '',
    timeSlot: '09:00 - 09:45',
    roles: '',
    topic: ''
  });

  useEffect(() => {
    let timer: number;
    if (countdown > 0) {
      timer = window.setInterval(() => setCountdown(c => c - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  if (!isOpen) return null;

  const handleSendCode = () => {
    if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      setError('请输入有效的手机号码以接收验证码');
      return;
    }
    setCountdown(60);
    setError('');
    console.log('OTP sent to:', formData.phone);
  };

  const validate = () => {
    if (!formData.contactName.trim() || !formData.phone.trim() || !formData.code.trim()) {
      setError('请填写必填项：姓名、手机及验证码');
      return false;
    }
    if (activeTab === 'demo' && (!formData.company.trim() || !formData.date)) {
      setError('预约演示模式下，企业名称与日期为必填项');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setActiveTab('trial');
        setFormData({
          company: '', contactName: '', phone: '', code: '',
          email: '', date: '', timeSlot: '09:00 - 09:45', roles: '', topic: ''
        });
      }, 3000);
    }
  };

  const timeSlots = ["09:00 - 09:45", "11:00 - 11:45", "14:00 - 14:45", "16:00 - 16:45"];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-4">
      <div className="absolute inset-0 bg-[#0B0E14]/90 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-[#0F1219] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in duration-500 flex flex-col max-h-[90vh]">
        
        {/* Tab Switcher */}
        <div className="flex border-b border-white/5 bg-white/5 shrink-0">
          <button 
            onClick={() => setActiveTab('trial')}
            className={`flex-1 py-5 text-sm font-bold tracking-widest transition-all ${activeTab === 'trial' ? 'bg-[#2D7FF9] text-white shadow-inner' : 'text-gray-500 hover:text-gray-300'}`}
          >
            免费试用产品
          </button>
          <button 
            onClick={() => setActiveTab('demo')}
            className={`flex-1 py-5 text-sm font-bold tracking-widest transition-all ${activeTab === 'demo' ? 'bg-[#6366f1] text-white shadow-inner' : 'text-gray-500 hover:text-gray-300'}`}
          >
            预约演示会议
          </button>
        </div>

        {/* 固定最小高度内容区，防止 Tab 切换时的窗口抖动 */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 min-h-[500px]">
          {isSubmitted ? (
            <div className="py-24 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-4xl animate-bounce">✅</div>
              <h3 className="text-2xl font-bold">申请已成功提交</h3>
              <p className="text-gray-400 text-sm">系统正在为您分配专属顾问，请稍后...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {activeTab === 'demo' && (
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter">企业名称 *</label>
                    <input type="text" placeholder="公司全称" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base focus:border-[#2D7FF9] outline-none transition-all focus:bg-white/[0.08]" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                )}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter">姓名 *</label>
                  <input type="text" placeholder="您的姓名" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base focus:border-[#2D7FF9] outline-none transition-all focus:bg-white/[0.08]" value={formData.contactName} onChange={e => setFormData({...formData, contactName: e.target.value})} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter">企业邮箱</label>
                  <input type="email" placeholder="example@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base focus:border-[#2D7FF9] outline-none transition-all focus:bg-white/[0.08]" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                
                {/* 手机号与验证码发送合并：压缩宽度，支持两行显示 */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-10 gap-3">
                  <div className="sm:col-span-4 space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter">联系电话 *</label>
                    <input type="tel" placeholder="手机号" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base focus:border-[#2D7FF9] outline-none" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="sm:col-span-3 space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter">验证码 *</label>
                    <input type="text" placeholder="4位验证码" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base focus:border-[#2D7FF9] outline-none" value={formData.code} onChange={e => setFormData({...formData, code: e.target.value})} />
                  </div>
                  <div className="sm:col-span-3 flex items-end">
                    <button 
                      type="button" 
                      disabled={countdown > 0} 
                      onClick={handleSendCode} 
                      className={`w-full h-[50px] rounded-xl text-[11px] leading-tight font-bold transition-all px-2 ${countdown > 0 ? 'bg-white/5 text-gray-600 border border-white/5' : 'bg-blue-500/10 text-[#2D7FF9] border border-[#2D7FF9]/30 hover:bg-[#2D7FF9] hover:text-white shadow-lg shadow-blue-500/5'}`}
                    >
                      {countdown > 0 ? `${countdown}s` : <>获取<br/>验证码</>}
                    </button>
                  </div>
                </div>
              </div>

              {activeTab === 'demo' && (
                <div className="grid grid-cols-2 gap-5 p-5 bg-white/5 rounded-2xl border border-white/5 animate-in slide-in-from-top-2">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-indigo-400">选择日期 *</label>
                    <input type="date" className="w-full bg-transparent text-white outline-none [color-scheme:dark]" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-indigo-400">预约时段 *</label>
                    <select className="w-full bg-transparent text-white outline-none" value={formData.timeSlot} onChange={e => setFormData({...formData, timeSlot: e.target.value})}>
                      {timeSlots.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter">需求描述</label>
                <textarea rows={activeTab === 'trial' ? 4 : 2} placeholder="请简述您的业务场景..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none resize-none transition-all" value={formData.topic} onChange={e => setFormData({...formData, topic: e.target.value})} />
              </div>

              {error && <p className="text-red-500 text-xs text-center animate-pulse">{error}</p>}

              <button type="submit" className={`w-full py-4 rounded-2xl font-bold text-white shadow-xl transition-all active:scale-95 ${activeTab === 'trial' ? 'bg-[#2D7FF9] shadow-blue-500/20' : 'bg-indigo-600 shadow-indigo-500/20'}`}>
                {activeTab === 'trial' ? '提交申请并进入试用' : '确认预约演示会议'}
              </button>
              <p className="text-[10px] text-gray-600 text-center font-light uppercase tracking-widest">Powered by FengFan Identity Trust Service</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
