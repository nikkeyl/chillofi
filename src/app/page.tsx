import { Logo, Panel, Player, Screen, Switcher, Volume, Wrapper } from '@ui';

const HomePage = () => (
  <Wrapper>
    <Screen />
    <Panel>
      <Player />
      <Switcher />
      <Volume />
      <Logo />
    </Panel>
  </Wrapper>
);

export default HomePage;
