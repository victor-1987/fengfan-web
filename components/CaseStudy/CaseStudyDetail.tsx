
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MICROSOFT_CASES } from '../../constants';

interface CaseStudyDetailProps {
  onBookDemo: () => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ onBookDemo }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const caseInfo = MICROSOFT_CASES.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseInfo) return <div className="p-32 text-center">Case not found</div>;

  // 针对第一个案例（旅游/GitHub）的特化深度内容
  const isGithubCase = id === 'ms-case-1';

  return (
    <div className="bg-[#0B0E14] text-white min-h-screen">
      {/* 沉浸式顶部 Banner */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbda38656a73?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            alt="Success Story" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/40 to-transparent" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${caseInfo.accent}22, transparent)` }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full glass border border-white/10">
              <span className="text-xl">{caseInfo.icon.includes('github') ? '🐙' : '☁️'}</span>
              <span className="text-[10px] font-tech font-bold uppercase tracking-[0.2em] text-gray-400">Microsoft Customer Success Story</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              {caseInfo.title}
            </h1>
            <div className="flex flex-wrap gap-10 pt-8 border-t border-white/5">
              <div>
                <div className="text-[10px] font-tech text-gray-500 uppercase tracking-widest mb-1">Customer</div>
                <div className="text-lg font-bold">{caseInfo.industry}领航者</div>
              </div>
              <div>
                <div className="text-[10px] font-tech text-gray-500 uppercase tracking-widest mb-1">Product</div>
                <div className="text-lg font-bold" style={{ color: caseInfo.accent }}>{caseInfo.product}</div>
              </div>
              <div>
                <div className="text-[10px] font-tech text-gray-500 uppercase tracking-widest mb-1">Impact</div>
                <div className="text-lg font-bold text-emerald-500">{caseInfo.metric}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心内容区 */}
      <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-8 space-y-16">
          {/* 背景与挑战 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">面对急速增长的全球业务，传统的研发模式已成为瓶颈</h2>
            <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>
                作为全球领先的一站式旅游服务供应商，该客户面临着前所未有的技术挑战。随着多端业务协同和海外市场的快速扩张，其数千名开发者的工作量呈指数级增长。传统的代码审查、单元测试编写以及复杂业务逻辑的实现消耗了团队大量的精力，阻碍了创新功能的迭代速度。
              </p>
              <p>
                "我们需要一种能够赋予开发人员'超能力'的工具，让他们从重复的样板代码中解脱出来，转而专注于最核心的业务逻辑，" 其首席技术官表示。
              </p>
            </div>
          </div>

          {/* 锋范科技的作用 */}
          <div className="glass p-10 rounded-[3rem] border border-[#0078d4]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <img src="https://img.icons8.com/color/96/azure-1.png" className="w-32 h-32" alt="" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#0078d4]">广东锋范科技：赋能企业 AI 转型</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-300">
              <div className="space-y-2">
                <div className="font-bold text-white flex items-center">
                  <span className="w-1.5 h-4 bg-[#0078d4] mr-2"></span>
                  安全合规审计
                </div>
                <p>锋范科技协助客户建立了严格的 AI 代码审计流程，确保在引入 GitHub Copilot 的同时，保障企业核心私有代码的安全性与合规性。</p>
              </div>
              <div className="space-y-2">
                <div className="font-bold text-white flex items-center">
                  <span className="w-1.5 h-4 bg-[#0078d4] mr-2"></span>
                  Prompt 效率工坊
                </div>
                <p>我们为该客户提供了超过 10 场深度技术沙龙，帮助数千名开发者掌握了与 AI 协作的“提示词工程”艺术，将 AI 产出准确率提升了 40%。</p>
              </div>
            </div>
          </div>

          {/* 解决方案与成果 */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold italic">“GitHub Copilot 让我们在研发赛道上开启了‘自动驾驶’。”</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2">30% 研发速度跃升</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  通过 AI 自动补全代码段和生成文档，开发者的日常样板代码编写量减少了 50%，整体交付周期缩短了近三分之一。
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="text-xl font-bold mb-2">更稳健的代码质量</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  AI 辅助生成的单元测试覆盖率提升了 25%，在上线前捕捉了大量潜在逻辑漏洞，显著降低了线上事故率。
                </p>
              </div>
            </div>
          </div>

          {/* 客户满意评价 */}
          <div className="border-l-4 border-emerald-500 pl-10 py-4 space-y-4">
            <p className="text-2xl font-light italic leading-relaxed text-gray-300">
              “广东锋范科技不只是在帮我们部署一个工具，他们是在帮我们重塑整个技术文化。通过他们的专业咨询与培训，我们真正实现了从‘人工研发’到‘AI 增强研发’的质变。这不仅是效率的提升，更是开发者幸福感的巨大跨越。”
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full" />
              <div>
                <div className="font-bold">研发效能中心总监</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Global Travel Tech Leader</div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧边栏：快速数据 */}
        <div className="lg:col-span-4 space-y-8">
          <div className="glass p-8 rounded-[2rem] border border-white/5 sticky top-24">
            <h4 className="text-xs font-tech font-bold text-gray-500 uppercase tracking-widest mb-8">Case Highlights</h4>
            <div className="space-y-10">
              {[
                { l: '开发者满意度', v: '92%', d: '反馈研发压力显著减轻' },
                { l: '代码采用率', v: '46%', d: '平均每两行代码有一行由 AI 生成' },
                { l: '部署环境', v: 'Azure Global', d: '全量公有云弹性支撑' }
              ].map((h, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-[10px] font-tech text-blue-500 font-bold uppercase tracking-widest">{h.l}</div>
                  <div className="text-4xl font-bold">{h.v}</div>
                  <p className="text-xs text-gray-500">{h.d}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={onBookDemo}
              className="w-full bg-[#0078d4] text-white py-5 rounded-2xl font-bold mt-12 hover:bg-blue-600 transition shadow-2xl shadow-blue-500/30 active:scale-95"
            >
              获取同款转型方案建议
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-full text-gray-500 text-xs font-bold mt-6 hover:text-white transition"
            >
              ← 返回成功案例库
            </button>
          </div>
        </div>
      </section>

      {/* 底部关联 */}
      <section className="py-24 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold">准备好在您的组织内开启 AI 动力了吗？</h2>
          <div className="flex justify-center gap-6">
            <button onClick={onBookDemo} className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition">预约 1对1 专家诊断</button>
            <button onClick={() => navigate('/systems')} className="px-10 py-4 glass border border-white/10 rounded-full font-bold hover:bg-white/10 transition">探索更多行业集成</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
