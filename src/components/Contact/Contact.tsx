import React, { useState } from 'react';
import { useContent } from '../../ContentContext';

const Contact: React.FC = () => {
  const { content } = useContent();
  const { site, contact } = content;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', requirement: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-4xl w-full grid md:grid-cols-2 glass border border-white/10 rounded-[3rem] overflow-hidden">
        {/* Left */}
        <div className="p-12 bg-[#1AABDF] text-white">
          <h2 className="text-4xl font-bold mb-6">联系我们</h2>
          <p className="text-blue-100 mb-10 font-light leading-relaxed">
            如果您有定制化 AI 需求或企业服务咨询，请填写表单，我们的专家团队将在 24 小时内与您联系。
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl shrink-0">📍</div>
              <div>
                <div className="text-xs text-blue-200 mb-1">总部地址</div>
                <span className="text-sm leading-relaxed">{site.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl shrink-0">📧</div>
              <div>
                <div className="text-xs text-blue-200 mb-1">商务邮箱</div>
                <a href={`mailto:${site.email}`} className="text-sm hover:underline">{site.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="p-12 bg-white/5">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-4xl">✅</div>
              <h3 className="text-2xl font-bold">提交成功！</h3>
              <p className="text-gray-400 text-sm">我们已收到您的请求，请保持手机畅通。</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-[#1AABDF] hover:underline text-sm">返回</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs text-gray-400 mb-2 uppercase font-tech">{contact.formFields.name}</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1AABDF] outline-none transition text-white"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2 uppercase font-tech">{contact.formFields.phone}</label>
                <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1AABDF] outline-none transition text-white"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2 uppercase font-tech">{contact.formFields.email}</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1AABDF] outline-none transition text-white"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2 uppercase font-tech">咨询需求</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1AABDF] outline-none transition text-white resize-none"
                  value={form.requirement} onChange={e => setForm({ ...form, requirement: e.target.value })} />
              </div>
              <button type="submit" className="w-full bg-[#1AABDF] py-4 rounded-xl font-bold text-white hover:bg-blue-600 transition shadow-lg shadow-blue-500/20 active:scale-95">
                提交咨询
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
