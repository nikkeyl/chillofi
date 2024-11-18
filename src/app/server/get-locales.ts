import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const browserLocale = headers().get('accept-language') ?? 'en';
  const supportedLocales = ['de', 'en', 'ja', 'ru'];
  const locales = browserLocale.split(',').map((locale) => locale.trim());
  const locale = locales[0]?.split('-')[0] ?? 'en';
  const supportLocale = supportedLocales.includes(locale) ? locale : 'en';

  return {
    locale: supportLocale,
    messages: (await import(`/public/locales/${supportLocale}/translations.json`))
      .default,
  };
});
