import React from 'react';
import { FeaturedTracks } from '../../components/FeaturedTracks';
import { Slider } from '../../components/Slider';
import { TopTracks } from '../../components/TopTracks';
import { Container, Content } from './styles';

export function Discover() {
  return (
    <Container>
      <Slider />
      <Content>
        <FeaturedTracks />
        <TopTracks />
      </Content>
    </Container>
  );
}
