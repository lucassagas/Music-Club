import React from 'react';

import logoImg from '../../assets/logo.svg';
import {
  MAIN_SIDEBAR_NAVIGATION,
  MY_TRACKS_SIDEBAR_NAVIGATION,
  PLAYLIST_SIDEBAR_NAVIGATION,
} from '../../constants';
import { Navigation } from './Navigation';
import { Container, CategoryTitle } from './styles';

export function SideBar(): React.ReactElement {
  return (
    <Container>
      <img src={logoImg} alt="Logo" />

      <nav>
        <ul>
          {Object.entries(MAIN_SIDEBAR_NAVIGATION).map(([key, value]) => (
            <Navigation
              key={key}
              section={key}
              icon={value.icon}
              link={value.link}
            />
          ))}

          <CategoryTitle>My Tracks</CategoryTitle>

          {Object.entries(MY_TRACKS_SIDEBAR_NAVIGATION).map(([key, value]) => (
            <Navigation
              key={key}
              section={key}
              icon={value.icon}
              link={value.link}
            />
          ))}

          <CategoryTitle>Playlist</CategoryTitle>

          {Object.entries(PLAYLIST_SIDEBAR_NAVIGATION).map(([key, value]) => (
            <Navigation
              key={key}
              section={key}
              icon={value.icon}
              link={value.link}
            />
          ))}
        </ul>
      </nav>
    </Container>
  );
}
