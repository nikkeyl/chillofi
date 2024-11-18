// import { readFile } from 'node:fs/promises';
// import { join } from 'node:path';

import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const browserLocale = headers().get('accept-language') ?? 'en';
  const supportedLocales = ['de', 'en', 'ja', 'ru'];
  const cleanLocales = browserLocale.split(',').map((locale) => locale.trim());
  const defineLocale = cleanLocales[0]?.split('-')[0] ?? 'en';
  const locale = supportedLocales.includes(defineLocale) ? defineLocale : 'en';
  // const localesFile = join(
  //   process.cwd(),
  //   `public/locales/${locale}/translations.json`,
  // );

  // const translations = await readFile(localesFile, 'utf-8');
  // const messages = JSON.parse(translations);

  return {
    locale,
    messages: await import(`public/locales/${locale}/translations.json`),
  };
  // try {
  // } catch (error: any) {
  //   return {
  //     message: `Failed to load translations, locale: ${locale} [${error.message}]`,
  //     statusCode: 500,
  //   };
  // }
});
