import { Logo, Panel, Player, Screen, Wrapper } from '@ui';

const HomePage = () => (
  <Wrapper>
    <Screen />
    <Panel>
      <Player />
      <Logo text='Chillofi' />
    </Panel>
  </Wrapper>
);

export default HomePage;
