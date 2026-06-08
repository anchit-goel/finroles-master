import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toast/toaster';

// Fonts setup
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Finroles | Premium Financial Consulting & Portfolio',
    template: '%s | Finroles',
  },
  description:
    'Tailored financial strategy, advisory, and asset management portfolio for clients seeking excellence and sustainable growth.',
  openGraph: {
    title: 'Finroles | Premium Financial Consulting & Portfolio',
    description:
      'Tailored financial strategy, advisory, and asset management portfolio for clients seeking excellence and sustainable growth.',
    url: 'https://finroles.com',
    siteName: 'Finroles',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finroles | Premium Financial Consulting & Portfolio',
    description:
      'Tailored financial strategy, advisory, and asset management portfolio for clients seeking excellence and sustainable growth.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-body text-text bg-bg antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
