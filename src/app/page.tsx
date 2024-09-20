import Image from 'next/image';

import { Screen } from '@widgets';
import { Player } from '@ui';

import background from '@images/background.jpg';

// Image for mobile
// Click on touchpad
// Meta
// Favicon
// Tests
// Lighthouse performance
// Stylelint
// Funding
// seo
// i18n for alt
const HomePage = () => (
  <Screen>
    <Image src={background} alt='background' priority fetchPriority='high' />
    <Player />
  </Screen>
);

export default HomePage;
