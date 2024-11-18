import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

// import { getLocale } from './get-locale';
import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

const getSupportedLocales = async () => {
  const localesDirectory = join(process.cwd(), 'public/locales');
  const directories = await readdir(localesDirectory, { withFileTypes: true });

  return directories
    .filter((directory) => directory.isDirectory())
    .map((directory) => directory.name);
};

// import { getSupportedLocales } from './get-supported-locales';

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

export default getRequestConfig(async () => {
  const locale = await getLocale();

  return {
    locale,
    messages: (await import(`/public/locales/${locale}/translations.json`)).default,
  };
});
