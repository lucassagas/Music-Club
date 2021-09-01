import React from 'react';

import ProfilePic from '../../../assets/profile_pic.svg';
import { CrownIcon, PremiumIcon } from '../../../assets/icons';

import { Container, ProfilePicture } from './styles';

export function Profile(): React.ReactElement {
  return (
    <Container>
      <ProfilePicture>
        <img src={ProfilePic} alt="Profile" />
        <PremiumIcon />
      </ProfilePicture>
      <div>
        <strong>AF Shinchan</strong>
        <span>
          <CrownIcon />
          Premium
        </span>
      </div>
    </Container>
  );
}
