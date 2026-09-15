import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nexus-enterprise',
    slug: 'nexus-enterprise',
    title: 'Nexus Enterprise OS',
    category: 'Custom Business Platform',
    tagline: 'High-concurrency ERP & multi-facility logistics engine built for global supply chain operations.',
    year: '2026',
    client: 'Nexus Supply Technologies',
    timeline: '10 Weeks Sprint',
    role: 'Full-Stack Architecture, Design System & Cloud Infrastructure',
    deliverables: [
      'Multi-tenant Logistics ERP',
      'Real-time Warehouse Telemetry Engine',
      'Automated Customs Invoicing Subsystem',
      'Role-based Access Governance (RBAC)',
      'Offline-capable Warehouse PWA'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis', 'WebSockets', 'Docker'],
    metrics: [
      { label: 'Dispatch Latency', value: '-68%', detail: 'Reduced order routing from 18m to under 5.7m' },
      { label: 'Active Warehouses', value: '42 Hubs', detail: 'Synchronized globally with zero-downtime failover' },
      { label: 'Daily Throughput', value: '$2.4M', detail: 'Processed without concurrency locks or queue backup' },
      { label: 'Uptime Score', value: '99.98%', detail: 'Battle-tested continuous SLA over 9 months' }
    ],
    summary: 'Nexus needed to replace three legacy disconnected internal tools with a single unified, ultra-fast operating platform to manage cross-border inventory and multi-depot fleet movements.',
    challenge: 'The existing stack suffered from data drift across distributed warehouses, 45-second report generation latencies, and high human error rates during peak customs clearing shifts.',
    solution: 'We architected an event-driven, real-time operating dashboard using React and WebSockets with optimistic UI updates. The interface prioritizes rapid keyboard navigation, dense data grids with zero-lag virtualized scrolling, and instant ledger reconciliations.',
    architectureDetails: [
      {
        title: 'Optimistic Event Architecture',
        description: 'Instant local updates with transactional rollbacks on edge network anomalies.',
        points: ['Client-side SQLite sync for offline warehouse barcode scanners', 'WebSocket-based state broadcast to all connected dispatcher screens', 'Sub-20ms distributed lock resolution using Redis Streams']
      },
      {
        title: 'High-Density Editorial UI',
        description: 'Custom design system tailored for industrial high-contrast lighting environments.',
        points: ['Vim-style rapid keyboard shortcuts for dispatchers', 'Color-coded exception tracking with high-contrast safety standards', 'Dynamic grid layouts with column persistence per operator']
      }
    ],
    previewType: 'dashboard'
  },
  {
    id: 'aura-commerce',
    slug: 'aura-commerce',
    title: 'Aura Commerce',
    category: 'E-commerce System',
    tagline: 'Headless luxury commerce experience with sub-50ms page transitions and interactive 3D configurator.',
    year: '2026',
    client: 'Maison d’Aura Luxury Group',
    timeline: '6 Weeks Sprint',
    role: 'Headless Commerce Architecture, Creative Development & Performance Optimization',
    deliverables: [
      'Headless Shopify Storefront',
      'Interactive 3D Product Canvas & Configurator',
      'Dynamic Currency & Geolocation Engine',
      'Custom One-Click Checkout Flow',
      'Predictive Search & Algorithmic Merchandising'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API', 'WebGL / Three.js', 'Stripe', 'Vercel Edge'],
    metrics: [
      { label: 'Conversion Lift', value: '+44.2%', detail: 'Mobile conversion skyrocketed post-launch' },
      { label: 'Page Load (TTFB)', value: '38ms', detail: 'Edge-cached across 280 global PoPs' },
      { label: 'Average Order Value', value: '+$140', detail: 'Driven by seamless custom bundle configurator' },
      { label: 'Lighthouse Score', value: '99/100', detail: 'Perfect mobile Core Web Vitals across all pages' }
    ],
    summary: 'Aura sought to disrupt standard luxury retail by offering an editorial, cinematic browsing experience paired with checkout speeds that rival native mobile apps.',
    challenge: 'Luxury buyers were abandoning cart flows on standard e-commerce templates due to clunky image carousels, slow variant switching, and disjointed payment gateways.',
    solution: 'We engineered a bespoke headless storefront utilizing edge SSR and instant pre-fetching. Every product transition feels instantaneous, accompanied by smooth kinetic scrolling, tactile micro-animations, and a one-click customized checkout flow.',
    architectureDetails: [
      {
        title: 'Edge-Computed Storefront',
        description: 'Zero-latency dynamic localization, currency switching, and instant inventory checks.',
        points: ['Sub-50ms dynamic edge routing via Vercel Edge Runtime', 'Custom cart synchronization with localized tax and customs calculation', 'Micro-caching layer preventing stock race conditions']
      },
      {
        title: 'Cinematic Editorial Experience',
        description: 'Merging editorial fashion typography with high-octane commerce interactions.',
        points: ['Smooth kinetic scrolling with Lenis physics', 'Dynamic WebGL ambient product glow reactions on cursor hover', 'Keyboard-accessible quick-buy modal drawers']
      }
    ],
    previewType: 'ecommerce'
  },
  {
    id: 'pulse-metrics',
    slug: 'pulse-metrics',
    title: 'PulseMetrics AI',
    category: 'SaaS Product',
    tagline: 'Predictive revenue intelligence & cohort churn analytics platform for high-velocity SaaS teams.',
    year: '2026',
    client: 'Pulse Intelligence Inc.',
    timeline: '8 Weeks Sprint',
    role: 'Product Strategy, UI/UX Systems & High-Scale Analytics Dashboard',
    deliverables: [
      'SaaS MVP from concept to launch',
      'Real-time Cohort Retention Engine',
      'Custom Metric Formula Builder',
      'Stripe & Chargebee Data Pipeline Ingestors',
      'Automated Slack/Email Alerting Subsystem'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'ClickHouse', 'Node.js', 'FastAPI', 'AWS ECS'],
    metrics: [
      { label: 'Data Points / Day', value: '140M+', detail: 'Streamed and parsed without ingestion lag' },
      { label: 'Query Execution', value: '< 95ms', detail: 'On 5-year multi-billion row historical datasets' },
      { label: 'ARR Managed', value: '$85M+', detail: 'Tracked across early-access venture portfolios' },
      { label: 'Beta Retention', value: '89%', detail: 'Weekly active usage among VP Finance leaders' }
    ],
    summary: 'PulseMetrics needed to build and launch their core analytics MVP to secure their next growth round and win early enterprise pilots.',
    challenge: 'Existing analytics platforms were either too complex to set up or too sluggish to query millions of payment webhook events in real-time.',
    solution: '98studio designed and coded the entire product from the ground up in 8 weeks. We combined an ultra-sleek dark theme UI with lightning-fast columnar database querying, allowing users to build custom retention queries in under 3 seconds.',
    architectureDetails: [
      {
        title: 'Columnar Query Pipeline',
        description: 'Bypassing slow relational SQL queries with pre-aggregated ClickHouse analytical schemas.',
        points: ['Real-time streaming ingestion queue with dead-letter recovery', 'Interactive visual query builder with syntax auto-complete', 'Instant CSV/Parquet export generation at 100k rows/sec']
      },
      {
        title: 'Product-Led Onboarding Flow',
        description: 'Frictionless 3-minute connection wizard with instant data preview.',
        points: ['OAuth connection to Stripe with real-time sync progress bar', 'Pre-configured retention templates for B2B SaaS and consumer apps', 'Interactive demo workspace for instant product exploration']
      }
    ],
    previewType: 'saas'
  },
  {
    id: 'vanguard-capital',
    slug: 'vanguard-capital',
    title: 'Vanguard Capital',
    category: 'Commercial Website',
    tagline: 'Bespoke editorial digital flagship & private asset portal for a $200M quantitative investment fund.',
    year: '2026',
    client: 'Vanguard Alpha Partners',
    timeline: '4 Weeks Sprint',
    role: 'Brand Digital Identity, Creative Web Engineering & Investor Portal',
    deliverables: [
      'Editorial Commercial Website',
      'Interactive Portfolio Simulation Tool',
      'Password-protected Limited Partner (LP) Room',
      'Custom Markdown Editorial Research CMS',
      'Automated Investor Inbound Pipeline'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'Supabase Auth', 'Resend API'],
    metrics: [
      { label: 'Qualified Inbounds', value: '+310%', detail: 'Institutional LP meeting requests in 60 days' },
      { label: 'Time on Page', value: '4m 12s', detail: '3.8x above financial industry benchmark' },
      { label: 'Asset Portal Access', value: '100%', detail: 'Encrypted document delivery with zero breaches' },
      { label: 'Design Awards', value: '3 Nominations', detail: 'Recognized for typography & motion design' }
    ],
    summary: 'Vanguard Alpha wanted to depart from stuffy institutional banking templates and establish an authoritative, cutting-edge editorial presence.',
    challenge: 'Traditional financial sites fail to communicate technological prowess or retain the attention of modern sovereign wealth fund managers and family office allocators.',
    solution: 'We engineered a refined, publication-grade digital flagship combining rigorous typographic hierarchy, smooth kinetic scroll pacing, and interactive yield visualizations that command instant credibility.',
    architectureDetails: [
      {
        title: 'High-Touch Investor Experience',
        description: 'Ultra-secure, frictionless access for verified institutional allocators.',
        points: ['Passwordless magic-link authentication via Supabase', 'Watermarked PDF dynamic rendering engine for quarterly letters', 'Interactive macro-economic thesis explorer']
      },
      {
        title: 'Publication-Grade Typography',
        description: 'Bespoke layout engine with dynamic micro-interactions and smooth reveals.',
        points: ['Staggered split-text animations with Framer Motion', 'Adaptive dark-mode investor presentation mode', 'Zero-layout-shift responsive performance']
      }
    ],
    previewType: 'editorial'
  }
];
