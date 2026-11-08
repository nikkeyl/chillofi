# Chillofi

A browser lo-fi player for work, study and relaxation, built with Next.js,
React and TypeScript.

[Listen](https://chillofi.nikkeyl.com/).

## Playback

Start playback with the player controls and adjust the volume. Tracks advance
automatically when they end.
Choose a background and switch the visual noise effect on or off. Playback
requires user interaction; the browser does not start music automatically.

Volume and background preferences persist in local storage. The interface
supports English, German, Japanese and Russian, using the browser language
with English as the fallback.

## Run locally

Use Bun 1.3.10, as pinned in `Dockerfile`.

```sh
bun install --frozen-lockfile
bun run dev
```

Open [localhost:3000](http://localhost:3000). To create a production build:

```sh
bun run build
```

Or run the container:

```sh
docker build -t chillofi .
docker run --rm -p 3000:3000 chillofi
```

## Audio and backgrounds

Route handlers read the bundled music and sound files from `public/audio/`.
The player needs a server runtime, and changing that collection requires
redeploying the assets. An HTML audio element feeds a Web Audio gain node
for volume control.

The six illustrated backgrounds were generated through ChatGPT and optimized
as WebP. They are bundled with the application.

The 13 music tracks are by [Purrple Cat](https://purrplecat.com/) and use
[CC BY-SA 4.0](LICENSES/CC-BY-SA-4.0.txt). Preserve the source links,
attribution and modification notices in
[AUDIO-LICENSES.md](AUDIO-LICENSES.md) when redistributing the recordings.

## License

Application code: [MIT](LICENSE). The recordings retain their separate music
license. That license does not cover the button sound effect; its recorded
provenance is in `AUDIO-LICENSES.md`.
