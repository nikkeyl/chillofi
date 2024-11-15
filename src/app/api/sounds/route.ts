import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

const GET = async () => {
  const effectsFolder = path.join(process.cwd(), 'public/audio/effects');

  try {
    const files = fs.readdirSync(effectsFolder);

    const sounds = files
      .filter((file) => file.endsWith('.aac') || file.endsWith('.mp3'))
      .map((file) => `/audio/effects/${file}`);

    return NextResponse.json(sounds);
  } catch (error) {
    console.error('Error reading sounds:', error);
    return NextResponse.json(
      { error: 'Could not read sound files' },
      { status: 500 },
    );
  }
};

export { GET };
