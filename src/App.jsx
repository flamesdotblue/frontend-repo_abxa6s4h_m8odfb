import React from 'react';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import AppPreview from './components/AppPreview.jsx';
import FooterCTA from './components/FooterCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F0FF] via-white to-white text-slate-900">
      <Hero />
      <FeatureGrid />
      <AppPreview />
      <FooterCTA />
    </div>
  );
}

export default App;
