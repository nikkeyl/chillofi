import { Controls, Panel, Wrapper } from '@ui';
import {
  // CRTEffectSwitcher,
  ImageSwitcher,
  Logo,
  Player,
  Screen,
  VolumeMixer,
} from '@widgets';

const HomePage = () => (
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
);

export default HomePage;
