export const locales = ['en', 'hi'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<
  Locale,
  { name: string; flag: string; nativeName: string }
> = {
  en: { name: 'English', flag: '🇬🇧', nativeName: 'English' },
  hi: { name: 'Hindi', flag: '🇮🇳', nativeName: 'हिन्दी' },
};
