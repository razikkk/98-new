import React from 'react';
import { motion } from 'framer-motion';

export const Metrics: React.FC = () => {
  const metrics = [
    { value: '20+', label: 'Projects delivered', note: 'Across US, EU & India' },
    { value: '1+', label: 'Year building', note: 'Rapid venture execution' },
    { value: '5', label: 'Core services', note: 'Full lifecycle software' },
    { value: '∞', label: 'Ideas turned into products', note: 'Zero template bloat' },
  ];

  const technologies = [
    'React 19',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Python',
    'PostgreSQL',
    'Supabase',
    'Tailwind CSS',
    'Docker',
    'AWS Cloud',
    'Stripe',
    'Framer Motion'
  ];

  return (
    <section className="border-b border-studio-border bg-white">
      {/* Metrics Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-studio-border">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
            >
              <div className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tighter text-studio-black">
                {item.value === '∞' ? (
                  <span className="text-accent">{item.value}</span>
                ) : (
                  item.value
                )}
              </div>
              <div className="mt-4">
                <div className="text-sm sm:text-base font-semibold text-studio-black">
                  {item.label}
                </div>
                <div className="text-xs font-mono text-studio-subtle mt-0.5">
                  {item.note}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack Marquee / Architectural Proof */}
      <div className="border-t border-studio-border py-4 px-4 overflow-hidden bg-paper-100 flex items-center">
        <div className="text-xs font-mono text-studio-muted uppercase tracking-wider font-semibold whitespace-nowrap pr-6 border-r border-studio-border hidden sm:block">
          Engineered With:
        </div>
        <div className="relative flex overflow-x-hidden flex-1">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-8 text-xs font-mono text-studio-muted">
            {technologies.concat(technologies).map((tech, i) => (
              <span key={i} className="inline-flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <span className="text-studio-black font-medium">{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
