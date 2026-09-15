import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3 } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  project: CaseStudy;
  index: number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ project, index }) => {
  // Render bespoke simulated high-fidelity dark UI mockup per project type
  const renderMockup = () => {
    switch (project.previewType) {
      case 'dashboard':
        return (
          <div className="w-full h-full bg-[#0B0B0E] p-4 sm:p-6 flex flex-col justify-between font-mono text-white text-xs select-none">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="text-[11px] text-zinc-400 pl-2">nexus-os // warehouse-telemetry.cluster</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 text-[10px] border border-emerald-800/40">
                P99: 18ms
              </span>
            </div>

            {/* Dashboard Mock Body */}
            <div className="grid grid-cols-3 gap-3 my-3">
              <div className="bg-[#14141A] p-3 rounded-lg border border-zinc-800">
                <span className="text-zinc-500 text-[10px]">Active Hubs</span>
                <div className="text-lg font-bold text-white mt-1">42 / 42</div>
                <div className="text-[9px] text-emerald-400 mt-0.5">● 100% In Sync</div>
              </div>
              <div className="bg-[#14141A] p-3 rounded-lg border border-zinc-800">
                <span className="text-zinc-500 text-[10px]">Queue Depth</span>
                <div className="text-lg font-bold text-accent mt-1">0 Pending</div>
                <div className="text-[9px] text-zinc-400 mt-0.5">Live Stream</div>
              </div>
              <div className="bg-[#14141A] p-3 rounded-lg border border-zinc-800">
                <span className="text-zinc-500 text-[10px]">Daily Flow</span>
                <div className="text-lg font-bold text-white mt-1">$2.4M</div>
                <div className="text-[9px] text-emerald-400 mt-0.5">Automated</div>
              </div>
            </div>

            {/* Live Data Grid */}
            <div className="bg-[#111116] rounded-lg border border-zinc-800 p-3 space-y-2">
              <div className="flex justify-between text-[10px] text-zinc-500 border-b border-zinc-800/80 pb-1">
                <span>CONSIGNMENT ID</span>
                <span>ORIGIN → DEST</span>
                <span>STATUS</span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-300">
                <span className="text-accent font-semibold">#NX-88392-A</span>
                <span>SGP_HUB_04 → BLR_DEPOT</span>
                <span className="text-emerald-400">DISPATCHED</span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-300">
                <span className="text-accent font-semibold">#NX-88393-K</span>
                <span>FRA_AIRPORT → DXB_CENTRAL</span>
                <span className="text-blue-400">CUSTOMS_CLEARED</span>
              </div>
            </div>
          </div>
        );

      case 'ecommerce':
        return (
          <div className="w-full h-full bg-[#0A0A0C] p-4 sm:p-6 flex flex-col justify-between font-sans text-white select-none">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="font-editorial text-sm tracking-widest uppercase font-bold text-zinc-200">MAISON D'AURA</span>
              <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400">
                <span>CURRENCY: EUR €</span>
                <span className="px-2 py-0.5 rounded bg-accent/20 text-accent border border-accent/40 font-semibold">BAG (2)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 my-auto items-center">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-accent uppercase tracking-wider font-semibold">Collection Nº 04</span>
                <h4 className="text-lg font-display font-bold text-white tracking-tight leading-snug">Monolith Obsidian Chronometer</h4>
                <div className="text-sm font-mono text-zinc-300 font-semibold">€3,450.00</div>
                <div className="flex items-center space-x-2 pt-2">
                  <span className="px-3 py-1 rounded bg-white text-black text-xs font-bold font-mono">1-CLICK CHECKOUT</span>
                  <span className="text-[10px] font-mono text-zinc-400">38ms TTFB</span>
                </div>
              </div>

              <div className="h-36 rounded-xl bg-gradient-to-br from-[#1C1C22] to-[#121216] border border-zinc-700/60 p-4 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="w-20 h-20 rounded-full border-2 border-accent/40 flex items-center justify-center bg-zinc-900/80 shadow-lg shadow-accent/10">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs text-accent">
                    3D OBJ
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 mt-2">Interactive WebGL 360º View</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-800">
              <span>Next.js Edge Storefront</span>
              <span className="text-emerald-400">Conversion +44.2%</span>
            </div>
          </div>
        );

      case 'saas':
        return (
          <div className="w-full h-full bg-[#08080A] p-4 sm:p-6 flex flex-col justify-between font-mono text-white select-none">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold tracking-tight text-zinc-200">PulseMetrics // Intelligence Console</span>
              </div>
              <span className="text-[10px] text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">Real-Time Ingestion</span>
            </div>

            <div className="space-y-3 my-2">
              <div className="flex items-center justify-between bg-[#121216] p-3 rounded-lg border border-zinc-800">
                <div>
                  <div className="text-[10px] text-zinc-400">Predictive Net Retention</div>
                  <div className="text-xl font-bold text-white mt-0.5">134.8%</div>
                </div>
                <div className="h-10 w-32 flex items-end gap-1">
                  {[30, 45, 60, 50, 75, 90, 85, 98].map((val, i) => (
                    <div key={i} className="flex-1 bg-accent/80 rounded-t" style={{ height: `${val}%` }} />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#121216] p-2.5 rounded border border-zinc-800">
                  <span className="text-zinc-500 text-[10px]">MRR Tracked</span>
                  <div className="font-bold text-white">$482,000</div>
                </div>
                <div className="bg-[#121216] p-2.5 rounded border border-zinc-800">
                  <span className="text-zinc-500 text-[10px]">Churn Risk AI</span>
                  <div className="font-bold text-emerald-400">0.8% (Very Low)</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-zinc-800">
              <span>ClickHouse Engine · 95ms Query</span>
              <span className="text-accent font-semibold">140M+ Events/Day</span>
            </div>
          </div>
        );

      case 'editorial':
        return (
          <div className="w-full h-full bg-[#FAFAF8] text-studio-black p-4 sm:p-6 flex flex-col justify-between font-sans select-none border border-studio-border">
            <div className="flex items-center justify-between border-b border-studio-border pb-3">
              <span className="font-display font-extrabold text-sm tracking-tighter">VANGUARD ALPHA</span>
              <span className="font-mono text-[10px] bg-studio-black text-white px-2 py-0.5 rounded font-semibold">LP ACCESS ONLY</span>
            </div>

            <div className="space-y-2 my-auto">
              <span className="text-[10px] font-mono text-accent uppercase tracking-wider font-semibold">Macro Thesis · Q2 2026</span>
              <h3 className="text-xl sm:text-2xl font-editorial font-bold tracking-tight text-studio-black leading-tight">
                Asymmetric Quantitative Liquidity in Decentralized Assets
              </h3>
              <p className="text-xs text-studio-muted line-clamp-2 leading-relaxed">
                Algorithmic hedging protocols yielding 24.6% annualized alpha with zero drawdown correlation.
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-studio-muted pt-2 border-t border-studio-border">
              <span>Encrypted LP Data Room</span>
              <span className="text-studio-black font-semibold">+310% Inbound Lift</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col bg-white rounded-2xl border border-studio-border overflow-hidden hover:border-zinc-400 hover:shadow-xl transition-all duration-300"
    >
      {/* Mockup Visual Container */}
      <Link 
        to={`/work/${project.slug}`}
        className="block relative aspect-[16/10] w-full overflow-hidden border-b border-studio-border bg-zinc-950"
      >
        <div className="w-full h-full transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
          {renderMockup()}
        </div>

        {/* Hover Action Badge Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white text-studio-black px-4 py-2 rounded-full text-xs font-semibold font-mono flex items-center space-x-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </div>
        </div>
      </Link>

      {/* Card Content & Metadata */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-studio-subtle">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <Link to={`/work/${project.slug}`}>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-studio-black group-hover:text-accent transition-colors tracking-tight">
              {project.title}
            </h3>
          </Link>

          {/* Tagline */}
          <p className="text-sm text-studio-muted mt-2 leading-relaxed line-clamp-2">
            {project.tagline}
          </p>

          {/* Key Metrics Snippet */}
          <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-studio-border/70">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx}>
                <div className="text-xs font-mono text-studio-subtle">{m.label}</div>
                <div className="text-lg font-bold font-display text-studio-black mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-6 pt-4 border-t border-studio-border flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-paper-200 text-studio-muted">
                {tech}
              </span>
            ))}
          </div>

          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center space-x-1 text-xs font-semibold font-mono text-studio-black group-hover:text-accent transition-colors"
          >
            <span>View study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
