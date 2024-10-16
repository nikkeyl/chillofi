import {
  FlickerSwitcher,
  ImageSwitcher,
  Logo,
  Panel,
  Player,
  Screen,
  VolumeMixer,
  Wrapper,
} from '@ui';

const HomePage = () => (
  <Wrapper>
    <Screen />
    <Panel>
      <Player />
      <ImageSwitcher />
      <FlickerSwitcher />
      <VolumeMixer />
      <Logo />
    </Panel>
  </Wrapper>
);

export default HomePage;
