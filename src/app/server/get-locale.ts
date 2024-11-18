import { headers } from 'next/headers';

import { getSupportedLocales } from './get-supported-locales';

const getLocale = async () => {
  const browserLocale = headers().get('accept-language') ?? 'en';
  const supportedLocales = await getSupportedLocales();

  const defineLocale =
    browserLocale
      .split(',')
      .map((locale) => locale.trim())[0]
      ?.split('-')[0] ?? 'en';

  return supportedLocales.includes(defineLocale) ? defineLocale : 'en';
};

export { getLocale };
