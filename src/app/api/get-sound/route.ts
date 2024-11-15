import { readdirSync } from 'node:fs';
import { join } from 'node:path';

import { NextResponse } from 'next/server';

const GET = async () => {
  const effectsFolder = join(process.cwd(), 'public/audio/effects');

  try {
    const files = readdirSync(effectsFolder);

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
