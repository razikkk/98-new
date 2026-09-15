import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-software',
    number: '01',
    title: 'Custom Software',
    startingPrice: 'Starting from $2,500',
    rawPrice: 2500,
    tag: 'Enterprise & Operations',
    summary: 'Software built around the way your business actually works.',
    description: 'We architect and build tailored web applications, internal enterprise tools, automated workflow systems, and high-volume data engines engineered to eliminate operational bottlenecks.',
    deliverables: [
      'Tailored business workflow automation',
      'High-performance PostgreSQL / SQLite database design',
      'Role-based permissions & audit log infrastructure',
      'Custom third-party API & hardware integrations',
      'Complete documentation & automated test suites'
    ],
    timeline: '4 – 8 Weeks Delivery',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS']
  },
  {
    id: 'saas-mvps',
    number: '02',
    title: 'SaaS MVPs',
    startingPrice: 'Starting from $3,500',
    rawPrice: 3500,
    tag: 'Product & Startups',
    summary: 'From product idea to a working MVP ready for real users.',
    description: 'Turn your market hypothesis into a production-grade SaaS product ready for paying customers. We handle everything from UI/UX design to authentication, billing, multi-tenancy, and onboarding.',
    deliverables: [
      'Production-grade multi-tenant architecture',
      'Stripe / LemonSqueezy / Razorpay billing & subscription lifecycle',
      'User auth, invite systems & team workspaces',
      'Interactive analytics dashboard & usage metrics',
      'Product Hunt / Launch-ready marketing landing page'
    ],
    timeline: '4 – 6 Weeks Sprint',
    techStack: ['Next.js / React', 'TypeScript', 'Supabase / PostgreSQL', 'Stripe', 'Tailwind CSS', 'Vercel']
  },
  {
    id: 'mobile-apps',
    number: '03',
    title: 'Mobile Apps',
    startingPrice: 'Starting from $2,000',
    rawPrice: 2000,
    tag: 'iOS & Android',
    summary: 'Production-ready mobile experiences for iOS and Android.',
    description: 'Cross-platform mobile applications with native feel, 120fps fluid gesture interactions, offline-first synchronization, and seamless app store deployment.',
    deliverables: [
      'Unified iOS & Android codebase (React Native / Expo)',
      'Offline-first data sync & local caching',
      'Push notification engine (APNs / FCM)',
      'Biometric authentication & in-app purchases',
      'Full App Store & Google Play submission assistance'
    ],
    timeline: '4 – 8 Weeks Delivery',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Tailwind NativeWind', 'Supabase', 'RevenueCat']
  },
  {
    id: 'ai-automations',
    number: '04',
    title: 'AI & Workflow Automations',
    startingPrice: 'Starting from $1,500',
    rawPrice: 1500,
    tag: 'Automation & AI',
    summary: 'Custom AI agents and automated pipelines to remove manual friction.',
    description: 'We integrate LLMs, custom webhooks, vector databases, and multi-app API integrations to automate your lead handling, support tickets, internal reporting, and repetitive business tasks.',
    deliverables: [
      'Custom AI agents & LLM API integrations (OpenAI / Claude)',
      'Multi-app webhook pipelines (Make / n8n / Custom Node backend)',
      'Automated lead qualification & instant response workflows',
      'RAG systems for instant internal document search',
      'Automated weekly reporting & data sync between apps'
    ],
    timeline: '2 – 4 Weeks Delivery',
    techStack: ['Node.js', 'TypeScript', 'n8n', 'OpenAI API', 'Pinecone / Vector DB', 'Webhooks']
  },
  {
    id: 'crm-systems',
    number: '05',
    title: 'CRM & Business Systems',
    startingPrice: 'Starting from $2,200',
    rawPrice: 2200,
    tag: 'Internal Tools & Workflows',
    summary: 'Custom CRM, dashboards, workflows and internal tools.',
    description: 'Stop paying thousands monthly for bloated generic SaaS tools that only do half of what you need. We build custom CRMs and operational control centers tuned directly to your team’s exact pipeline.',
    deliverables: [
      'Custom lead & pipeline management boards',
      'Automated email, WhatsApp & SMS webhook notifications',
      'Custom KPI analytics & automated weekly executive reports',
      'Customer portal & self-service ticketing modules',
      'Direct sync with your accounting & ERP databases'
    ],
    timeline: '3 – 6 Weeks Delivery',
    techStack: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Node.js', 'Resend / Twilio']
  },
  {
    id: 'commercial-websites',
    number: '06',
    title: 'Commercial Websites',
    startingPrice: 'Starting from $500',
    rawPrice: 500,
    tag: 'High-Converting Web',
    summary: 'Premium websites designed to make your business look as good as it performs.',
    description: 'High-end, bespoke editorial websites with buttery smooth kinetic scroll, unmistakable typography, dynamic micro-interactions, and search engine optimization engineered to convert qualified enterprise buyers.',
    deliverables: [
      'Bespoke editorial art direction & custom layouts (No templates)',
      'Kinetic smooth scrolling & Framer Motion interactions',
      'Sub-50ms TTFB edge hosting & 99+ Lighthouse performance',
      'Headless CMS or easy markdown content management',
      'Comprehensive on-page technical SEO & structured data'
    ],
    timeline: '0-1 Week Sprint',
    techStack: ['React / Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'Vercel']
  }
];

