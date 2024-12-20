import { getTranslations } from 'next-intl/server';

import { getImages } from '@/config';
import { ImageProvider, NoiseProvider } from '@/providers';
import { Controls } from '@/ui';
import { Player, Screen, Switcher } from '@/widgets';

const HomePage = async () => {
  const images = await getImages();
  const translations = await getTranslations('labels');

  const altTranslation = translations('alt');
  const controlsTranslation = translations('controls');
  const imageLabelTranslation = translations('image_control_label');
  const noiseLabelTranslation = translations('noise_control_label');
  const playControlTranslation = translations('play_control');
  const playLabelTranslation = translations('play_control_label');
  const screenTranslation = translations('screen');
  const switcherControlTranslation = translations('switcher_control');
  const volumeControlTranslation = translations('volume_control');
  const volumeLabelTranslation = translations('volume_control_label');

  return (
    <NoiseProvider>
      <ImageProvider images={images}>
        <Screen alt={altTranslation} label={screenTranslation} />
        <Controls label={controlsTranslation}>
          <Switcher
            isNoise
            label={switcherControlTranslation}
            labelledBy={noiseLabelTranslation}
            text={noiseLabelTranslation}
          />
          <Player
            label={playControlTranslation}
            labelledBy={playLabelTranslation}
            text={playLabelTranslation}
            volumeControlLabel={volumeControlTranslation}
            volumeLabel={volumeLabelTranslation}
          />
          <Switcher
            isImage
            label={switcherControlTranslation}
            labelledBy={imageLabelTranslation}
            text={imageLabelTranslation}
          />
        </Controls>
      </ImageProvider>
    </NoiseProvider>
  );
};

export default HomePage;
