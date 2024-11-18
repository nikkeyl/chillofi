import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const getSupportedLocales = async () => {
  const localesDirectory = join(process.cwd(), 'public/locales');
  const directories = await readdir(localesDirectory, { withFileTypes: true });

  return directories
    .filter((directory) => directory.isDirectory())
    .map((directory) => directory.name);
};

export { getSupportedLocales };
