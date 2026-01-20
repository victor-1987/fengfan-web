
import React from 'react';
import Hero from './Hero';
import Features from './Features';
import CaseStudies from './CaseStudies';
import FeatureMatrix from './FeatureMatrix';

interface HomeProps {
  onConsult: () => void;
}

const Home: React.FC<HomeProps> = ({ onConsult }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <Features />
      <CaseStudies />
      <FeatureMatrix onConsult={onConsult} />
    </div>
  );
};

export default Home;
