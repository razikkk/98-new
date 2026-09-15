import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string | null>('custom-software');

  const toggleService = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-studio-border bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-studio-border gap-4">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-2">
              ● Capabilities & Pricing
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tighter text-studio-black">
              What we build
            </h2>
          </div>

          <div className="text-sm font-mono text-studio-muted">
            <span className="text-accent font-semibold">Transparent starting prices</span> · Final scope quoted after discovery
          </div>
        </div>

        {/* Expandable Accordion Rows */}
        <div className="border-t border-studio-border divide-y divide-studio-border">
          {SERVICES_DATA.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div 
                key={service.id} 
                className={`transition-colors duration-200 ${
                  isExpanded ? 'bg-paper-100/70' : 'hover:bg-paper-50'
                }`}
              >
                {/* Row Header */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full py-6 sm:py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <div className="flex items-start sm:items-center space-x-4 sm:space-x-8">
                    <span className="font-mono text-sm sm:text-base font-semibold text-studio-subtle w-8">
                      {service.number}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-studio-black tracking-tight">
                          {service.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-paper-200 text-studio-muted border border-studio-border/60">
                          {service.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-studio-muted font-normal max-w-xl">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end space-x-6 pl-12 md:pl-0">
                    <div className="text-right">
                      <div className="font-display font-bold text-base sm:text-lg text-studio-black">
                        {service.startingPrice}
                      </div>
                      <div className="text-[11px] font-mono text-studio-subtle">
                        {service.timeline}
                      </div>
                    </div>

                    <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                      isExpanded 
                        ? 'bg-accent border-accent text-white rotate-180' 
                        : 'border-studio-border bg-white text-studio-black hover:border-studio-black'
                    }`}>
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Drawer */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-8 pt-2">
                        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-studio-border shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Overview */}
                          <div className="lg:col-span-1 space-y-4">
                            <div className="text-xs font-mono font-semibold uppercase text-accent">
                              Scope Overview
                            </div>
                            <p className="text-sm text-studio-muted leading-relaxed">
                              {service.description}
                            </p>

                            <div className="pt-2">
                              <button
                                onClick={() => onSelectService(service)}
                                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-accent hover:bg-accent-hover text-white transition-all shadow-md shadow-accent/20"
                              >
                                <span>Book {service.title}</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Deliverables */}
                          <div className="lg:col-span-1 space-y-3">
                            <div className="text-xs font-mono font-semibold uppercase text-studio-black">
                              Included Deliverables
                            </div>
                            <ul className="space-y-2">
                              {service.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-xs text-studio-muted">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Specs & Stack */}
                          <div className="lg:col-span-1 space-y-4 bg-paper-100 p-5 rounded-xl border border-studio-border/80">
                            <div>
                              <div className="text-[11px] font-mono text-studio-subtle uppercase">Target Delivery Window</div>
                              <div className="text-sm font-semibold text-studio-black mt-0.5 flex items-center space-x-1.5">
                                <Clock className="w-3.5 h-3.5 text-accent" />
                                <span>{service.timeline}</span>
                              </div>
                            </div>

                            <div>
                              <div className="text-[11px] font-mono text-studio-subtle uppercase">Primary Technology Stack</div>
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {service.techStack.map((tech, i) => (
                                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-studio-border text-studio-black">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-2 border-t border-studio-border text-[11px] font-mono text-studio-subtle">
                              * Code repository, designs and credentials handed over 100% on launch.
                            </div>
                          </div>
                        </div>
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
