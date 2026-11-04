# Chillofi

Lo-fi player built with Next.js, React, TypeScript, next-intl and SCSS modules.

## Run

Use Bun; the Dockerfile pins 1.3.10.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
```

Development URL: [localhost:3000](http://localhost:3000).

```sh
docker build -t chillofi .
docker run --rm -p 3000:3000 chillofi
```

## Decisions

- Bundled tracks and filesystem-backed route handlers require a server runtime.
  Updating the music collection requires redeploying its assets.

- An HTML audio element feeds a Web Audio gain node. Playback starts after user
  interaction; volume persists in local storage.

- Providers share image and noise state. Browser language selects English,
  German, Japanese or Russian, with English as the fallback.

## Files

- `src/app/page.tsx` — composition; `src/widgets/player/` — playback state.

- `src/app/api/{get-music,get-sounds}/route.ts` — audio file lists.

- `src/shared/config/get-images.ts` — backgrounds; `public/images/` — six
  illustrations generated through ChatGPT and optimized as WebP.

- `public/audio/` — music and sound effects; [audio sources](AUDIO-LICENSES.md).

## Credits and license

The 13 music tracks are by [Purrple Cat](https://purrplecat.com/), under
[CC BY-SA 4.0](LICENSES/CC-BY-SA-4.0.txt). See
[AUDIO-LICENSES.md](AUDIO-LICENSES.md) for recording sources and attribution.

Application code: [MIT](LICENSE). The music license excludes the button sound
effect; its recorded provenance is in `AUDIO-LICENSES.md`.
