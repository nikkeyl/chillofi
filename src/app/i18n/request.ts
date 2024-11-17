import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const browserLocale = (await headers().get('accept-language')) ?? 'en';
  const locales = browserLocale.split(',').map((locale) => locale.trim());
  const locale = locales[0]?.split('-')[0] ?? '';

  return {
    locale,
    messages: (await import(`/public/locales/${locale}/translations.json`)).default,
  };
});
