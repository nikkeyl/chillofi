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

## Verification

Build the application with `bun run build`. The repository also includes
GitHub Actions workflows for build, linting, and formatting checks.

For changes to playback or controls, manually check:

1. Start, pause, and resume playback.
1. Change volume and reload the page to check persistence.
1. Allow a track to finish and check that the next track starts.
1. Switch backgrounds and toggle the noise overlay.
1. Navigate the controls with a keyboard and check the mobile layout.

The repository does not currently include an automated application test suite.

## License

[MIT](./LICENSE).
