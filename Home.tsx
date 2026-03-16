import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider, useContent } from './ContentContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/About/AboutUs';
import Contact from './components/Contact/Contact';
import DemoModal from './components/Shared/DemoModal';
import AIAssistant from './components/Shared/AIAssistant';

// 简单的占位页面组件
const PlaceholderPage: React.FC<{ title: string; color?: string }> = ({ title, color = '#1AABDF' }) => (
  <div className="min-h-screen flex items-center justify-center pt-20">
    <div className="text-center">
      <div className="inline-flex items-center px-4 py-1.5 rounded-full mb-6" style={{ background: `${color}20`, border: `1px solid ${color}40` }}>
        <span className="font-tech text-xs tracking-widest uppercase" style={{ color }}>{title}</span>
      </div>
      <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
      <p className="text-gray-400">页面建设中，敬请期待</p>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const { isDemoOpen, openDemo, closeDemo } = useContent();
  const [aiOpen, setAiOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#1C1C1E]">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/supermagic" element={<PlaceholderPage title="Super Magic" color="#1AABDF" />} />
          <Route path="/ai-agent" element={<PlaceholderPage title="AI Agent" color="#72D5FA" />} />
          <Route path="/ai-foundry" element={<PlaceholderPage title="AI Foundry" color="#0078d4" />} />
          <Route path="/modern-workplace" element={<PlaceholderPage title="Modern Workplace" color="#d83b01" />} />
          <Route path="/cloud/:id" element={<PlaceholderPage title="Cloud Services" color="#00a4ef" />} />
          <Route path="/systems" element={<PlaceholderPage title="System Integration" color="#7fba00" />} />
          <Route path="/case/:id" element={<PlaceholderPage title="Case Study" color="#ffb900" />} />
        </Routes>
      </main>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
      <AIAssistant isOpen={aiOpen} setIsOpen={setAiOpen} onBookDemo={openDemo} />
    </div>
  );
};

const App: React.FC = () => (
  <ContentProvider>
    <Router>
      <AppContent />
    </Router>
  </ContentProvider>
);

export default App;
