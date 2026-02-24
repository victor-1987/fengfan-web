
import React, { useState } from 'react';
import { useContent } from '../../ContentContext';

const Contact: React.FC = () => {
  const { t } = useContent();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Mimic SMTP email trigger
    console.log("Form submitted. Email sent to info@fengfancloud.com");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-4xl w-full grid md:grid-cols-2 glass rounded-[3rem] overflow-hidden">
        <div className="p-12 bg-[#2D7FF9] text-white">
          <h2 className="text-4xl font-bold mb-8">{t.common.contactUs}</h2>
          <p className="text-blue-100 mb-12">
            如果您有定制化 AI 需求或企业服务咨询，请填写表单，我们的专家团队将在 24 小时内与您取得联系。
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">📍</div>
              <span>广州市海珠区琶洲街道琶洲大道168号星河湾中心16F 1610单元</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">📧</div>
              <span>info@fengfancloud.com</span>
            </div>
          </div>
        </div>

        <div className="p-12 bg-white/5">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-3xl mb-6">✓</div>
              <h3 className="text-2xl font-bold mb-2">{t.common.success}</h3>
              <p className="text-gray-400">我们已收到您的请求，请保持手机畅通。</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-[#2D7FF9] hover:underline">{t.common.back}</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">{t.footer.formName}</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#2D7FF9] outline-none transition" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">{t.footer.formPhone}</label>
                <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#2D7FF9] outline-none transition" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">咨询需求</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#2D7FF9] outline-none transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#2D7FF9] py-4 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-500/20">
                {t.common.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
