'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  description: string;
  metrics: string;
  link: string;
}

const projectsData: Project[] = [
  {
    title: 'Alpha Growth Fund Structure',
    category: 'Asset Management',
    description:
      'Engineered an automated multi-asset rebalancing allocation model utilizing quantitative risk-parity optimizations.',
    metrics: '+24% CAGR / 1.4 Sharpe Ratio',
    link: '#',
  },
  {
    title: 'Cross-Border Acquisition Advisory',
    category: 'M&A Advisory',
    description:
      'Structured detailed fiscal, regulatory, and valuation models supporting a $450M cross-border corporate integration.',
    metrics: '$12M Projected Synergy Savings',
    link: '#',
  },
  {
    title: 'EcoEnergy Capital Optimization',
    category: 'Corporate Finance',
    description:
      'Navigated complex debt restructuring and structured equity issuance, lowering overall weighted average cost of capital.',
    metrics: '2.15% Reduction in WACC',
    link: '#',
  },
  {
    title: 'TradeFlow Liquidity Stress Audit',
    category: 'Risk Management',
    description:
      'Constructed algorithmic stress-testing workflows and currency hedge programs safeguarding transactional liquid flow.',
    metrics: '99.9% Hedge Protection Level',
    link: '#',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function Work() {
  return (
    <section id="work" className="py-30 px-6 bg-bg relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
              Transformative Cases & Engagements
            </h2>
          </div>
          <div className="w-16 h-1 bg-accent rounded-full hidden md:block mb-4" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative rounded-2xl bg-surface border border-muted/10 overflow-hidden aspect-[16/10] flex flex-col justify-between p-8 shadow-2xl transition-all duration-500 hover:border-accent/40 hover:shadow-accent/5"
            >
              {/* Dark Geometric Dot Mesh CSS Backdrop representing visual grid */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, hsl(var(--color-text)) 1px, transparent 1px)`,
                  backgroundSize: '16px 16px',
                }}
              />

              {/* Glowing Ambient light background behind card content */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/0 group-hover:bg-accent/5 blur-2xl transition-all duration-700 pointer-events-none" />

              {/* Hover Overlay Effect - Warm Bronze gradient overlay reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/95 to-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

              {/* Card Header (Category and Index) */}
              <div className="flex items-center justify-between z-10 relative">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-bg border border-muted/10 text-muted group-hover:text-accent group-hover:border-accent/20 transition-colors duration-300">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-muted/40 font-light">
                  0{index + 1}
                </span>
              </div>

              {/* Card Body & Interactive Shift */}
              <div className="z-10 relative flex flex-col gap-4 mt-12">
                <h3 className="text-2xl font-bold font-display text-text group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed font-light line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Card Footer containing statistics, revealed link */}
              <div className="z-10 relative flex items-center justify-between border-t border-muted/10 pt-6 mt-8">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-muted/60 tracking-wider">
                    Key Performance
                  </span>
                  <span className="text-sm font-semibold text-text font-display">
                    {project.metrics}
                  </span>
                </div>
                <span className="text-sm font-medium text-accent flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300">
                  View Case
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
