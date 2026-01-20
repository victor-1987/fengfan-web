
import React, { useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '09:00 - 09:45',
    roles: '',
    topic: ''
  });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{7,15}$/;

    if (!formData.company.trim() || !formData.contactName.trim() || !formData.topic.trim()) {
      setError('企业名称、联系人及需求描述不能为空');
      return false;
    }

    const hasPhone = formData.phone.trim().length > 0;
    const hasEmail = formData.email.trim().length > 0;

    if (!hasPhone && !hasEmail) {
      setError('手机号与邮箱不能全为空');
      return false;
    }

    if (hasEmail && !emailRegex.test(formData.email)) {
      setError('请输入正确的邮箱格式');
      return false;
    }

    if (hasPhone && !phoneRegex.test(formData.phone)) {
      setError('请输入正确的联系电话');
      return false;
    }

    if (!formData.date) {
      setError('请选择预约日期');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Simulate submission
      console.log('Booking submitted:', formData);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          company: '',
          contactName: '',
          phone: '',
          email: '',
          date: '',
          timeSlot: '09:00 - 09:45',
          roles: '',
          topic: ''
        });
      }, 3500);
    }
  };

  const timeSlots = [
    "09:00 - 09:45", "10:00 - 10:45", "11:00 - 11:45",
    "14:00 - 14:45", "15:00 - 15:45", "16:00 - 16:45", "17:00 - 17:45"
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0B0E14]/80 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-[#0B0E14] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500">
        <div className="flex flex-col h-full max-h-[90vh]">
          {/* Header */}
          <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between shrink-0">
            <div>
              <h2 className="text-2xl font-bold">预约演示会议</h2>
              <p className="text-sm text-gray-500 mt-1">请填写以下信息，我们的专家将为您提供 45 分钟深度演示</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-8">
            {isSubmitted ? (
              <div className="py-20 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center text-4xl mb-8 animate-bounce">
                  ✅
                </div>
                <h3 className="text-3xl font-bold mb-4">预约请求已成功发送</h3>
                <p className="text-gray-400 max-w-md">
                  您的需求已提交。我们的产品专家将查阅信息，并于 24 小时内通过邮件/电话向您确认会议链接。
                </p>
                <div className="mt-12 text-sm text-gray-600">正在返回首页...</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
                {/* Section: Company & Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">企业名称 *</label>
                    <input 
                      type="text" 
                      placeholder="您的公司全称"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D7FF9] transition"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">联系人姓名 *</label>
                    <input 
                      type="text" 
                      placeholder="如何称呼您"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D7FF9] transition"
                      value={formData.contactName}
                      onChange={e => setFormData({...formData, contactName: e.target.value})}
                    />
                  </div>
                </div>

                {/* Section: Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">联系电话 *</label>
                    <input 
                      type="tel" 
                      placeholder="您的手机或座机号码"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D7FF9] transition"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">电子邮箱 *</label>
                    <input 
                      type="email" 
                      placeholder="example@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D7FF9] transition"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Section: Schedule */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/5 rounded-3xl border border-white/5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2D7FF9]">预约日期选择 *</label>
                    <input 
                      type="date" 
                      className="w-full bg-[#0B0E14] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D7FF9] transition [color-scheme:dark]"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2D7FF9]">期望会议时段 (45min) *</label>
                    <select 
                      className="w-full bg-[#0B0E14] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D7FF9] transition text-white"
                      value={formData.timeSlot}
                      onChange={e => setFormData({...formData, timeSlot: e.target.value})}
                    >
                      {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                    </select>
                  </div>
                </div>

                {/* Section: Roles & Topic */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">主要与会角色</label>
                    <input 
                      type="text" 
                      placeholder="例如：技术主管、项目经理、业务部门负责人等"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D7FF9] transition"
                      value={formData.roles}
                      onChange={e => setFormData({...formData, roles: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400">需求描述 / 希望沟通的主题 *</label>
                    <textarea 
                      rows={3} 
                      placeholder="请描述您的业务场景或希望在演示中重点了解的功能模块..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D7FF9] transition resize-none"
                      value={formData.topic}
                      onChange={e => setFormData({...formData, topic: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 flex flex-col items-center space-y-4">
                  {error && (
                    <div className="w-full bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm font-medium animate-pulse text-center">
                      {error}
                    </div>
                  )}
                  <button 
                    type="submit"
                    className="w-full bg-[#2D7FF9] text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-500/20 text-lg transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    立即预约专家演示
                  </button>
                  <p className="text-[10px] text-gray-500">点击提交即表示您同意我们的《隐私政策》与《服务条款》</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
