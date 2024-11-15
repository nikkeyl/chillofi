import { promises } from 'node:fs';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const { readdir } = promises;

  const effectsFolder = join(process.cwd(), 'public/audio/effects');

  try {
    const files = await readdir(effectsFolder);
    const sounds = files.map((file) => `/audio/effects/${file}`);

    return NextResponse.json(sounds);
  } catch (error) {
    return NextResponse.json(
      { error: 'Could not read sound files' },
      { status: 500 },
    );
  }
};

export { GET };
