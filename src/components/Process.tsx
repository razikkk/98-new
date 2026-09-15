import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Terminal, FileCode } from 'lucide-react';
import { PROCESS_DATA } from '../data/servicesData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-studio-border bg-paper-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-studio-border gap-4">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-2">
              ● Engineering Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tighter text-studio-black">
              How we work
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-studio-muted font-normal">
            A battle-tested 5-stage sprint methodology designed to eliminate ambiguity, ship on time, and build software that scales.
          </p>
        </div>

        {/* Interactive Step Switcher for Mobile & Desktop */}
        <div className="grid grid-cols-5 gap-2 pb-6 border-b border-studio-border/80 overflow-x-auto">
          {PROCESS_DATA.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`py-3 px-3 sm:px-4 rounded-xl text-left transition-all font-mono ${
                  isActive
                    ? 'bg-studio-black text-white shadow-lg shadow-black/10'
                    : 'bg-white border border-studio-border text-studio-muted hover:border-zinc-400'
                }`}
              >
                <div className={`text-xs ${isActive ? 'text-accent font-bold' : 'text-studio-subtle'}`}>
                  {step.step}
                </div>
                <div className="text-xs sm:text-sm font-semibold truncate mt-0.5">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Spotlight Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 p-6 sm:p-10 rounded-2xl border border-studio-border bg-white shadow-xl shadow-black/[0.02]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Metadata & Number */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-4xl sm:text-5xl font-display font-extrabold text-accent">
                  {PROCESS_DATA[activeStep].step}
                </span>
                <div>
                  <div className="text-xs font-mono uppercase text-studio-subtle">Sprint Phase</div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-studio-black">
                    {PROCESS_DATA[activeStep].title}
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-paper-200 text-xs font-mono text-studio-black">
                <span>Pacing:</span>
                <span className="font-semibold text-accent">{PROCESS_DATA[activeStep].duration}</span>
              </div>

              <p className="text-sm sm:text-base text-studio-black font-semibold leading-snug">
                "{PROCESS_DATA[activeStep].headline}"
              </p>

              <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                {PROCESS_DATA[activeStep].description}
              </p>
            </div>

            {/* Key Deliverables & Actions */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-paper-100 p-6 sm:p-8 rounded-xl border border-studio-border/80">
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase font-bold text-studio-black tracking-wider flex items-center space-x-2">
                  <Terminal className="w-3.5 h-3.5 text-accent" />
                  <span>Key Activities</span>
                </div>
                <ul className="space-y-2.5">
                  {PROCESS_DATA[activeStep].keyActions.map((action, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-studio-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono uppercase font-bold text-studio-black tracking-wider flex items-center space-x-2">
                  <FileCode className="w-3.5 h-3.5 text-accent" />
                  <span>Artifacts & Outputs</span>
                </div>
                <ul className="space-y-2.5">
                  {PROCESS_DATA[activeStep].deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-studio-black font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5-Step Process Timeline Cards Below */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_DATA.map((item, index) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(index)}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                activeStep === index
                  ? 'border-accent bg-white shadow-md'
                  : 'border-studio-border bg-white/70 hover:border-zinc-400'
              }`}
            >
              <div className="font-mono text-xs font-bold text-accent mb-1">{item.step}</div>
              <h4 className="font-display font-bold text-sm text-studio-black">{item.title}</h4>
              <p className="text-xs text-studio-muted mt-1 line-clamp-2">{item.headline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
