'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '5+ Years', label: 'Strategic Consulting Experience' },
  { value: '30+ Projects', label: 'Corporate Transformations Completed' },
  { value: '100%', label: 'Client Satisfaction Rate' },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-30 px-6 bg-bg relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6">
            <motion.div variants={childVariants} className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
                Navigating Complexity With Analytical Precision
              </h2>
            </motion.div>

            <motion.p
              variants={childVariants}
              className="text-muted leading-relaxed font-light text-base sm:text-lg"
            >
              Finroles offers elite financial architecture, management consulting, and strategic advisory services. We dissect markets, build predictive mathematical models, and optimize capital structures. 
            </motion.p>

            <motion.p
              variants={childVariants}
              className="text-muted leading-relaxed font-light text-base sm:text-lg"
            >
              Our strategy blends quantitative analysis with decades of corporate finance expertise to construct tailored solutions. Whether structuring cross-border transactions or refining internal budgeting frameworks, we bring unmatched focus to your goals.
            </motion.p>
          </div>

          {/* Right Column: Premium Interactive SVG UI Mockup */}
          <motion.div
            variants={childVariants}
            className="relative bg-surface border border-muted/10 rounded-2xl p-6 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col justify-between"
          >
            {/* Header elements */}
            <div className="flex items-center justify-between border-b border-muted/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-muted/60 font-mono ml-2">strategic_forecast.sh</span>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-accent/10 text-accent uppercase tracking-wider font-mono">
                Active
              </span>
            </div>

            {/* Simulated Chart Visualization */}
            <div className="flex-grow flex items-end gap-3 pt-8 pb-4 relative">
              {/* Grid Background lines */}
              <div className="absolute inset-x-0 bottom-4 top-8 flex flex-col justify-between pointer-events-none">
                <div className="border-b border-muted/5 w-full" />
                <div className="border-b border-muted/5 w-full" />
                <div className="border-b border-muted/5 w-full" />
              </div>

              {/* Glowing trendline graph representation */}
              <svg
                className="absolute inset-x-0 bottom-4 top-8 w-full h-[calc(100%-2rem)] text-accent overflow-visible"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--color-accent))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--color-accent))" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area under curve */}
                <path
                  d="M 0 50 L 0 35 Q 25 15 50 25 T 100 10 L 100 50 Z"
                  fill="url(#gradient)"
                />
                {/* Smooth curve line */}
                <path
                  d="M 0 35 Q 25 15 50 25 T 100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="drop-shadow-[0_0_8px_hsl(var(--color-accent)/0.5)]"
                />
                {/* Dots on line */}
                <circle cx="50" cy="25" r="2.5" fill="currentColor" />
                <circle cx="100" cy="10" r="2.5" fill="currentColor" />
              </svg>

              <div className="z-10 bg-bg/80 border border-muted/10 rounded-lg p-3 backdrop-blur-md absolute top-10 right-4 font-mono text-[10px] text-muted flex flex-col gap-1">
                <span className="text-text font-bold">PROJECTION SET</span>
                <span>ROI: +38.5%</span>
                <span>VOLATILITY: LOW</span>
              </div>
            </div>

            {/* Bottom stats mockup */}
            <div className="flex justify-between items-center bg-bg/40 border border-muted/10 rounded-xl p-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-muted uppercase font-mono tracking-wider">Asset Allocation</span>
                <span className="text-sm font-semibold text-text font-display">Equities & Bonds</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-muted uppercase font-mono tracking-wider">Risk Profile</span>
                <span className="text-sm font-semibold text-accent font-display">Conservative-Growth</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-muted/10 pt-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={childVariants}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-2 p-6 rounded-xl bg-surface border border-muted/5 hover:border-accent/20 transition-colors duration-300"
            >
              <span className="text-4xl sm:text-5xl font-bold font-display text-accent">
                {stat.value}
              </span>
              <span className="text-sm font-light text-muted uppercase tracking-widest leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
