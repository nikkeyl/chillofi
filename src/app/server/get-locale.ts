import { headers } from 'next/headers';

const getLocale = async () => {
  const browserLocale = headers().get('accept-language') ?? 'en';
  const supportedLocales = ['de', 'en', 'ja', 'ru', 'tr'];
  const defineLocale =
    browserLocale
      .split(',')
      .map((locale) => locale.trim())[0]
      ?.split('-')[0] ?? 'en';

  return supportedLocales.includes(defineLocale) ? defineLocale : 'en';
};

export { getLocale };
