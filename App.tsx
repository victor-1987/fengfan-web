
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider, useContent } from './ContentContext';
import Navbar from './components/Layout/Navbar';
import Home from './components/Home/Home';
import SuperMagicPage from './components/SuperMagic/SuperMagicPage';
import AIAgentPage from './components/AIAgent/AIAgentPage';
import AIFoundryPage from './components/AIFoundry/AIFoundryPage';
import ModernWorkplacePage from './components/ModernWorkplace/ModernWorkplacePage';
import CloudServicePage from './components/Cloud/CloudServicePage';
import SystemIntegration from './components/Systems/SystemIntegration';
import CaseStudyDetail from './components/CaseStudy/CaseStudyDetail';
import Contact from './components/Contact/Contact';
import AboutUs from './components/About/AboutUs';
import DemoModal from './components/Shared/DemoModal';
import Footer from './components/Layout/Footer';

const AppContent: React.FC = () => {
  const { isDemoOpen, openDemo, closeDemo } = useContent();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Fix: Pass onBookDemo prop to route components that require it */}
          <Route path="/supermagic" element={<SuperMagicPage onBookDemo={openDemo} />} />
          <Route path="/ai-agent" element={<AIAgentPage onBookDemo={openDemo} />} />
          <Route path="/ai-foundry" element={<AIFoundryPage />} />
          <Route path="/modern-workplace" element={<ModernWorkplacePage onBookDemo={openDemo} />} />
          <Route path="/cloud/:id" element={<CloudServicePage onBookDemo={openDemo} />} />
          <Route path="/systems" element={<SystemIntegration />} />
          <Route path="/case/:id" element={<CaseStudyDetail onBookDemo={openDemo} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <Router>
        <AppContent />
      </Router>
    </ContentProvider>
  );
};

export default App;
