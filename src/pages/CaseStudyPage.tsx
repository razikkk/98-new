import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  Layers, 
  Clock, 
  User, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import { CASE_STUDIES } from '../data/projectsData';

export const CaseStudyPage: React.FC<{ onOpenCalendly: () => void }> = ({ onOpenCalendly }) => {
  const { slug } = useParams<{ slug: string }>();
  const [activeArchTab, setActiveArchTab] = useState(0);

  const projectIndex = CASE_STUDIES.findIndex((p) => p.slug === slug);
  const project = projectIndex !== -1 ? CASE_STUDIES[projectIndex] : CASE_STUDIES[0];

  const nextProjectIndex = (projectIndex + 1) % CASE_STUDIES.length;
  const nextProject = CASE_STUDIES[nextProjectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-paper-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-24">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-studio-border pb-4">
          <Link
            to="/#work"
            className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-studio-muted hover:text-studio-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Work</span>
          </Link>

          <div className="flex items-center space-x-2 text-xs font-mono text-studio-subtle">
            <span>Case Study</span>
            <span>/</span>
            <span className="text-studio-black font-semibold">{project.slug}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white border border-studio-border text-accent uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-studio-subtle">
              Delivered in {project.timeline}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter text-studio-black leading-[0.98]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-studio-muted font-normal max-w-4xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-white border border-studio-border shadow-sm divide-y sm:divide-y-0 sm:divide-x divide-studio-border">
          <div className="p-2 sm:p-4">
            <div className="text-xs font-mono text-studio-subtle uppercase flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5 text-accent" />
              <span>Client / Entity</span>
            </div>
            <div className="text-base sm:text-lg font-bold font-display text-studio-black mt-1">
              {project.client}
            </div>
          </div>

          <div className="p-2 sm:p-4">
            <div className="text-xs font-mono text-studio-subtle uppercase flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>Timeline Sprint</span>
            </div>
            <div className="text-base sm:text-lg font-bold font-display text-studio-black mt-1">
              {project.timeline}
            </div>
          </div>

          <div className="p-2 sm:p-4">
            <div className="text-xs font-mono text-studio-subtle uppercase flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-accent" />
              <span>98studio Role</span>
            </div>
            <div className="text-sm sm:text-base font-bold font-display text-studio-black mt-1">
              Lead Architecture & Dev
            </div>
          </div>

          <div className="p-2 sm:p-4">
            <div className="text-xs font-mono text-studio-subtle uppercase flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>IP & Delivery</span>
            </div>
            <div className="text-base sm:text-lg font-bold font-display text-emerald-600 mt-1">
              100% Transferred
            </div>
          </div>
        </div>

        {/* Metrics Impact Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-studio-black text-white">
          <div className="text-xs font-mono uppercase text-accent font-semibold tracking-wider mb-6">
            ● Quantitative Results & Commercial Impact
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {project.metrics.map((metric, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl sm:text-5xl font-display font-extrabold text-white">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-zinc-200">{metric.label}</div>
                {metric.detail && (
                  <p className="text-xs font-mono text-zinc-400 mt-1">{metric.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Problem vs Solution Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* The Challenge */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-studio-border space-y-4">
            <div className="text-xs font-mono uppercase text-accent font-bold tracking-wider">
              01 / The Challenge
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-studio-black">
              Breaking Through System Bottlenecks
            </h3>
            <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
              {project.challenge}
            </p>
            <p className="text-sm text-studio-muted leading-relaxed pt-2">
              {project.summary}
            </p>
          </div>

          {/* The 98studio Solution */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-studio-border space-y-4">
            <div className="text-xs font-mono uppercase text-accent font-bold tracking-wider">
              02 / The Engineered Solution
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-studio-black">
              Engineered for Velocity & Scale
            </h3>
            <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
              {project.solution}
            </p>
            <div className="pt-2">
              <div className="text-xs font-mono uppercase text-studio-subtle font-semibold mb-2">
                Tech Stack Implemented:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-paper-200 text-xs font-mono text-studio-black">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Architecture & Engineering Deep-Dive */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-studio-border space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-studio-border pb-6">
            <div>
              <div className="text-xs font-mono font-semibold uppercase text-accent">
                03 / Architecture Breakdown
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-studio-black mt-1">
                Technical Specifications & Protocols
              </h3>
            </div>

            {/* Architecture Tabs */}
            <div className="flex space-x-2">
              {project.architectureDetails.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveArchTab(i)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeArchTab === i
                      ? 'bg-studio-black text-white'
                      : 'bg-paper-200 text-studio-muted hover:text-studio-black'
                  }`}
                >
                  Module 0{i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-xl sm:text-2xl font-display font-bold text-studio-black">
                {project.architectureDetails[activeArchTab]?.title}
              </h4>
              <p className="text-sm sm:text-base text-studio-muted">
                {project.architectureDetails[activeArchTab]?.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.architectureDetails[activeArchTab]?.points.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-paper-100 border border-studio-border/70 space-y-2">
                  <div className="w-6 h-6 rounded-md bg-white border border-studio-border flex items-center justify-center text-accent text-xs font-mono font-bold">
                    ✓
                  </div>
                  <p className="text-xs font-mono text-studio-black leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deliverables List */}
        <div className="p-8 rounded-2xl bg-paper-200/70 border border-studio-border">
          <div className="text-xs font-mono uppercase text-studio-subtle font-semibold mb-4">
            Delivered Artifacts & Repositories
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.deliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-center space-x-2.5 p-3 rounded-xl bg-white border border-studio-border text-xs font-medium text-studio-black">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="p-8 sm:p-12 rounded-3xl bg-studio-black text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-mono uppercase text-accent">Next Case Study</div>
            <h4 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {nextProject.title}
            </h4>
            <p className="text-xs text-zinc-400 font-mono">
              {nextProject.category} · {nextProject.year}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenCalendly}
              className="px-5 py-3 rounded-full text-xs font-semibold bg-accent hover:bg-accent-hover text-white transition-colors"
            >
              Start Your Project ↗
            </button>

            <Link
              to={`/work/${nextProject.slug}`}
              className="p-3.5 rounded-full border border-zinc-700 bg-zinc-900 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
