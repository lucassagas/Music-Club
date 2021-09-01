import React from 'react';

import { SearchIcon, TVIcon, RadioIcon, BellIcon } from '../../assets/icons';
import { Profile } from './Profile';

import { Container } from './styles';

export function Header(): React.ReactElement {
  return (
    <Container>
      <div>
        <SearchIcon />
        <input type="text" placeholder="Search your entertainment" />
      </div>

      <div>
        <button type="button">
          <TVIcon />
        </button>
        <button type="button">
          <RadioIcon />
        </button>
        <button type="button">
          <BellIcon />
        </button>
        <Profile />
      </div>
    </Container>
  );
}
