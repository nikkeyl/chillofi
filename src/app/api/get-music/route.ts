import { promises } from 'node:fs';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const { readdir } = promises;

  const musicFolder = join(process.cwd(), 'public/audio/music/lofi');

  try {
    const files = await readdir(musicFolder);
    const music = files.map((file) => `/audio/music/lofi/${file}`);

    return NextResponse.json(music);
  } catch (error) {
    return NextResponse.json(
      { error: 'Could not read music files' },
      { status: 500 },
    );
  }
};

export { GET };
