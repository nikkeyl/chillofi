import { promises } from 'node:fs';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const { readdir } = promises;

  const imagesFolder = join(process.cwd(), 'public/images');

  try {
    const files = await readdir(imagesFolder);
    const images = files.map((file) => `/images/${file}`);

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: 'Could not get image files' },
      { status: 500 },
    );
  }
};

export { GET };
