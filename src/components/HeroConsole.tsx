import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Terminal as TerminalIcon, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Sliders,
  Sparkles,
  ArrowUpRight,
  Database,
  Lock,
  Globe
} from 'lucide-react';

export const HeroConsole: React.FC<{ onOpenCalendly: () => void }> = ({ onOpenCalendly }) => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'architecture' | 'code' | 'benchmarks'>('telemetry');
  const [isWireframe, setIsWireframe] = useState(false);
  const [activeNode, setActiveNode] = useState<number>(0);
  const [codeLineIndex, setCodeLineIndex] = useState(0);

  const codeSnippets = [
    "// Initializing 98studio Core Runtime v2.4",
    "const studio = new DigitalProductEngine({ tier: 'enterprise' });",
    "await studio.connectDataMesh({ latencyTarget: '< 45ms' });",
    "const deployment = await studio.compileArchitecture({",
    "  stack: ['React', 'TypeScript', 'Edge Workers', 'PostgreSQL'],",
    "  security: 'SOC2-Ready',",
    "  performanceScore: 99.8",
    "});",
    "// [OK] Edge pipeline active across 280 global PoPs."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLineIndex((prev) => (prev < codeSnippets.length ? prev + 1 : 1));
    }, 1400);
    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  const telemetryMetrics = [
    { label: 'Edge Latency', value: '38ms', change: '-45%', status: 'Optimal' },
    { label: 'Core Web Vitals', value: '99.8/100', change: '+12%', status: 'Grade A' },
    { label: 'Concurrency Engine', value: '45,000 req/s', change: 'Zero Lock', status: 'Scale OK' },
    { label: 'Code Quality Index', value: '100% Strict TS', change: '0 Errors', status: 'Verified' }
  ];

  const nodes = [
    { id: 'client', label: 'Client Tier', desc: 'React 19 / TypeScript UI with Lenis Physics', icon: Globe, status: 'Active' },
    { id: 'edge', label: 'Edge Gateway', desc: 'Vercel / Cloudflare Global Routing & Auth', icon: Zap, status: 'Active' },
    { id: 'engine', label: 'Logic Cluster', desc: 'Event-driven Microservices & Real-time WebSockets', icon: Cpu, status: 'Optimal' },
    { id: 'database', label: 'Data Store', desc: 'Distributed PostgreSQL + Columnar Analytical Store', icon: Database, status: 'Synchronized' }
  ];

  return (
    <div className="w-full mt-12 sm:mt-16 rounded-2xl border border-studio-border bg-[#0E0E10] text-white shadow-2xl overflow-hidden transition-all duration-300">
      {/* Top Console Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 sm:px-6 border-b border-studio-darkBorder bg-[#0A0A0C]/90">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
          </div>
          <div className="h-4 w-[1px] bg-studio-darkBorder mx-1" />
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs text-zinc-400 font-medium">98studio-console</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#1F1F24] text-accent border border-accent/20">
              LIVE ENGINE
            </span>
          </div>
        </div>

        {/* Console Controls / Wireframe Switch */}
        <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all border ${
              isWireframe 
                ? 'bg-accent/15 border-accent text-accent' 
                : 'bg-zinc-800/40 border-zinc-700/50 text-zinc-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{isWireframe ? 'Wireframe Mode: ON' : 'Toggle Blueprint'}</span>
          </button>

          <button 
            onClick={onOpenCalendly}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium bg-accent hover:bg-accent-hover text-white transition-colors"
          >
            <span>Deploy with us</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Interactive Tabs Header */}
      <div className="flex overflow-x-auto scrollbar-none border-b border-studio-darkBorder bg-[#0C0C0E] px-4">
        {[
          { id: 'telemetry', label: 'Telemetry & Health', icon: Activity },
          { id: 'architecture', label: 'Architecture Nodes', icon: Layers },
          { id: 'code', label: 'Core Code Engine', icon: TerminalIcon },
          { id: 'benchmarks', label: 'Performance Audit', icon: Zap },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 py-3 px-4 text-xs font-mono font-medium border-b-2 transition-all whitespace-nowrap ${
                isActive
                  ? 'border-accent text-white bg-white/[0.02]'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-accent' : 'text-zinc-500'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Console Viewport */}
      <div className={`p-5 sm:p-8 min-h-[340px] flex flex-col justify-between ${
        isWireframe ? 'editorial-grid-dark bg-[#070709]' : 'bg-[#0E0E12]'
      }`}>
        <AnimatePresence mode="wait">
          {activeTab === 'telemetry' && (
            <motion.div
              key="telemetry"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {telemetryMetrics.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl border border-zinc-800/80 bg-[#141418]/60 backdrop-blur hover:border-zinc-700 transition-all"
                  >
                    <div className="flex items-center justify-between text-zinc-400 text-xs font-mono">
                      <span>{item.label}</span>
                      <span className="text-[10px] text-accent font-semibold">{item.status}</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white mt-2">
                      {item.value}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 mt-1 flex items-center space-x-1">
                      <span className="text-emerald-400">{item.change}</span>
                      <span>vs benchmark</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dynamic Live Graph Preview */}
              <div className="p-4 sm:p-5 rounded-xl border border-zinc-800 bg-[#121216]/80">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-accent" />
                    <span className="text-xs font-mono text-zinc-300 font-semibold">Real-Time Event Throughput & Memory Saturation</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">Auto-refresh (100ms)</span>
                </div>

                {/* Simulated Chart Bars */}
                <div className="h-24 sm:h-28 flex items-end gap-1.5 sm:gap-2 pt-4">
                  {[45, 52, 60, 48, 72, 85, 68, 92, 78, 64, 88, 95, 70, 82, 98, 89, 74, 91, 85, 96, 78, 88, 94, 99].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all duration-500 relative group"
                      style={{
                        height: `${height}%`,
                        backgroundColor: i === 23 ? '#FF5A1F' : i > 18 ? '#4A4A52' : '#27272F'
                      }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 text-[9px] font-mono text-accent px-1.5 py-0.5 rounded border border-zinc-700 whitespace-nowrap pointer-events-none transition-opacity">
                        {height}% load
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mt-3 pt-2 border-t border-zinc-800/80">
                  <span>00:00:00 UTC</span>
                  <span className="text-zinc-400">Zero packet loss recorded · P99 = 22ms</span>
                  <span>CURRENT (LIVE)</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {nodes.map((node, i) => {
                  const Icon = node.icon;
                  const isSelected = activeNode === i;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveNode(i)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected 
                          ? 'border-accent bg-[#1E1A16] shadow-lg shadow-accent/5' 
                          : 'border-zinc-800 bg-[#121216]/70 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-accent/20 text-accent' : 'bg-zinc-800 text-zinc-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{node.status}</span>
                        </span>
                      </div>
                      <h4 className="font-mono text-sm font-semibold text-white">{node.label}</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{node.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Node Detailed Insight */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-[#14141A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center space-x-2 text-zinc-300">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span>Selected Node Protocol: <strong className="text-white font-semibold">{nodes[activeNode].label}</strong></span>
                </div>
                <div className="text-zinc-500">
                  Zero external runtime overhead · Fully decoupled TypeScript micro-layers
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'code' && (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-6 rounded-xl border border-zinc-800 bg-[#09090C] font-mono text-xs space-y-2 overflow-x-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 text-zinc-500 text-[11px]">
                <span>studio-engine.production.ts</span>
                <span>TypeScript 5.7.3 — Strict Mode</span>
              </div>
              <div className="space-y-1.5 pt-2">
                {codeSnippets.slice(0, codeLineIndex).map((line, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <span className="text-zinc-600 select-none w-6 text-right">{i + 1}</span>
                    <span className={`${
                      line.startsWith('//') 
                        ? 'text-zinc-500 italic' 
                        : line.includes('tier') || line.includes('performanceScore')
                        ? 'text-accent'
                        : line.includes('const') || line.includes('await')
                        ? 'text-purple-400'
                        : 'text-zinc-300'
                    }`}>
                      {line}
                    </span>
                  </div>
                ))}
                <div className="flex items-center space-x-3">
                  <span className="text-zinc-600 select-none w-6 text-right">{codeLineIndex + 1}</span>
                  <span className="w-2 h-4 bg-accent animate-pulse inline-block" />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'benchmarks' && (
            <motion.div
              key="benchmarks"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Time to Interactive', value: '0.4s', desc: 'Zero hydration bloat, instant DOM interaction.', rating: '99.9%' },
                  { title: 'Cumulative Layout Shift', value: '0.00', desc: 'Rock-solid layout stability on all viewports.', rating: 'Perfect' },
                  { title: 'SEO & Structured Data', value: '100/100', desc: 'Automated JSON-LD schemas & OpenGraph optimization.', rating: 'Index OK' },
                ].map((bench, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-zinc-800 bg-[#131317]">
                    <div className="text-zinc-400 font-mono text-xs">{bench.title}</div>
                    <div className="text-3xl font-mono font-bold text-white mt-1 text-accent">{bench.value}</div>
                    <p className="text-xs text-zinc-400 mt-2">{bench.desc}</p>
                    <div className="mt-3 pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <span>Standard Compliance</span>
                      <span className="text-emerald-400">{bench.rating}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 flex items-center justify-between">
                <div className="flex items-center space-x-3 text-xs font-mono text-zinc-300">
                  <Lock className="w-4 h-4 text-accent" />
                  <span>Enterprise Security: CSRF Guard, AES-256 Payload Encryption, Subresource Integrity Active</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 hidden sm:block" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Console Status Bar */}
        <div className="pt-6 mt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-zinc-300 font-medium">98studio Engine Ready</span>
            </span>
            <span>·</span>
            <span>Memory: 14.2MB</span>
            <span>·</span>
            <span>Region: AP-SOUTH / GLOBAL EDGE</span>
          </div>

          <div className="text-zinc-400">
            Craftsmanship Standard: <span className="text-white font-medium">100% Bespoke Code</span>
          </div>
        </div>
      </div>
    </div>
  );
};
