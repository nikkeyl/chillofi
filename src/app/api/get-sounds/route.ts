import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const effectsFolder = join(process.cwd(), 'public/audio/effects');

  try {
    const files = await readdir(effectsFolder);
    const sounds = files.map((file) => `/audio/effects/${file}`);

    return NextResponse.json(sounds);
  } catch {
    return NextResponse.json(
      { error: 'Could not get sound files' },
      { status: 500 },
    );
  }
};

export { GET };
