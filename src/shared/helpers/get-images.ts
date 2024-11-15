import { promises } from 'node:fs';
import { join } from 'node:path';

export const getImages = async (): Promise<string[]> => {
  const imagesFolder = join(process.cwd(), 'public/images');

  try {
    const files = await promises.readdir(imagesFolder);

    return files.map((file) => `/images/${file}`);
  } catch {
    return [];
  }
};
