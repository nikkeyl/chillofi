import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const musicFolder = join(process.cwd(), 'public/audio/music');

  try {
    const files = await readdir(musicFolder);
    const music = files.map((file) => `/audio/music/${file}`);

    return NextResponse.json(music);
  } catch {
    return NextResponse.json(
      { error: 'Could not get music files' },
      { status: 500 },
    );
  }
};

export { GET };
