
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/Home/Home';
import SuperMagicPage from './components/SuperMagic/SuperMagicPage';
import CloudServicePage from './components/Cloud/CloudServicePage';
import SystemIntegration from './components/Systems/SystemIntegration';
import Contact from './components/Contact/Contact';
import AboutUs from './components/About/AboutUs';
import AIAssistant from './components/Shared/AIAssistant';
import DemoModal from './components/Shared/DemoModal';
import Footer from './components/Layout/Footer';

const App: React.FC = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openAssistant = () => setIsAssistantOpen(true);
  const openDemoModal = () => setIsDemoModalOpen(true);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onBookDemo={openDemoModal} />
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home onBookDemo={openDemoModal} />} />
            <Route path="/supermagic" element={<SuperMagicPage onConsult={openAssistant} onBookDemo={openDemoModal} />} />
            <Route path="/cloud/:id" element={<CloudServicePage onConsult={openAssistant} />} />
            <Route path="/systems" element={<SystemIntegration />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        
        <AIAssistant 
          isOpen={isAssistantOpen} 
          setIsOpen={setIsAssistantOpen}
          onBookDemo={openDemoModal}
        />

        <DemoModal 
          isOpen={isDemoModalOpen} 
          onClose={() => setIsDemoModalOpen(false)} 
        />
      </div>
    </Router>
  );
};

export default App;
