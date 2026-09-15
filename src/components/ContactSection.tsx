import React from 'react';
import { ArrowUpRight, Calendar, Mail, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onOpenCalendly: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCalendly }) => {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-8 bg-studio-black text-white relative overflow-hidden">
      {/* Editorial Gradient Glow Accent */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heavy Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-accent text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Direct Discovery · Q2/Q3 Bookings</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter leading-[0.95] text-white">
              Have something <br />
              <span className="text-accent">worth building?</span>
            </h2>

            <p className="text-base sm:text-xl text-zinc-400 max-w-xl leading-relaxed font-normal">
              Tell us what you're trying to build. We'll figure out the best way to make it real. No fluff, no sales pitch-just practical product and technical direction.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenCalendly}
                className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full text-sm font-semibold bg-accent hover:bg-accent-hover text-white transition-all duration-200 shadow-xl shadow-accent/25 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="mailto:hello@98studio.co"
                className="inline-flex items-center space-x-2 px-6 py-4 rounded-full text-sm font-medium text-zinc-300 bg-zinc-900/90 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>9eightstudio@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Touch Inquiry Briefing Box */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl space-y-6">
            <div className="text-xs font-mono uppercase text-accent font-semibold tracking-wider">
              What to Expect
            </div>

            <div className="space-y-4">
              {[
                {
                  title: '1. Fast Initial Assessment',
                  desc: 'We review your technical requirements and reply within 4 hours.'
                },
                {
                  title: '2. 30-Minute Architecture Call',
                  desc: 'Direct conversation with our lead developer to clarify features, database schemas, and delivery timeline.'
                },
                {
                  title: '3. Fixed-Scope Proposal',
                  desc: 'You receive a clear, milestone-based proposal with no hidden hourly runaway costs.'
                }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-sm font-display font-bold text-white flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Average response time:</span>
              <span className="text-emerald-400 font-semibold">&lt; 2 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
