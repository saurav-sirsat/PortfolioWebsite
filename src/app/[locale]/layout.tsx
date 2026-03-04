import { PropsWithChildren } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { LocaleLangUpdater } from '@/components/locale-lang-updater';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { InteractiveBackground } from '@/components/interactive-background';
import { type Locale, locales } from '@/i18n/config';

import { Icons } from '@/components/icons';
import { Button } from '@/components/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip';

interface LocaleLayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleLangUpdater />
      <ThemeProvider attribute="class">
        <ActiveSectionProvider>
          <InteractiveBackground />
          {children}
          <Toaster position="bottom-left" />

          {/* WhatsApp Redirect Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://wa.me/917721850456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 active:scale-95"
                  >
                    <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20" />
                    <Icons.whatsapp className="relative z-10 size-7" />

                    {/* Pulsing Glow */}
                    <div className="absolute -inset-1 -z-10 rounded-full bg-green-500/20 blur-md group-hover:bg-green-500/30" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="left" className="mb-2 mr-2 border-green-500/20 bg-background/80 backdrop-blur-md">
                  <p className="flex items-center gap-2 font-medium">
                    <span className="size-2 animate-pulse rounded-full bg-green-500" />
                    Chat on WhatsApp
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </ActiveSectionProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

export default LocaleLayout;
