'use client';

import { useToast } from './use-toast';
import { AnimatePresence, motion } from 'framer-motion';

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex max-h-screen w-full max-w-[380px] flex-col-reverse gap-2 p-4 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {toasts.map(function ({ id, title, description, variant = 'default' }) {
          return (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className={`pointer-events-auto relative flex w-full items-start justify-between space-x-4 overflow-hidden rounded-lg border p-4 shadow-lg transition-all ${
                variant === 'destructive'
                  ? 'border-red-500/30 bg-red-950/90 text-red-50 backdrop-blur-md'
                  : variant === 'success'
                  ? 'border-emerald-500/30 bg-emerald-950/90 text-emerald-50 backdrop-blur-md'
                  : 'border-muted/20 bg-surface/90 text-text backdrop-blur-md'
              }`}
            >
              <div className="grid gap-1">
                {title && <div className="text-sm font-semibold">{title}</div>}
                {description && (
                  <div className="text-xs opacity-80">{description}</div>
                )}
              </div>
              <button
                onClick={() => dismiss(id)}
                className="rounded-md p-1 text-text/50 opacity-50 transition-opacity hover:opacity-100 focus:outline-none"
              >
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
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
