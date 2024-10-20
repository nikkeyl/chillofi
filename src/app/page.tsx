import {
  Controls,
  // FlickerSwitcher,
  ImageSwitcher,
  Logo,
  Panel,
  Player,
  Screen,
  VolumeMixer,
  Wrapper,
} from '@widgets';

const HomePage = () => (
  <Wrapper>
    <Screen />
    <Panel>
      <Controls>
        <Player />
        <ImageSwitcher />
        {/* <FlickerSwitcher /> */}
        <VolumeMixer />
      </Controls>
      <Logo />
    </Panel>
  </Wrapper>
);

export default HomePage;
