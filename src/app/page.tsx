import { Controls, Panel, Wrapper } from '@ui';
import {
  // CRTEffectSwitcher,
  ImageSwitcher,
  Logo,
  Player,
  Screen,
  VolumeMixer,
} from '@widgets';

import { SettingsProvider } from './providers/settings-provider';

const HomePage = () => (
  <SettingsProvider>
    <Wrapper>
      <Screen />
      <Panel>
        <Controls>
          <Player />
          <ImageSwitcher />
          {/* <CRTEffectSwitcher /> */}
          <VolumeMixer />
        </Controls>
        <Logo />
      </Panel>
    </Wrapper>
  </SettingsProvider>
);

export default HomePage;
