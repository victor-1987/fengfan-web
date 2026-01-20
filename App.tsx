
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/Home/Home';
import CloudServicePage from './components/Cloud/CloudServicePage';
import SystemIntegration from './components/Systems/SystemIntegration';
import Contact from './components/Contact/Contact';
import AboutUs from './components/About/AboutUs';
import AIAssistant from './components/Shared/AIAssistant';
import Footer from './components/Layout/Footer';

const App: React.FC = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const openAssistant = () => setIsAssistantOpen(true);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home onConsult={openAssistant} />} />
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
        />
      </div>
    </Router>
  );
};

export default App;
