import React from 'react';
import { Hero } from '../components/Hero';
import { Metrics } from '../components/Metrics';
// import { Work } from '../components/Work';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { About } from '../components/About';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { ServiceItem } from '../types';

interface HomePageProps {
  onOpenCalendly: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCalendly, onSelectService }) => {
  return (
    <main>
      <Hero onOpenCalendly={onOpenCalendly} />
      <Metrics />
      {/* <Work /> */}
      <Services onSelectService={onSelectService} />
      <Process />
      <About onOpenCalendly={onOpenCalendly} />
      <FAQ />
      <ContactSection onOpenCalendly={onOpenCalendly} />
    </main>
  );
};
