import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../../ContentContext';

const Footer: React.FC = () => {
  const { content, openDemo } = useContent();
  const { site, footer, contact } = content;
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', requirement: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="bg-[#1C1C1E] border-t border-white/5">
      {/* CTA Section */}
      <section className="relative overflow-hidden py-12 md:py-20 border-b border-white/5 bg-gradient-to-b from-[#2C2C2E] to-[#1C1C1E]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10 xl:gap-16">
            <div className="xl:max-w-xs space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">{contact.ctaTitle}</h2>
              <p className="text-gray-400 text-base font-light leading-relaxed">{contact.ctaDesc}</p>
            </div>
            <div className="w-full xl:flex-1">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-3xl">✅</div>
                  <p className="text-white font-bold">申请已提交！</p>
                  <p className="text-gray-400 text-sm">专家顾问将在 24 小时内联系您</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {(['name', 'phone', 'email', 'company'] as const).map((field) => (
                      <div key={field} className="relative group">
                        <label className="absolute left-4 top-2 text-[10px] font-bold text-blue-500 uppercase tracking-tighter">{field.toUpperCase()}</label>
                        <input type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'} required
                          placeholder={contact.formFields[field]}
                          className="w-full bg-white/5 border border-white/10 text-white rounded-xl pt-8 pb-3 px-4 text-sm outline-none focus:border-blue-400 focus:bg-white/[0.08] transition placeholder:text-gray-700"
                          value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })} />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow relative group">
                      <label className="absolute left-4 top-2 text-[10px] font-bold text-purple-500 uppercase tracking-tighter">REQUIREMENTS</label>
                      <input required placeholder={contact.formFields.requirement}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-xl pt-8 pb-3 px-4 text-sm outline-none focus:border-purple-400 focus:bg-white/[0.08] transition placeholder:text-gray-700"
                        value={form.requirement} onChange={e => setForm({ ...form, requirement: e.target.value })} />
                    </div>
                    <button type="submit" className="md:w-48 bg-[#1AABDF] hover:bg-blue-600 text-white font-bold rounded-xl text-sm py-5 transition-all active:scale-95 shadow-2xl shadow-blue-500/30 whitespace-nowrap">
                      立即咨询
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.fengfancloud.com`}
                  alt="微信公众号" className="w-full h-full object-contain" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-gray-300">关注公众号</h5>
                <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-tech">OFFICIAL WECHAT</p>
                <p className="text-[9px] text-gray-600 mt-2">获取最新 AI 落地案例与行业资讯</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xs">{site.description}</p>
          </div>

          {/* Links */}
          {footer.links.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold mb-6 text-sm text-white">{group.title}</h4>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-gray-400 text-sm hover:text-[#1AABDF] transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600">
          <p>{site.copyright} | {site.icp}</p>
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