export const PROCESS_DATA = [

  {
  
  step: '01',
  
  title: 'Discover',
  
  headline: 'We understand the business, users and actual problem.',
  
  description: 'We dig into your unit economics, current operational bottlenecks, competitive landscape, and user requirements to define an airtight product scope before writing a single line of code.',
  
  duration: 'Week 1',
  
  deliverables: ['Product Requirement Document (PRD)', 'Technical Architecture Map', 'Milestone & Delivery Roadmap'],
  
  keyActions: ['Stakeholder alignment session', 'System bottleneck audit', 'Scope & tech stack finalization']
  
  },
  
  {
  
  step: '02',
  
  title: 'Design',
  
  headline: 'We map the product, user experience and technical direction.',
  
  description: 'We create high-contrast, editorial wireframes and interactive UI prototypes focused on workflow speed, intuitive mental models, and unforgettable visual identity.',
  
  duration: 'Week 1 – 2',
  
  deliverables: ['Figma Design System & Components', 'Interactive Clickable Prototype', 'Database Schema Specification'],
  
  keyActions: ['High-contrast UI layout crafting', 'Micro-interaction design', 'Schema & API contract definition']
  
  },
  
  {
  
  step: '03',
  
  title: 'Build',
  
  headline: 'We develop the product with clean, scalable architecture.',
  
  description: 'We write clean, strictly typed TypeScript code with modular component architecture, automated tests, and continuous deployment previews so you can test weekly progress.',
  
  duration: 'Week 3 – 6',
  
  deliverables: ['Modular TypeScript Codebase', 'Live Staging Previews', 'Automated CI/CD Pipeline'],
  
  keyActions: ['Rapid weekly sprint cycles', 'Async Loom video walkthroughs', 'Continuous integration testing']
  
  },
  
  {
  
  step: '04',
  
  title: 'Launch',
  
  headline: 'We test, deploy and help you take it into the real world.',
  
  description: 'We perform end-to-end stress testing, harden production security, configure domain DNS and edge caching, and execute zero-downtime deployment to production.',
  
  duration: 'Week 7',
  
  deliverables: ['Production Edge Deployment', 'SSL & DNS Hardening', '100% IP & Source Code Transfer'],
  
  keyActions: ['Load testing & security review', 'Domain & infrastructure handover', 'Staff onboarding & walkthrough']
  
  },
  
  {
  
  step: '05',
  
  title: 'Improve',
  
  headline: 'We iterate based on real usage and business needs.',
  
  description: 'Post-launch, we monitor live error telemetry, user session recordings, and conversion funnels to rapidly iterate, squash edge bugs, and scale capacity as you grow.',
  
  duration: 'Ongoing Support',
  
  deliverables: ['30-Day Post-Launch Bug Warranty', 'Live Error Sentry Monitoring', 'Growth & Scaling Roadmap'],
  
  keyActions: ['Performance analytics review', 'Feature iteration prioritization', 'Ongoing maintenance retainers']
  
  }
  
  ];
  
  
  
  export const PHILOSOPHY_PILLARS = [
  
  {
  
  number: '01',
  
  title: 'Built around your business',
  
  description: "We don't force your business into a template or off-the-shelf theme. Every screen, data structure, and interaction is engineered specifically for how your team operates.",
  
  iconName: 'Compass'
  
  },
  
  {
  
  number: '02',
  
  title: 'Product thinking, not just coding',
  
  description: 'We care deeply about how the software works for the people using it. Code is just the medium; moving business metrics and delighting users is the objective.',
  
  iconName: 'Cpu'
  
  },
  
  {
  
  number: '03',
  
  title: 'One studio, end-to-end',
  
  description: 'Strategy, design system, full-stack development, and launch infrastructure all live in one tight team. No finger-pointing between designers and developers.',
  
  iconName: 'Layers'
  
  },
  
  {
  
  number: '04',
  
  title: 'Built to grow',
  
  description: 'Clean TypeScript, structured databases, modular components, and comprehensive documentation giving you an enduring foundation you can scale for years.',
  
  iconName: 'TrendingUp'
  
  }
  
  ];
  
  
  
  export const FAQ_DATA = [
  
  {
  
  category: 'Process & Timeline',
  
  question: 'How long does a typical project take?',
  
  answer: 'Commercial websites take between 0 - 1 week. Custom business systems, CRM workflows, and SaaS MVPs typically range from 4 to 8 weeks depending on the complexity of data schemas and integrations. We operate in rapid, focused sprints with weekly live staging builds.'
  
  },
  
  {
  
  category: 'Billing & Terms',
  
  question: 'How does payment and milestone billing work?',
  
  answer: 'We break projects into transparent, predictable milestone payments: typically 50% deposit upon kickoff, 25% at midway interactive staging approval, and 25% upon final production deployment and IP transfer. No hidden fees or surprise billings.'
  
  },
  
  {
  
  category: 'Ownership & IP',
  
  question: 'Do we own 100% of the source code and IP?',
  
  answer: 'Yes, absolutely. Once final payment is made, 100% full intellectual property, source code repositories, Figma designs, and deployment infrastructure credentials belong entirely to your company.'
  
  },
  
  // {
  
  // category: 'Communication',
  
  // question: 'How do we communicate during the build?',
  
  // answer: 'You receive access to a dedicated shared Slack or Discord channel with our lead developers, plus weekly async Loom video walkthroughs and staging links so you can test progress in real-time without getting bogged down in endless meetings.'
  
  // },
  
  {
  
  category: 'Support',
  
  question: 'What happens after the product launches?',
  
  answer: 'Every project includes an all-inclusive 30-day post-launch warranty where any bugs or edge cases are resolved immediately at zero cost. We also offer dedicated monthly support and feature scaling retainers for teams wanting continuous iteration.'
  
  }
  
  ];