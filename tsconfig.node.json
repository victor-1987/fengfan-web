import React, { useState, useEffect } from 'react';
import { useContent } from '../../ContentContext';

interface Props { isOpen: boolean; onClose: () => void; }

const DemoModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { content } = useContent();
  const [tab, setTab] = useState<'trial' | 'demo'>('trial');
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ company: '', name: '', phone: '', code: '', email: '', date: '', timeSlot: '09:00 - 09:45', topic: '' });

  useEffect(() => {
    if (!countdown) return;
    const t = window.setInterval(() => setCountdown(c => c - 1), 1000);
    return () => clearInterval(t);
  }, [countdown]);

  if (!isOpen) return null;

  const sendCode = () => {
    if (!/^1[3-9]\d{9}$/.test(form.phone)) { setError('请输入有效的手机号码'); return; }
    setCountdown(60); setError('');
  };

  const validate = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.code.trim()) { setError('请填写必填项：姓名、手机及验证码'); return false; }
    if (tab === 'demo' && (!form.company.trim() || !form.date)) { setError('预约演示需填写企业名称与日期'); return false; }
    setError(''); return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => { onClose(); setSubmitted(false); setTab('trial'); setForm({ company: '', name: '', phone: '', code: '', email: '', date: '', timeSlot: '09:00 - 09:45', topic: '' }); }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-4">
      <div className="absolute inset-0 bg-[#1C1C1E]/90 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#2C2C2E] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Tabs */}
        <div className="flex border-b border-white/5 bg-white/5 shrink-0">
          <button onClick={() => setTab('trial')} className={`flex-1 py-5 text-sm font-bold tracking-widest transition-all ${tab === 'trial' ? 'bg-[#1AABDF] text-white' : 'text-gray-500 hover:text-gray-300'}`}>免费试用产品</button>
          <button onClick={() => setTab('demo')} className={`flex-1 py-5 text-sm font-bold tracking-widest transition-all ${tab === 'demo' ? 'bg-#72D5FA text-white' : 'text-gray-500 hover:text-gray-300'}`}>预约演示会议</button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {submitted ? (
            <div className="py-20 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-4xl">✅</div>
              <h3 className="text-2xl font-bold">申请已成功提交</h3>
              <p className="text-gray-400 text-sm">系统正在为您分配专属顾问，请稍后...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {tab === 'demo' && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase">企业名称 *</label>
                  <input type="text" placeholder="公司全称" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1AABDF] outline-none transition" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase">姓名 *</label>
                  <input type="text" placeholder="您的姓名" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1AABDF] outline-none transition" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase">企业邮箱</label>
                  <input type="email" placeholder="example@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1AABDF] outline-none transition" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-10 gap-3">
                <div className="col-span-4 space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase">手机号 *</label>
                  <input type="tel" placeholder="手机号" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1AABDF] outline-none" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="col-span-3 space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase">验证码 *</label>
                  <input type="text" placeholder="4位验证码" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1AABDF] outline-none" value={form.code} onChange={e => setForm({ ...form, code: e.target.value })} />
                </div>
                <div className="col-span-3 flex items-end">
                  <button type="button" disabled={countdown > 0} onClick={sendCode}
                    className={`w-full h-[46px] rounded-xl text-[11px] font-bold transition-all ${countdown > 0 ? 'bg-white/5 text-gray-600' : 'bg-blue-500/10 text-[#1AABDF] border border-[#1AABDF]/30 hover:bg-[#1AABDF] hover:text-white'}`}>
                    {countdown > 0 ? `${countdown}s` : '获取验证码'}
                  </button>
                </div>
              </div>
              {tab === 'demo' && (
                <div className="grid grid-cols-2 gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-indigo-400">选择日期 *</label>
                    <input type="date" className="w-full bg-transparent text-white outline-none [color-scheme:dark] text-sm" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-indigo-400">预约时段</label>
                    <select className="w-full bg-transparent text-white outline-none text-sm" value={form.timeSlot} onChange={e => setForm({ ...form, timeSlot: e.target.value })}>
                      {['09:00 - 09:45', '11:00 - 11:45', '14:00 - 14:45', '16:00 - 16:45'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              )}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase">需求描述</label>
                <textarea rows={3} placeholder="请简述您的业务场景..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none resize-none transition" value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })} />
              </div>
              {error && <p className="text-red-500 text-xs text-center">{error}</p>}
              <button type="submit" className={`w-full py-4 rounded-2xl font-bold text-white shadow-xl transition-all active:scale-95 ${tab === 'trial' ? 'bg-[#1AABDF] shadow-blue-500/20' : 'bg-#72D5FA shadow-indigo-500/20'}`}>
                {tab === 'trial' ? '提交申请并进入试用' : '确认预约演示会议'}
              </button>
              <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest">Powered by FengFan Identity Trust Service</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
