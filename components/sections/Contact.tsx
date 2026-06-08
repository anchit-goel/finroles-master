'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, type Variants } from 'framer-motion';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/toast/use-toast';

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function Contact() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: 'Message Sent Successfully',
          description: 'Thank you. We will review your message and reply promptly.',
          variant: 'success',
        });
        reset();
      } else {
        toast({
          title: 'Submission Failed',
          description: result.error || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Network Error',
        description: 'Unable to submit the form. Please check your connection.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="py-30 px-6 bg-bg relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col gap-12"
        >
          {/* Section Heading */}
          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
              Partner With Our Search Desk
            </h2>
            <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
              Connect with our search consultants to submit a hiring mandate or enquire about candidate placements.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-surface border border-muted/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono text-muted uppercase tracking-wider"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="e.g. Marcus Vance"
                  disabled={isSubmitting}
                  {...register('name')}
                />
                {errors.name && (
                  <span className="text-xs text-red-500 font-mono mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono text-muted uppercase tracking-wider"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. marcus@vantage.com"
                  disabled={isSubmitting}
                  {...register('email')}
                />
                {errors.email && (
                  <span className="text-xs text-red-500 font-mono mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-muted uppercase tracking-wider"
                >
                  Mandate Details / Query
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe the role specifications, location, seniority, or talent requirements..."
                  disabled={isSubmitting}
                  {...register('message')}
                />
                {errors.message && (
                  <span className="text-xs text-red-500 font-mono mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex justify-end">
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  Submit Mandate Request
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
