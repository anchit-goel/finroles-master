'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-accent"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
    title: 'Wealth & Asset Management',
    description:
      'Bespoke portfolio allocations and optimization models. We coordinate risk tolerances with structured targets to maximize yield.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-accent"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
        />
      </svg>
    ),
    title: 'Corporate Advisory',
    description:
      'Providing end-to-end consulting for complex mergers, capital restructurings, valuation calculations, and tax planning frameworks.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-accent"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z"
        />
      </svg>
    ),
    title: 'Risk Infrastructure',
    description:
      'Stress-testing operations, identifying market exposure vulnerabilities, and formulating advanced hedging protocols to guard capital.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-accent"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
        />
      </svg>
    ),
    title: 'Quantitative Research',
    description:
      'Deploying algorithmic analysis, econometric models, and big data resources to evaluate micro and macro industry patterns.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-30 px-6 bg-surface/50 border-y border-muted/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
            Bespoke Solutions for Dynamic Environments
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="flex flex-col gap-6 p-8 rounded-2xl bg-surface border border-muted/5 hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/15">
                {service.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold font-display text-text">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
