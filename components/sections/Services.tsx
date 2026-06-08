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
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: 'Executive Search',
    description:
      'Retained search for C-suite roles, Managing Directors, Partners, and critical leadership hires across top financial institutions.',
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
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5M4.5 19.5h15M5.25 4.5v15m13.5-15v15"
        />
      </svg>
    ),
    title: 'Buy-Side Search',
    description:
      'Talent sourcing for Private Equity, Venture Capital, and Asset Management desks, spanning investment associates to portfolio managers.',
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
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582"
        />
      </svg>
    ),
    title: 'Sell-Side Search',
    description:
      'Recruitment for Investment Banking, M&A Advisory desks, Equity Research, Debt Capital Markets, and Institutional Sales & Trading.',
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
    title: 'Quantitative & Risk',
    description:
      'Sourcing quantitative researchers, mathematical modelers, risk officers, and algorithmic traders with high-end math backgrounds.',
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
            Specialist Executive Search & Placement
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
