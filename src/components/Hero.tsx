import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight,  Check } from 'lucide-react';
import { HeroConsole } from './HeroConsole';

interface HeroProps {
  onOpenCalendly: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalendly }) => {
  // const scrollToWork = () => {
  //   const el = document.getElementById('work');
  //   if (el) {
  //     el.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 border-b border-studio-border overflow-hidden">
      {/* Background Editorial Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-studio-black/[0.02] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-studio-border bg-white shadow-sm mb-6 sm:mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="text-xs font-mono font-medium text-studio-black tracking-tight">
            Available for new projects · Q2/Q3 2026
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-paper-200 text-studio-muted font-semibold">
            Sprint Open
          </span>
        </motion.div>

        {/* Huge Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-5xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold tracking-tighter leading-[0.96] text-studio-black">
            We build software that{' '}
            <span className="relative inline-block text-accent underline decoration-accent/30 underline-offset-8">
              moves businesses forward.
            </span>
          </h1>
        </motion.div>

        {/* Supporting Copy & Key Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 sm:mt-8 max-w-2xl"
        >
          <p className="text-base sm:text-xl text-studio-muted leading-relaxed font-normal">
            <strong className="text-studio-black font-semibold">98studio</strong> is an independent software agency building custom digital products, SaaS MVPs, mobile apps, CRMs, Automations and commercial websites for businesses ready to move faster.
          </p>

          {/* Micro Value Proposition Badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5 text-xs font-mono text-studio-muted">
            <span className="flex items-center space-x-1.5">
              <Check className="w-3.5 h-3.5 text-accent" />
              <span>100% IP & Code Ownership</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Check className="w-3.5 h-3.5 text-accent" />
              <span>Fixed Milestone Pricing</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Check className="w-3.5 h-3.5 text-accent" />
              <span>Direct Senior Engineers</span>
            </span>
          </div>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={onOpenCalendly}
            className="group inline-flex items-center space-x-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold bg-studio-black text-white hover:bg-accent hover:shadow-xl hover:shadow-accent/25 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Schedule Discovery Call</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* <button
            onClick={scrollToWork}
            className="inline-flex items-center space-x-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-sm font-medium text-studio-black bg-white border border-studio-border hover:bg-paper-200 hover:border-zinc-400 transition-all duration-200"
          >
            <span>View Selected Work</span>
            <ArrowDown className="w-4 h-4 text-studio-muted" />
          </button> */}
        </motion.div>

        {/* HERO VISUAL ASSET: Custom Live Studio Console */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroConsole onOpenCalendly={onOpenCalendly} />
        </motion.div>
      </div>
    </section>
  );
};
