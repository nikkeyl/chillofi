import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const getImages = async () => {
  const imagesFolder = join(process.cwd(), 'public/images');

  try {
    const images = await readdir(imagesFolder);

    return images.map((file) => `/images/${file}`);
  } catch (error) {
    throw new Error(`Could not get image files: ${error}`);
  }
};

export { getImages };
