import React from 'react';

import Tracks from '../../mocks/FeaturesTracksMock';
import {
  FEATURED_TRACKS_ANIMATION,
  FEATURED_TRACKS_ITEM_ANIMATION,
} from './animation';

import { Container, Scroll, AnimationContainer, Card } from './styles';

export function FeaturedTracks(): React.ReactElement {
  return (
    <Container>
      <h1>Featured Tracks</h1>
      <AnimationContainer
        variants={FEATURED_TRACKS_ANIMATION}
        initial="hidden"
        animate="show"
      >
        <Scroll horizontal>
          {Tracks.map(track => {
            return (
              <Card variants={FEATURED_TRACKS_ITEM_ANIMATION} key={track.id}>
                <img src={track.picture} alt={track.artist} />
                <strong>{track.title}</strong>
                <p>{track.artist}</p>
              </Card>
            );
          })}
        </Scroll>
      </AnimationContainer>
    </Container>
  );
}
