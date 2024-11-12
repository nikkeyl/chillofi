const audios = [
  'bedhead',
  'cats-cradle',
  'crescent-moon',
  'dreams-come-true',
  'field-of-fireflies',
  'floating-castle',
  'forgotten-places',
  'green-tea',
  'heart-of-the-ocean',
  'in-the-past',
  'journey-end',
  'lazy-afternoon',
  'lost-and-found',
  'midnight-snack',
  'missing-you',
  'moonlight-walk',
  'serendipity',
  'signs-of-life',
  'silent-wood',
  'sleepless',
  'storm-clouds',
  'wanted',
  'where-the-waves-take-us',
  'wild-strawberry',
];

const playList = audios.map((file, index) => ({
  src: `/audio/music/${file}.aac`,
  id: index + 1,
}));

export { playList };
