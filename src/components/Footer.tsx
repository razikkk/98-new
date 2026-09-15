import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC<{ onOpenCalendly: () => void }> = ({ onOpenCalendly }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper-100 border-t border-studio-border pt-16 sm:pt-24 pb-12 px-4 sm:px-8 text-studio-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-6">
            <Link to="/" className="inline-flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-xl bg-studio-black text-white flex items-center justify-center font-editorial font-bold text-base tracking-tighter group-hover:bg-accent transition-colors">
                98
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tighter text-studio-black">
                98studio
              </span>
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            </Link>

            <p className="text-sm sm:text-base text-studio-muted max-w-sm leading-relaxed">
              Independent digital product & software studio. Architecting custom software, SaaS MVPs, mobile experiences, CRMs, Automations and commercial websites.
            </p>

            {/* <div className="flex items-center space-x-3 text-xs font-mono text-studio-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Studio HQ: Bengaluru · Remote Worldwide</span>
            </div> */}
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase text-studio-subtle font-semibold tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                {/* <a href="/#work" className="text-studio-muted hover:text-studio-black transition-colors">
                  Selected Work (04)
                </a> */}
              </li>
              <li>
                <a href="/#services" className="text-studio-muted hover:text-studio-black transition-colors">
                  Capabilities & Pricing
                </a>
              </li>
              <li>
                <a href="/#process" className="text-studio-muted hover:text-studio-black transition-colors">
                  Engineering Process
                </a>
              </li>
              <li>
                <a href="/#about" className="text-studio-muted hover:text-studio-black transition-colors">
                  About & Manifesto
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-studio-muted hover:text-studio-black transition-colors">
                  FAQ & Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase text-studio-subtle font-semibold tracking-wider">
              Connect & Book
            </div>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button
                  onClick={onOpenCalendly}
                  className="text-accent hover:underline font-mono text-xs flex items-center space-x-1"
                >
                  <span>Book Discovery Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <a 
                  href="mailto:hello@98studio.co" 
                  className="text-studio-muted hover:text-studio-black transition-colors"
                >
                  9eightstudio@gmail.com
                </a>
              </li>
              {/* <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-studio-muted hover:text-studio-black transition-colors flex items-center space-x-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-studio-subtle" />
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-studio-muted hover:text-studio-black transition-colors flex items-center space-x-1"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3 h-3 text-studio-subtle" />
                </a>
              </li> */}
              <li>
                <a 
                  href="https://linkedin.com/company/98studio" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-studio-muted hover:text-studio-black transition-colors flex items-center space-x-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-studio-subtle" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/9eight.studio/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-studio-muted hover:text-studio-black transition-colors flex items-center space-x-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-studio-subtle" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Time & Copyright */}
        <div className="pt-8 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-studio-muted">
          <div className="flex items-center space-x-4">
            <span>© 2026 98studio. All rights reserved.</span>
            <span>·</span>
            <span>100% Bespoke Code</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>IST (UTC+5:30): {currentTime || '18:55:00'}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-studio-border bg-white text-studio-black hover:border-studio-black transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
