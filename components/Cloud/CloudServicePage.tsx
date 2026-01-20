
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CLOUD_SERVICES } from '../../constants';

interface CloudServicePageProps {
  onConsult: () => void;
}

const CloudServicePage: React.FC<CloudServicePageProps> = ({ onConsult }) => {
  const { id } = useParams<{ id: string }>();
  const service = CLOUD_SERVICES.find(s => s.id === id);

  if (!service) return <div className="p-24 text-center">Service not found</div>;

  const isPublic = service.category === 'public';
  const heroImage = isPublic 
    ? "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200" 
    : "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative h-[400px] overflow-hidden">
        <img src={heroImage} alt="Cloud" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <img src={service.icon} alt={service.name} className="w-24 h-24 mx-auto mb-4 bg-white/10 p-4 rounded-full" />
            <h1 className="text-5xl font-bold tracking-tight">{service.name} 解决方案</h1>
            <p className="text-xl text-gray-400">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12">核心产品与订阅</h2>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="glass p-8 rounded-3xl flex items-center justify-between group hover:bg-white/5 transition">
              <div>
                <h3 className="text-xl font-bold mb-1">{service.name} Enterprise Bundle {i}</h3>
                <p className="text-gray-400">Inclusive of cloud storage, compute nodes and 24/7 technical support.</p>
              </div>
              <button 
                onClick={onConsult}
                className="bg-[#2D7FF9] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/20 opacity-80 group-hover:opacity-100 transition"
              >
                咨询报价
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CloudServicePage;
