import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const browserLocale = headers().get('accept-language') ?? 'en';
  const supportedLocales = ['de', 'en', 'ja', 'ru', 'tr'];
  const cleanLocales = browserLocale.split(',').map((locale) => locale.trim());
  const defineLocale = cleanLocales[0]?.split('-')[0] ?? 'en';
  const locale = supportedLocales.includes(defineLocale) ? defineLocale : 'en';

  return {
    locale,
    messages: (await import(`/public/locales/${locale}/translations.json`)).default,
  };
});
