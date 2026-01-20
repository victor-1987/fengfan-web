
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0E14] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2D7FF9] rounded-lg flex items-center justify-center font-tech font-bold text-white">F</div>
              <span className="text-xl font-bold font-tech tracking-wider">锋范科技</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              致力于让 AI 赋能每一个组织。通过 Super Magic 平台，重塑企业的数字生产力。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">产品中心</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-[#2D7FF9]">Super Magic</Link></li>
              <li><Link to="/systems" className="hover:text-[#2D7FF9]">智能体编排</Link></li>
              <li><Link to="/systems" className="hover:text-[#2D7FF9]">企业知识库</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">全云服务</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/cloud/azure" className="hover:text-[#2D7FF9]">Microsoft Azure</Link></li>
              <li><Link to="/cloud/aws" className="hover:text-[#2D7FF9]">Amazon Web Services</Link></li>
              <li><Link to="/cloud/adobe" className="hover:text-[#2D7FF9]">Adobe Creative Cloud</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">联系方式</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>商务热线: 400-888-9999</li>
              <li>技术支持: support@fengfan.tech</li>
              <li>工作时间: 周一至周五 9:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2025 广东锋范科技有限公司 版权所有 | 粤 ICP 备 12345678 号</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition">隐私政策</a>
            <a href="#" className="hover:text-gray-400 transition">服务条款</a>
            <a href="#" className="hover:text-gray-400 transition">友情链接</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
