import { getRequestConfig } from 'next-intl/server';

import { getLocale } from './get-locale';

export default getRequestConfig(async () => {
  const locale = await getLocale();

  return {
    locale,
    messages: (await import(`../../../public/locales/${locale}.json`)).default,
  };
});
