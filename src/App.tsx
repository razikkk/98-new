import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CalendlyModal } from './components/CalendlyModal';
import { HomePage } from './pages/HomePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ServiceItem } from './types';

// ScrollToTop helper for route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState<ServiceItem | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenCalendly = () => {
    setSelectedServicePreset(null);
    setIsCalendlyOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServicePreset(service);
    setIsCalendlyOpen(true);
  };

  return (
    <div className="min-h-screen bg-paper-100 text-studio-black selection:bg-accent selection:text-white flex flex-col font-sans">
      <ScrollToTop />
      
      {/* Floating Minimal Navigation Bar */}
      <Navbar onOpenCalendly={handleOpenCalendly} />

      {/* Main Routes */}
      <div className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenCalendly={handleOpenCalendly} 
                onSelectService={handleSelectService} 
              />
            } 
          />
          <Route 
            path="/work/:slug" 
            element={<CaseStudyPage onOpenCalendly={handleOpenCalendly} />} 
          />
          <Route 
            path="*" 
            element={
              <HomePage 
                onOpenCalendly={handleOpenCalendly} 
                onSelectService={handleSelectService} 
              />
            } 
          />
        </Routes>
      </div>

      {/* Editorial Footer */}
      <Footer onOpenCalendly={handleOpenCalendly} />

      {/* Calendly Scheduling & Scope Estimator Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        selectedServicePreset={selectedServicePreset}
      />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
