import React from 'react';
import './globals.css';
import ConvexClientProviders from '@/providers/ConvexClientProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qubis',
  description: 'Real-time messaging application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ConvexClientProviders>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ConvexClientProviders>
      </body>
    </html>
  );
}
