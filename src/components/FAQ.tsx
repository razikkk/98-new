import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../data/servicesData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-studio-border bg-paper-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-2">
            ● Common Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tighter text-studio-black">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-studio-muted mt-3">
            Everything you need to know about working with 98studio, billing, IP ownership and delivery.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isOpen 
                    ? 'border-zinc-400 bg-white shadow-sm' 
                    : 'border-studio-border bg-white/70 hover:border-zinc-300'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none gap-4"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-accent font-bold">
                      0{index + 1}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-studio-black">
                      {item.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                    isOpen 
                      ? 'bg-studio-black text-white border-studio-black' 
                      : 'border-studio-border bg-paper-100 text-studio-black'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 border-t border-studio-border/60">
                        <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
