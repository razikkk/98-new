import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenCalendly: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalendly }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', isSection: true },
    { name: 'Services', href: '#services', isSection: true },
    { name: 'Process', href: '#process', isSection: true },
    { name: 'About', href: '#about', isSection: true },
    { name: 'FAQ', href: '#faq', isSection: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isSection: boolean) => {
    setMobileMenuOpen(false);
    if (isSection) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-full border transition-all duration-300 ${
          isScrolled 
            ? 'bg-paper-100/90 backdrop-blur-md border-studio-border/90 shadow-sm px-5 py-3' 
            : 'bg-paper-100/60 backdrop-blur-sm border-studio-border/60 px-5 py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Mark */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group focus:outline-none"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-studio-black text-white flex items-center justify-center font-editorial font-bold text-sm tracking-tighter group-hover:bg-accent transition-colors">
              98
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tighter text-studio-black">
                98studio
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-paper-200/80 px-3 py-1 rounded-full border border-studio-border/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isSection)}
                className="px-3.5 py-1 text-xs font-medium text-studio-muted hover:text-studio-black hover:bg-white rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenCalendly}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-studio-black text-white hover:bg-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenCalendly}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-studio-black text-white hover:bg-accent transition-colors"
            >
              Book ↗
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-studio-border bg-white text-studio-black hover:bg-paper-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 mx-auto max-w-lg bg-paper-100/98 backdrop-blur-xl border border-studio-border rounded-2xl p-5 shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isSection)}
                  className="px-4 py-2.5 text-sm font-medium text-studio-black hover:bg-paper-200 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-studio-subtle font-mono">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-studio-border flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalendly();
                }}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-accent text-white hover:bg-accent-hover transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-accent/20"
              >
                <span>Schedule Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] font-mono text-studio-subtle pt-1">
                ● Available for Q2/Q3 2026 sprints
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
