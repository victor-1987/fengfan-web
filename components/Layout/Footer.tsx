
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    requirement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('提交成功！我们的架构专家将在 24 小时内通过电话或邮件联系您。');
  };

  return (
    <footer className="bg-[#0B0E14] border-t border-white/5">
      {/* 在线提交模块：增强字号与对比度 */}
      <section className="relative overflow-hidden py-10 md:py-16 border-b border-white/5 bg-gradient-to-b from-[#0F1219] to-[#0B0E14]">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-16">
            
            <div className="xl:max-w-xs text-center xl:text-left space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">开启 AI 转型</h2>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                专家顾问 24h 内快速响应，<br className="hidden xl:block" />定制您的数字化增长基座。
              </p>
            </div>

            <div className="w-full xl:flex-1">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative group">
                    <label className="absolute left-4 top-2 text-xs font-bold text-blue-500 uppercase tracking-tighter">姓名 NAME</label>
                    <input 
                      type="text" required placeholder="您的称呼"
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl pt-8 pb-3 px-4 text-base outline-none focus:border-blue-400 focus:bg-white/[0.08] transition placeholder:text-gray-700"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <label className="absolute left-4 top-2 text-xs font-bold text-blue-500 uppercase tracking-tighter">电话 PHONE</label>
                    <input 
                      type="tel" required placeholder="联系电话"
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl pt-8 pb-3 px-4 text-base outline-none focus:border-blue-400 focus:bg-white/[0.08] transition placeholder:text-gray-700"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <label className="absolute left-4 top-2 text-xs font-bold text-blue-500 uppercase tracking-tighter">邮箱 EMAIL</label>
                    <input 
                      type="email" required placeholder="企业邮箱"
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl pt-8 pb-3 px-4 text-base outline-none focus:border-blue-400 focus:bg-white/[0.08] transition placeholder:text-gray-700"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <label className="absolute left-4 top-2 text-xs font-bold text-blue-500 uppercase tracking-tighter">企业/机构 COMPANY</label>
                    <input 
                      type="text" required placeholder="所属公司"
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl pt-8 pb-3 px-4 text-base outline-none focus:border-blue-400 focus:bg-white/[0.08] transition placeholder:text-gray-700"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow relative group">
                    <label className="absolute left-4 top-2 text-xs font-bold text-purple-500 uppercase tracking-tighter">您的需求 REQUIREMENTS</label>
                    <input 
                      required placeholder="请简述您的咨询意向..."
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl pt-8 pb-3 px-4 text-base outline-none focus:border-purple-400 focus:bg-white/[0.08] transition placeholder:text-gray-700"
                      value={formData.requirement}
                      onChange={e => setFormData({...formData, requirement: e.target.value})}
                    />
                  </div>
                  <button 
                    type="submit"
                    className="md:w-48 bg-[#2D7FF9] hover:bg-blue-600 text-white font-bold rounded-xl text-base py-5 transition-all active:scale-95 shadow-2xl shadow-blue-500/30 whitespace-nowrap"
                  >
                    立即提交咨询
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚链接部分 */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="pt-2">
               <div className="flex items-center space-x-4">
                  <div className="relative p-2 bg-white/5 border border-white/10 rounded-2xl group overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-[#2D7FF9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center border-2 border-dashed border-white/10 rounded-xl relative z-10">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter text-center px-2">广东锋范科技<br/>公众号二维码</span>
                     </div>
                  </div>
                  <div className="text-left">
                     <h5 className="text-xs font-bold text-gray-300">扫码关注锋范科技</h5>
                     <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-tech">Official WeChat Account</p>
                     <p className="text-[9px] text-gray-600 mt-2 font-light">获取最新 AI 落地案例与白皮书</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm">产品与服务</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/supermagic" className="hover:text-[#2D7FF9]">Super Magic 平台</Link></li>
              <li><Link to="/systems" className="hover:text-[#2D7FF9]">系统集成</Link></li>
              <li><Link to="/systems" className="hover:text-[#2D7FF9]">智慧工厂方案</Link></li>
              <li><Link to="/supermagic" className="hover:text-[#2D7FF9]">AI 数字人定制</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm">云端生态</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/cloud/azure" className="hover:text-[#2D7FF9]">Microsoft Azure</Link></li>
              <li><Link to="/cloud/aws" className="hover:text-[#2D7FF9]">Amazon Web Services</Link></li>
              <li><Link to="/cloud/adobe" className="hover:text-[#2D7FF9]">Adobe 创意云</Link></li>
              <li><Link to="/cloud/tencent" className="hover:text-[#2D7FF9]">腾讯云 / 百度云</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm text-right md:text-left">联系我们</h4>
            <ul className="space-y-4 text-gray-400 text-sm text-right md:text-left">
              <li>商务热线: 400-888-9999</li>
              <li>技术支持: support@fengfan.tech</li>
              <li>商务合作: contact@fengfan.tech</li>
              <li>总部: 东莞市科技产业园区</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600">
          <p>© 2025 广东锋范科技有限公司 版权所有 | 粤 ICP 备 12345678 号</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition">隐私政策</a>
            <a href="#" className="hover:text-gray-400 transition">服务条款</a>
            <a href="#" className="hover:text-gray-400 transition">法律申明</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
