# Chillofi

A browser-based lo-fi music player for work, study, and relaxation.

![Chillofi cover](./public/socials/cover.jpg)

## Overview

Chillofi brings music and illustrated backgrounds into a small interface.
It plays a collection of audio files included in the application, with
playback and volume controls, background switching, and a visual noise effect.

## Features

- Continuous playback through the bundled music collection.

- Play and pause controls, with volume saved in local storage.

- Switchable illustrated backgrounds and a visual noise overlay.

- Interface translations in English, German, Japanese, and Russian.

- Language selection from the browser's preferred language, with English
  as the fallback.

## Getting started

Use Bun to install dependencies and run the Next.js application.
The Dockerfile uses Bun 1.3.10.

```sh
git clone https://github.com/nikkeyl/chillofi.git
cd chillofi
bun install --frozen-lockfile
bun run dev
```

Open [localhost:3000](http://localhost:3000).

To create a production build:

```sh
bun run build
```

For a container build and local production run:

```sh
docker build -t chillofi .
docker run --rm -p 3000:3000 chillofi
```

## Implementation

The application uses TypeScript, React, Next.js App Router, `next-intl`,
and SCSS modules.

- `src/app/page.tsx` composes the screen and playback controls.

- `src/widgets/player/` owns playback state and the audio element.

- Image and noise providers share visual state between the screen and controls.

- Route handlers enumerate music and sound-effect files from `public/audio/`.

- The player connects an HTML audio element to a Web Audio gain node
  for volume control.

Bundled files keep the music collection within the application.
The route handlers read the filesystem, so the current implementation
requires a server runtime rather than a static export.

## Trade-offs and limitations

- Playback uses local tracks rather than a live broadcast or streaming service.
- Changing the bundled music collection requires updating the deployed assets.
- Playback begins after user interaction, in line with browser autoplay rules.
- Volume persistence depends on browser local storage.

## Visual assets

The six illustrated backgrounds in `public/images/` were generated with
OpenAI image generation through ChatGPT and optimized as WebP images.

## Music credits

The 13 bundled music tracks are by [Purrple Cat](https://purrplecat.com/),
licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
See [audio sources and permissions](./AUDIO-LICENSES.md) for the status of
individual recordings and the sound effect.

## License

Application source code: [MIT](./LICENSE).
Music recordings: [CC BY-SA 4.0](./LICENSES/CC-BY-SA-4.0.txt).
The music license does not cover the button sound effect; see
[AUDIO-LICENSES.md](./AUDIO-LICENSES.md).
