
import React from 'react';
import { useParams } from 'react-router-dom';
import { CLOUD_SERVICES } from '../../constants';

interface CloudServicePageProps {
  onConsult: () => void;
}

const CloudServicePage: React.FC<CloudServicePageProps> = ({ onConsult }) => {
  const { id } = useParams<{ id: string }>();
  const service = CLOUD_SERVICES.find(s => s.id === id);

  if (!service) return <div className="p-24 text-center">Service not found</div>;

  const getHeroImage = (id: string) => {
    switch (id) {
      case 'azure': return "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200";
      case 'aws': return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200";
      case 'baidu': return "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200";
      case 'tencent': return "https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&q=80&w=1200";
      case 'adobe':
      case 'cad': return "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200";
      default: return "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200";
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative h-[400px] overflow-hidden">
        <img src={getHeroImage(service.id)} alt="Cloud" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
                <img src={service.icon} alt={service.name} className="relative w-24 h-24 mx-auto mb-4 bg-white/5 p-4 rounded-3xl border border-white/10" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight">{service.name} 专家级架构方案</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">核心产品与订阅体系</h2>
            <span className="text-xs font-tech text-[#2D7FF9] uppercase tracking-widest px-4 py-1 rounded-full border border-[#2D7FF9]/30">Official Partner</span>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {[
            { title: "Standard Enterprise", desc: "适用于初创及中小规模组织的云端基础架构包" },
            { title: "Advanced Integration", desc: "包含多区域负载均衡、安全加固及 AI 推理加速方案" },
            { title: "Global Managed", desc: "全托管式云治理服务，24/7 专家级技术响应支持" }
          ].map((pkg, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-center justify-between group hover:border-[#2D7FF9]/50 transition duration-500">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#2D7FF9] transition-colors">{service.name} {pkg.title}</h3>
                <p className="text-gray-400 text-sm max-w-md">{pkg.desc}</p>
              </div>
              <button 
                onClick={onConsult}
                className="w-full md:w-auto bg-[#2D7FF9] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition transform active:scale-95"
              >
                立即咨询报价
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-white/5 border border-white/5 text-center">
            <h4 className="text-xl font-bold mb-4">需要定制化迁移方案？</h4>
            <p className="text-gray-400 mb-8">我们的架构师团队具备丰富的异构云环境迁移经验，可为您量身定制最平滑的业务演进路径。</p>
            <button onClick={onConsult} className="text-[#2D7FF9] font-bold hover:underline">联系架构专家 →</button>
        </div>
      </section>
    </div>
  );
};

export default CloudServicePage;
