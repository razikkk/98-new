import React from 'react';
import { CASE_STUDIES } from '../data/projectsData';
import { CaseStudyCard } from './CaseStudyCard';

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-studio-border bg-paper-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-studio-border gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-2">
              <span>● Selected Portfolio</span>
              <span>(04)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tighter text-studio-black">
              Selected Work
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-studio-muted font-normal">
            Bespoke platforms, high-octane commerce systems, SaaS MVPs and commercial editorial websites engineered with precision.
          </p>
        </div>

        {/* 2-Column Staggered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {CASE_STUDIES.map((project, index) => (
            <CaseStudyCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
