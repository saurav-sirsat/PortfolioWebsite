import '@/styles/globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { env } from '@/env.mjs';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(', '),
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Saurav Sirsat Portfolio',
    images: [
      {
        url: `${siteConfig.url}/images/metaimg.png`,
        width: 1200,
        height: 630,
        alt: 'Saurav Sirsat - Software Developer & Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@saurav-sirsat',
    images: [`${siteConfig.url}/images/metaimg.png`],
  },
  authors: [{ name: 'Saurav Sirsat', url: 'https://github.com/saurav-sirsat' }],
  creator: 'Saurav Sirsat',
  publisher: 'Saurav Sirsat',
};

// Root layout with required html/body tags
// The [locale] layout will handle locale-specific content
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="en" href={siteConfig.url} />
        <link rel="alternate" hrefLang="es" href={siteConfig.url} />
        <link rel="alternate" hrefLang="fr" href={siteConfig.url} />
        <link rel="alternate" hrefLang="de" href={siteConfig.url} />
        <link rel="alternate" hrefLang="it" href={siteConfig.url} />
        <link rel="alternate" hrefLang="pt" href={siteConfig.url} />
        <link rel="alternate" hrefLang="nl" href={siteConfig.url} />
        <link rel="alternate" hrefLang="hi" href={siteConfig.url} />
        <link rel="alternate" hrefLang="zh" href={siteConfig.url} />
        <link rel="alternate" hrefLang="ja" href={siteConfig.url} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />
          {/* Preload critical resources */}
        <link rel="preload" href="/images/profile.jpg" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
