import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

// import { getLocale } from './get-locale';
import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const localesDirectory = join(process.cwd(), 'public/locales');
  const directories = await readdir(localesDirectory, { withFileTypes: true });

  const supportedLocales = directories
    .filter((directory) => directory.isDirectory())
    .map((directory) => directory.name);

  const browserLocale = headers().get('accept-language') ?? 'en';

  const defineLocale =
    browserLocale
      .split(',')
      .map((locale) => locale.trim())[0]
      ?.split('-')[0] ?? 'en';

  const locale = supportedLocales.includes(defineLocale) ? defineLocale : 'en';

  return {
    locale,
    messages: (await import(`/public/locales/${locale}/translations.json`)).default,
  };
});
