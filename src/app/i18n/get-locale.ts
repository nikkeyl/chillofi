import { headers } from 'next/headers';

const getLocale = async () => {
  const headersList = await headers();
  const browserLocale = headersList.get('accept-language') ?? 'en';
  const supportedLocales = ['de', 'en', 'ja', 'ru'];
  const defineLocale =
    browserLocale
      .split(',')
      .map((locale: string) => locale.trim())[0]
      ?.split('-')[0] ?? 'en';

  return supportedLocales.includes(defineLocale) ? defineLocale : 'en';
};

export { getLocale };
