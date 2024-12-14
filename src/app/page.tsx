import { getTranslations } from 'next-intl/server';

import { getImages } from '@/config/get-images';
import { ImageProvider } from '@/providers/image-provider/image.provider';
import { NoiseProvider } from '@/providers/noise-provider/noise.provider';
import { Controls } from '@/ui/controls/controls';
import { Player } from '@/widgets/player/player';
import { Screen } from '@/widgets/screen/screen';
import { Switcher } from '@/widgets/switcher/switcher';

const HomePage = async () => {
  const images = await getImages();
  const translations = await getTranslations('labels');

  const noiseTranslation = translations('noise_control_label');
  const playTranslation = translations('play_control_label');
  const imageTranslation = translations('image_control_label');
  const controlsTranslation = translations('controls');
  const screenTranslation = translations('screen');
  const altTranslation = translations('alt');

  return (
    <NoiseProvider>
      <ImageProvider images={images}>
        <Screen alt={altTranslation} ariaLabel={screenTranslation} />
        <Controls ariaLabel={controlsTranslation}>
          <Switcher
            ariaLabelledBy={noiseTranslation}
            text={noiseTranslation}
            type='noise'
          />
          <Player ariaLabelledBy={playTranslation} text={playTranslation} />
          <Switcher
            ariaLabelledBy={imageTranslation}
            text={imageTranslation}
            type='image'
          />
        </Controls>
      </ImageProvider>
    </NoiseProvider>
  );
};

export default HomePage;
