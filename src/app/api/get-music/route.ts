import { promises } from 'node:fs';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const { readdir } = promises;

  const musicFolder = join(process.cwd(), 'public/audio/music');

  try {
    const files = await readdir(musicFolder);
    const music = files.map((file) => `/audio/music/${file}`);

    return NextResponse.json(music);
  } catch (error) {
    return NextResponse.json(
      { error: 'Could not get music files' },
      { status: 500 },
    );
  }
};

export { GET };