import React from 'react';
import Routes from '../../routes';
import { Header } from '../Header';
import { Player } from '../Player';
import { SideBar } from '../SideBar';

import { Container, Content } from './styles';

export function Layout() {
  return (
    <Container>
      <Header />
      <SideBar />
      <Content>
        <Routes />
      </Content>
      <Player />
    </Container>
  );
}
