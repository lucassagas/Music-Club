import React from 'react';
import {
  DiscoverIcon,
  SongsIcon,
  AlbumsIcon,
  ArtistsIcon,
  YouTubeIcon,
} from '../assets/icons';

export default {
  Discover: {
    icon: <DiscoverIcon />,
    link: '/',
  },
  Songs: {
    icon: <SongsIcon />,
    link: '/songs',
  },
  Albums: {
    icon: <AlbumsIcon />,
    link: '/albums',
  },
  Artists: {
    icon: <ArtistsIcon />,
    link: '/artists',
  },
  YouTube: {
    icon: <YouTubeIcon />,
    link: '/youtube',
  },
} as const;
