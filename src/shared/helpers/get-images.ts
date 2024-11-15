import { promises } from 'node:fs';
import { join } from 'node:path';

const getImages = async () => {
  const { readdir } = promises;

  const imagesFolder = join(process.cwd(), 'public/images/lofi');

  try {
    const images = await readdir(imagesFolder);

    return images.map((file) => `/images/lofi/${file}`);
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

export { getImages };
