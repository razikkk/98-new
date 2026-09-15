import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Cpu, Layers, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/servicesData';

export const About: React.FC<{ onOpenCalendly: () => void }> = ({ onOpenCalendly }) => {
  const iconMap: Record<string, any> = {
    Compass,
    Cpu,
    Layers,
    TrendingUp
  };

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-studio-border bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-studio-border gap-4">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-2">
              ● Why 98studio
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tighter text-studio-black">
              Engineering Built on Conviction
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-studio-muted font-normal">
            We are senior software creators who believe great software is an unfair business advantage.
          </p>
        </div>

        {/* 4 Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName] || Sparkles;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 sm:p-10 rounded-2xl border border-studio-border bg-paper-100 flex flex-col justify-between hover:border-zinc-400 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent/10">
                      PILLAR {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-studio-border flex items-center justify-center text-studio-black">
                      <Icon className="w-5 h-5 text-studio-black" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-studio-black tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-studio-border/60 flex items-center space-x-2 text-xs font-mono text-studio-black font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Standard 98studio Protocol</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Manifesto Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-studio-black text-white text-left relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-accent uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The 98studio Standard</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white leading-tight">
              "No junior developer handoffs. No outsourced code spaghetti. Just high-velocity execution with senior creators."
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono pt-2">
              Every project is led by experienced principal developers and product designers directly accountable for your business results.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenCalendly}
                className="px-6 py-3 rounded-full text-xs font-semibold bg-accent hover:bg-accent-hover text-white transition-colors"
              >
                Schedule Direct Principal Call ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
