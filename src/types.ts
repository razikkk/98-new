export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  year: string;
  client: string;
  timeline: string;
  role: string;
  deliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string; detail?: string }[];
  summary: string;
  challenge: string;
  solution: string;
  architectureDetails: {
    title: string;
    description: string;
    points: string[];
  }[];
  accentColor?: string;
  previewType: 'dashboard' | 'ecommerce' | 'saas' | 'editorial';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  startingPrice: string;
  rawPrice: number;
  tag: string;
  summary: string;
  description: string;
  deliverables: string[];
  timeline: string;
  techStack: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  headline: string;
  description: string;
  duration: string;
  deliverables: string[];
  keyActions: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
