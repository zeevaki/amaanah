import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ur', 'es', 'hi'],
  defaultLocale: 'en',
});
